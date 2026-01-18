import { useState } from 'react';
import {
    Search,
    X,
} from 'lucide-react';

import Filter from '#components/Filter';
import Table from '#components/Table';
import manufacturerCompatibility from '#utils/compatibility';
import batteryData, { type FilterSection } from '#utils/filterData';

function Filters() {
    const [selectedFilters, setSelectedFilters] = useState<Set<string>>(new Set());
    const [searchTerms, setSearchTerms] = useState<{ [key: string]: string }>({});

    const isOptionDisabled = (sectionKey: string, optionValue: string) => {
        // NEVER disable manufacturer options - key fix here!
        if (sectionKey === '-1') {
            return false;
        }

        // Get selected manufacturers
        const selectedManufacturers = Array.from(selectedFilters).filter(
            (filter) => batteryData[0].options.some((opt) => opt.value === filter),
        );

        // If no manufacturer is selected, don't disable anything
        if (selectedManufacturers.length === 0) return false;

        // Check if the option is available for ANY selected manufacturer
        const isAvailable = selectedManufacturers.some((manufacturerId) => {
            const compatibility = manufacturerCompatibility[manufacturerId];
            if (!compatibility) return true; // Changed: If no compatibility data, ALLOW it
            const compatibleValues = compatibility[sectionKey];
            if (!compatibleValues) return true; // Changed: If no rules for this section, ALLOW it
            return compatibleValues.includes(optionValue);
        });

        return !isAvailable;
    };

    const toggleFilter = (value: string) => {
        setSelectedFilters((prev) => {
            const newSet = new Set(prev);

            if (newSet.has(value)) {
                newSet.delete(value);
            } else {
                newSet.add(value);
            }

            return newSet;
        });
    };

    const clearAllFilters = () => {
        setSelectedFilters(new Set());
    };

    const getFilteredOptions = (section: FilterSection) => {
        const searchTerm = searchTerms[section.key]?.toLowerCase() || '';
        if (!searchTerm) return section.options;
        return section.options.filter((option) => option.text.toLowerCase().includes(searchTerm));
    };

    return (
        <div className="w-full bg-white border-b border-gray-200 overflow-x-auto">
            {/* Header */}
            <div className="px-6 py-3 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h2 className="text-base font-semibold text-gray-900">Filters</h2>
                    {selectedFilters.size > 0 && (
                        <div className="text-sm text-gray-600">
                            {selectedFilters.size}
                            {' '}
                            filter
                            {selectedFilters.size !== 1 ? 's' : ''}
                            {' '}
                            applied
                        </div>
                    )}
                </div>
                {selectedFilters.size > 0 && (
                    <button
                        type="button"
                        onClick={clearAllFilters}
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                        Clear All
                    </button>
                )}
            </div>

            {/* Filter Sections */}
            <div className="flex border-b border-gray-200">
                {batteryData.map((section) => {
                    const filteredOptions = getFilteredOptions(section);

                    return (
                        <div key={section.key} className="border-r border-gray-200 last:border-r-0 min-w-64">
                            {/* Section Header */}
                            <div
                                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-100"
                            >
                                <span className="font-medium text-gray-900 text-sm whitespace-nowrap">
                                    {section.label}
                                </span>
                            </div>

                            {/* Section Content */}
                            <div className="px-4 py-3">
                                {/* Search Box */}
                                {section.parametricSearchEnabled && (
                                    <div className="mb-2 relative">
                                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            value={searchTerms[section.key] || ''}
                                            onChange={(e) => setSearchTerms((prev) => ({
                                                ...prev,
                                                [section.key]: e.target.value,
                                            }))}
                                            className="w-full pl-8 pr-8 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                        {searchTerms[section.key] && (
                                            <button
                                                type="button"
                                                onClick={() => setSearchTerms((prev) => ({
                                                    ...prev,
                                                    [section.key]: '',
                                                }))}
                                                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                            >
                                                <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                                            </button>
                                        )}
                                    </div>
                                )}

                                {/* Options */}
                                <div className="space-y-1.5 max-h-80 overflow-y-auto">
                                    {filteredOptions.length > 0 ? (
                                        filteredOptions.map((option) => (
                                            <Filter
                                                key={option.key}
                                                option={option}
                                                checked={selectedFilters.has(option.value)}
                                                onChange={() => toggleFilter(option.value)}
                                                disabled={isOptionDisabled(
                                                    section.key,
                                                    option.value,
                                                )}
                                            />
                                        ))
                                    ) : (
                                        <div className="text-sm text-gray-500 py-2">
                                            No results found
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Table
                selectedFilters={selectedFilters}
            />
        </div>
    );
}

export default Filters;
