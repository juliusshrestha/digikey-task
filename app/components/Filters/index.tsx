import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
    Search,
    X,
} from 'lucide-react';

import Filter from '#components/Filter';
import Table from '#components/Table';
import manufacturerCompatibility from '#utils/compatibility';
import batteryData, { type FilterSection } from '#utils/filterData';
import productData from '#utils/productData';

// Simplified mode shows only essential filters
const SIMPLIFIED_FILTER_KEYS = ['-1', '-4', '412', '2079']; // Manufacturer, Series, Battery Chemistry, Voltage

// Map task IDs to their relevant filter keys for simplified mode
const TASK_FILTER_MAP: Record<string, string[]> = {
    'battery-task-1': ['46', '32', '2079'], // Size/Dimension, Battery Cell Size, Voltage - Rated
    'battery-task-2': ['412', '2079'], // Battery Chemistry, Voltage - Rated
    'battery-task-3': ['46', '33', '-1'], // Size/Dimension, Capacity, Manufacturer
    'battery-task-4': ['32', '2079', '46'], // Battery Cell Size, Voltage - Rated, Size/Dimension
};

interface Props {
    isSimplifiedMode?: boolean;
    clearFiltersSignal?: number;
    currentTaskId?: string;
}

function Filters(props: Props) {
    const { isSimplifiedMode = false, clearFiltersSignal = 0, currentTaskId = '' } = props;

    const [selectedFilters, setSelectedFilters] = useState<Set<string>>(new Set());
    const [searchTerms, setSearchTerms] = useState<{ [key: string]: string }>({});
    const [globalSearch, setGlobalSearch] = useState('');
    const lastClearSignalRef = useRef<number>(clearFiltersSignal);

    const createSelectedKey = (sectionKey: string, optionValue: string) => `${sectionKey}:${optionValue}`;

    const parseSelectedKey = (selectedKey: string) => {
        const sepIndex = selectedKey.indexOf(':');
        if (sepIndex === -1) {
            return { sectionKey: '', optionValue: selectedKey };
        }
        return {
            sectionKey: selectedKey.slice(0, sepIndex),
            optionValue: selectedKey.slice(sepIndex + 1),
        };
    };

    const createFilterDomId = (sectionKey: string, optionValue: string) => (
        `filter-${sectionKey}-${optionValue}`.replace(/[^a-zA-Z0-9_-]/g, '_')
    );

    const isOptionDisabled = (sectionKey: string, optionValue: string) => {
        if (sectionKey === '-1') {
            return false;
        }

        const selectedManufacturers = Array.from(selectedFilters)
            .map(parseSelectedKey)
            .filter((s) => s.sectionKey === '-1')
            .map((s) => s.optionValue);

        if (selectedManufacturers.length === 0) return false;

        const isAvailable = selectedManufacturers.some((manufacturerId) => {
            const compatibility = manufacturerCompatibility[manufacturerId];
            if (!compatibility) return true;
            const compatibleValues = compatibility[sectionKey];
            if (!compatibleValues) return true;
            return compatibleValues.includes(optionValue);
        });

        return !isAvailable;
    };

    const toggleFilter = (sectionKey: string, optionValue: string) => {
        setSelectedFilters((prev) => {
            const newSet = new Set(prev);
            const selectedKey = createSelectedKey(sectionKey, optionValue);

            if (newSet.has(selectedKey)) {
                newSet.delete(selectedKey);
            } else {
                newSet.add(selectedKey);
            }

            return newSet;
        });
    };

    const clearAllFilters = () => {
        setSelectedFilters(new Set());
    };

    // Allow parent to force-clear filters (used by TaskExperiment)
    useEffect(() => {
        if (clearFiltersSignal === lastClearSignalRef.current) return;
        lastClearSignalRef.current = clearFiltersSignal;

        setSelectedFilters(new Set());
        setSearchTerms({});
        setGlobalSearch('');
    }, [clearFiltersSignal]);

    // Get currently filtered products (excluding the current filter section being evaluated)
    const getFilteredProductsForOptionCheck = useMemo(() => {
        if (!isSimplifiedMode) return productData;

        // Apply other selected filters (excluding the section we're checking)
        const otherFilters = Array.from(selectedFilters)
            .map(parseSelectedKey)
            .filter((s) => s.sectionKey);

        if (otherFilters.length === 0 && !globalSearch.trim()) {
            return productData;
        }

        const selectedBySectionKey = otherFilters.reduce((acc, { sectionKey, optionValue }) => {
            if (!acc[sectionKey]) acc[sectionKey] = new Set<string>();
            acc[sectionKey].add(optionValue);
            return acc;
        }, {} as Record<string, Set<string>>);

        let filtered = productData;

        // Apply other filter selections
        if (Object.keys(selectedBySectionKey).length > 0) {
            filtered = filtered.filter((productItems) => (
                Object.entries(selectedBySectionKey).every(([sectionKey, selectedValues]) => {
                    if (selectedValues.size === 0) return true;
                    if (['stocking', 'environmental', 'media', 'exclude'].includes(sectionKey)) {
                        return true;
                    }

                    if (sectionKey === '-1') {
                        const compareItem = productItems.find((item) => item.type === 'compare');
                        if (compareItem?.type !== 'compare') return false;
                        return selectedValues.has(String(compareItem.value.manufacturer.id));
                    }

                    const item = productItems.find((i) => i.id === sectionKey);
                    if (!item) return false;

                    if (item.type === 'string' || item.type === 'link') {
                        if (item.filterOptions) {
                            return selectedValues.has(item.filterOptions);
                        }
                        const productText = item.type === 'string' ? item.value.value : item.value.label;
                        const optionTextLookup = batteryData.find((s) => s.key === sectionKey)?.options.reduce((acc, opt) => {
                            acc[opt.value] = opt.text;
                            return acc;
                        }, {} as Record<string, string>) || {};
                        return Array.from(selectedValues).some((v) => optionTextLookup[v] === productText);
                    }

                    if (item.type === 'stringList') {
                        if (Array.isArray(item.filterOptions) && item.filterOptions.length > 0) {
                            return item.filterOptions.some((v) => selectedValues.has(v));
                        }
                        const productTexts = item.value.map((v) => v.value);
                        const optionTextLookup = batteryData.find((s) => s.key === sectionKey)?.options.reduce((acc, opt) => {
                            acc[opt.value] = opt.text;
                            return acc;
                        }, {} as Record<string, string>) || {};
                        return Array.from(selectedValues).some((v) => {
                            const selectedText = optionTextLookup[v];
                            return selectedText ? productTexts.includes(selectedText) : false;
                        });
                    }

                    return false;
                })
            ));
        }

        // Apply global search
        if (globalSearch.trim()) {
            const searchTerm = globalSearch.trim().toLowerCase();
            filtered = filtered.filter((productItems) => {
                const searchableTexts: string[] = [];
                const compareItem = productItems.find((item) => item.type === 'compare');
                if (compareItem?.type === 'compare') {
                    searchableTexts.push(compareItem.value.manufacturerPartNumber.toLowerCase());
                    searchableTexts.push(compareItem.value.manufacturer.name.toLowerCase());
                    searchableTexts.push(compareItem.value.shortDescription.toLowerCase());
                }
                const productDetail = productItems.find((item) => item.type === 'productDetail');
                if (productDetail?.type === 'productDetail') {
                    searchableTexts.push(productDetail.value.productNumber.toLowerCase());
                    searchableTexts.push(productDetail.value.description.toLowerCase());
                }
                const seriesItem = productItems.find((item) => item.id === '-4');
                if (seriesItem?.type === 'link') {
                    searchableTexts.push(seriesItem.value.label.toLowerCase());
                }
                productItems.forEach((item) => {
                    if (item.type === 'string') {
                        searchableTexts.push(item.value.value.toLowerCase());
                    } else if (item.type === 'link') {
                        searchableTexts.push(item.value.label.toLowerCase());
                    } else if (item.type === 'stringList') {
                        item.value.forEach((v) => {
                            searchableTexts.push(v.value.toLowerCase());
                        });
                    }
                });
                return searchableTexts.some((text) => text.includes(searchTerm));
            });
        }

        return filtered;
    }, [isSimplifiedMode, selectedFilters, globalSearch]);

    // Check if a filter option has matching products
    const hasMatchingProducts = useCallback((sectionKey: string, optionValue: string, optionText: string): boolean => {
        if (!isSimplifiedMode) return true;

        const productsToCheck = getFilteredProductsForOptionCheck;

        return productsToCheck.some((productItems) => {
            if (sectionKey === '-1') {
                const compareItem = productItems.find((item) => item.type === 'compare');
                if (compareItem?.type !== 'compare') return false;
                return String(compareItem.value.manufacturer.id) === optionValue;
            }

            const item = productItems.find((i) => i.id === sectionKey);
            if (!item) return false;

            if (item.type === 'string' || item.type === 'link') {
                if (item.filterOptions) {
                    return item.filterOptions === optionValue;
                }
                const productText = item.type === 'string' ? item.value.value : item.value.label;
                return productText === optionText;
            }

            if (item.type === 'stringList') {
                if (Array.isArray(item.filterOptions) && item.filterOptions.length > 0) {
                    return item.filterOptions.includes(optionValue);
                }
                const productTexts = item.value.map((v) => v.value);
                return productTexts.includes(optionText);
            }

            return false;
        });
    }, [isSimplifiedMode, getFilteredProductsForOptionCheck]);

    const getFilteredOptions = (section: FilterSection) => {
        let options = section.options;

        // In simplified mode, filter out options that don't have matching products
        if (isSimplifiedMode) {
            options = options.filter((option) => hasMatchingProducts(section.key, option.value, option.text));
        }

        // Apply search term filter
        const searchTerm = searchTerms[section.key]?.toLowerCase() || '';
        if (searchTerm) {
            options = options.filter((option) => option.text.toLowerCase().includes(searchTerm));
        }

        return options;
    };

    // Filter sections based on mode
    const displayedFilterSections = useMemo(() => {
        if (!isSimplifiedMode) {
            return batteryData;
        }

        // In simplified mode, show only task-specific filters
        if (currentTaskId && TASK_FILTER_MAP[currentTaskId]) {
            const taskFilterKeys = TASK_FILTER_MAP[currentTaskId];
            return batteryData.filter((section) => taskFilterKeys.includes(section.key));
        }

        // Fallback to default simplified filters if no task is selected
        return batteryData.filter((section) => SIMPLIFIED_FILTER_KEYS.includes(section.key));
    }, [isSimplifiedMode, currentTaskId]);

    return (
        <div className="bg-gray-100">
            {/* Page Title */}
            <div className="bg-white px-8 py-6 border-b border-gray-200">
                <h1 className="text-2xl font-bold text-gray-900">Batteries Rechargeable (Secondary)</h1>
            </div>

            {/* Search and Results Header */}
            <div className="bg-white px-8 py-5 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    {/* Search Within */}
                    <div className="relative flex items-center">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        <input
                            type="text"
                            placeholder="Search Within"
                            value={globalSearch}
                            onChange={(e) => setGlobalSearch(e.target.value)}
                            className="pl-9 pr-5 py-2.5 border border-gray-300 rounded-lg text-sm w-56 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Clear filters if any selected */}
                {selectedFilters.size > 0 && (
                    <button
                        type="button"
                        onClick={clearAllFilters}
                        className="text-sm text-orange-600 hover:text-orange-800 font-medium px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors"
                    >
                        Clear All Filters ({selectedFilters.size})
                    </button>
                )}
            </div>

            {/* Main Filter Sections - All filters with horizontal scroll */}
            <div className="bg-white border-b border-gray-200 overflow-x-auto">
                <div className="flex min-w-max">
                            {displayedFilterSections.map((section, index) => {
                                const filteredOptions = getFilteredOptions(section);

                                return (
                                    <div
                                        key={section.key}
                                        className={`flex-shrink-0 ${isSimplifiedMode ? 'w-64' : 'w-56'} ${index < displayedFilterSections.length - 1 ? 'border-r border-gray-200' : ''}`}
                                    >
                                        {/* Section Header */}
                                        <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
                                            <span className="font-semibold text-sm text-gray-900">
                                                {section.label}
                                            </span>
                                        </div>

                                        {/* Search Box */}
                                        {section.parametricSearchEnabled && (
                                            <div className="px-5 py-4 border-b border-gray-100">
                                                <div className="relative flex items-center">
                                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                                    <input
                                                        type="text"
                                                        placeholder="Search Filter"
                                                        value={searchTerms[section.key] || ''}
                                                        onChange={(e) => setSearchTerms((prev) => ({
                                                            ...prev,
                                                            [section.key]: e.target.value,
                                                        }))}
                                                        className="w-full pl-9 pr-8 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                                                    />
                                                    {searchTerms[section.key] && (
                                                        <button
                                                            type="button"
                                                            onClick={() => setSearchTerms((prev) => ({
                                                                ...prev,
                                                                [section.key]: '',
                                                            }))}
                                                            className="absolute right-3 top-1/2 -translate-y-1/2"
                                                        >
                                                            <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        {/* Options */}
                                        <div className={`px-5 py-4 ${isSimplifiedMode ? 'max-h-80' : 'max-h-64'} overflow-y-auto`}>
                                            <div className="space-y-2">
                                                {filteredOptions.length > 0 ? (
                                                    filteredOptions.map((option) => (
                                                        <Filter
                                                            key={option.key}
                                                            option={option}
                                                            inputId={createFilterDomId(
                                                                section.key, option.value)}
                                                            checked={selectedFilters.has(
                                                                createSelectedKey(
                                                                    section.key, option.value))}
                                                            onChange={() => toggleFilter(
                                                                section.key, option.value)}
                                                            disabled={isOptionDisabled(
                                                                section.key,
                                                                option.value,
                                                            )}
                                                        />
                                                    ))
                                                ) : (
                                                    <div className="text-sm text-gray-500 py-3">
                                                        No results found
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

            {/* Spacer between filters and table */}
            <div className="h-8 bg-gray-100" />

            {/* Table */}
            <Table selectedFilters={selectedFilters} isSimplifiedMode={isSimplifiedMode} globalSearch={globalSearch} />
        </div>
    );
}

export default Filters;
