import { useEffect, useRef, useState } from 'react';
import {
    Search,
    X,
} from 'lucide-react';

import Filter from '#components/Filter';
import Table from '#components/Table';
import manufacturerCompatibility from '#utils/compatibility';
import batteryData, { type FilterSection } from '#utils/filterData';

// Simplified mode shows only essential filters
const SIMPLIFIED_FILTER_KEYS = ['-1', '-4', '412', '2079']; // Manufacturer, Series, Battery Chemistry, Voltage

interface Props {
    isSimplifiedMode?: boolean;
    clearFiltersSignal?: number;
}

function Filters(props: Props) {
    const { isSimplifiedMode = false, clearFiltersSignal = 0 } = props;

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

    const getFilteredOptions = (section: FilterSection) => {
        const searchTerm = searchTerms[section.key]?.toLowerCase() || '';
        if (!searchTerm) return section.options;
        return section.options.filter((option) => option.text.toLowerCase().includes(searchTerm));
    };

    // Filter sections based on mode
    const displayedFilterSections = isSimplifiedMode
        ? batteryData.filter((section) => SIMPLIFIED_FILTER_KEYS.includes(section.key))
        : batteryData;

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
            <Table selectedFilters={selectedFilters} isSimplifiedMode={isSimplifiedMode} />
        </div>
    );
}

export default Filters;
