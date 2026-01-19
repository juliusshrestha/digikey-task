import { useEffect, useState } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    HelpCircle,
} from 'lucide-react';

import batteryData from '#utils/filterData';
import productData from '#utils/productData';
import { ProductDataItem } from '#utils/types';

interface TableColumn {
    id: string;
    label: string;
    sortable: boolean;
    hideable: boolean;
    denseViewOnly: boolean;
    help?: {
        content: string;
        title: string;
    };
    parameterType?: string;
}
const totalProducts = 1905;

const tableColumns: TableColumn[] = [
    {
        id: 'checkbox', label: '', sortable: false, hideable: false, denseViewOnly: false,
    },
    {
        id: '-99', label: '', sortable: false, hideable: false, denseViewOnly: false,
    },
    {
        id: '-100', label: 'Mfr Part #', sortable: true, hideable: false, denseViewOnly: false,
    },
    {
        id: '-102',
        label: 'Quantity Available',
        sortable: true,
        hideable: true,
        denseViewOnly: false,
        help: { content: 'The quantities in this column are updated periodically throughout the day.', title: 'Stock' },
    },
    {
        id: '-101', label: 'Price', sortable: true, hideable: true, denseViewOnly: false,
    },
    {
        id: '-9', label: 'Tariff Status', sortable: true, hideable: true, denseViewOnly: false,
    },
    {
        id: '-4', label: 'Series', sortable: true, hideable: true, denseViewOnly: false,
    },
    {
        id: '-5', label: 'Package', sortable: true, hideable: true, denseViewOnly: false,
    },
    {
        id: '1989', label: 'Product Status', sortable: true, hideable: true, denseViewOnly: false,
    },
    {
        id: '412', label: 'Battery Chemistry', sortable: true, hideable: true, denseViewOnly: false, parameterType: 'String',
    },
    {
        id: '32', label: 'Battery Cell Size', sortable: true, hideable: true, denseViewOnly: false, parameterType: 'String',
    },
    {
        id: '2079', label: 'Voltage - Rated', sortable: true, hideable: true, denseViewOnly: false, parameterType: 'UnitOfMeasure',
    },
    {
        id: '33', label: 'Capacity', sortable: true, hideable: true, denseViewOnly: false, parameterType: 'String',
    },
    {
        id: '46', label: 'Size / Dimension', sortable: true, hideable: true, denseViewOnly: false, parameterType: 'String',
    },
    {
        id: '258', label: 'Termination Style', sortable: true, hideable: true, denseViewOnly: false, parameterType: 'String',
    },
];

// Simplified mode shows only essential columns
const SIMPLIFIED_COLUMN_IDS = ['checkbox', '-99', '-100', '-102', '-101', '-4', '412', '2079'];

interface Props {
    selectedFilters: Set<string>;
    isSimplifiedMode?: boolean;
    globalSearch?: string;
}

const optionTextBySectionKey: Record<string, Record<string, string>> = batteryData.reduce(
    (acc, section) => {
        acc[section.key] = section.options.reduce((optAcc, opt) => {
            optAcc[opt.value] = opt.text;
            return optAcc;
        }, {} as Record<string, string>);
        return acc;
    },
    {} as Record<string, Record<string, string>>,
);

function Table(props: Props) {
    const { selectedFilters, isSimplifiedMode = false, globalSearch = '' } = props;

    const [sortBy, setSortBy] = useState('-100');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(25);

    const handleSort = (columnId: string) => {
        if (sortBy === columnId) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(columnId);
            setSortDirection('asc');
        }
    };

    const toggleRowSelection = (productId: string) => {
        setSelectedRows((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(productId)) {
                newSet.delete(productId);
            } else {
                newSet.add(productId);
            }
            return newSet;
        });
    };

    const toggleAllRows = () => {
        if (selectedRows.size === paginatedProducts.length) {
            setSelectedRows(new Set());
        } else {
            const allIds = paginatedProducts.map((items) => {
                const compareItem = items.find((item) => item.type === 'compare');
                return compareItem?.type === 'compare' ? compareItem.value.productId : '';
            }).filter(Boolean);
            setSelectedRows(new Set(allIds));
        }
    };

    const getProductValue = (productItems: ProductDataItem[], id: string): string | number | null => {
        const item = productItems.find((pr) => pr.id === id);
        if (!item) return null;

        switch (item.type) {
            case 'compare':
                return item.value.manufacturerPartNumber;
            case 'productDetail':
                return item.value.productNumber;
            case 'qtyAvailable':
                return item.value[0]?.quantity || '-';
            case 'unitPrice':
                return item.value[0]?.unitPrice || '-';
            case 'string':
                return item.value.value;
            case 'link':
                return item.value.label;
            case 'stringList':
                return item.value.map((v) => v.value).join(', ') || '-';
            default:
                return null;
        }
    };

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

    const getFilteredProducts = () => {
        let filtered = productData;

        // Apply filter selections
        if (selectedFilters.size > 0) {
            const selectedBySectionKey = Array.from(selectedFilters)
                .map(parseSelectedKey)
                .filter((s) => s.sectionKey)
                .reduce((acc, { sectionKey, optionValue }) => {
                    if (!acc[sectionKey]) acc[sectionKey] = new Set<string>();
                    acc[sectionKey].add(optionValue);
                    return acc;
                }, {} as Record<string, Set<string>>);

            filtered = filtered.filter((productItems) => (
                Object.entries(selectedBySectionKey).every(([sectionKey, selectedValues]) => {
                    if (selectedValues.size === 0) return true;

                    // Skip secondary filter sections (they don't map to product data)
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
                        const optionTextLookup = optionTextBySectionKey[sectionKey] || {};
                        return Array.from(selectedValues).some((v) => optionTextLookup[v] === productText);
                    }

                    if (item.type === 'stringList') {
                        if (Array.isArray(item.filterOptions) && item.filterOptions.length > 0) {
                            return item.filterOptions.some((v) => selectedValues.has(v));
                        }

                        const productTexts = item.value.map((v) => v.value);
                        const optionTextLookup = optionTextBySectionKey[sectionKey] || {};
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
                // Search in various product fields
                const searchableTexts: string[] = [];

                // Manufacturer Part Number
                const compareItem = productItems.find((item) => item.type === 'compare');
                if (compareItem?.type === 'compare') {
                    searchableTexts.push(compareItem.value.manufacturerPartNumber.toLowerCase());
                    searchableTexts.push(compareItem.value.manufacturer.name.toLowerCase());
                    searchableTexts.push(compareItem.value.shortDescription.toLowerCase());
                }

                // Product Number and Description
                const productDetail = productItems.find((item) => item.type === 'productDetail');
                if (productDetail?.type === 'productDetail') {
                    searchableTexts.push(productDetail.value.productNumber.toLowerCase());
                    searchableTexts.push(productDetail.value.description.toLowerCase());
                }

                // Series
                const seriesItem = productItems.find((item) => item.id === '-4');
                if (seriesItem?.type === 'link') {
                    searchableTexts.push(seriesItem.value.label.toLowerCase());
                }

                // All string fields
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

                // Check if search term matches any of the searchable texts
                return searchableTexts.some((text) => text.includes(searchTerm));
            });
        }

        return filtered;
    };

    const filteredProducts = getFilteredProducts();
    const filteredProductsCount = filteredProducts.length;

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        const aVal = getProductValue(a, sortBy);
        const bVal = getProductValue(b, sortBy);
        const multiplier = sortDirection === 'asc' ? 1 : -1;
        if (aVal === null || bVal === null) return 0;
        if (typeof aVal === 'string' && typeof bVal === 'string') {
            return aVal.localeCompare(bVal) * multiplier;
        }
        return (aVal > bVal ? 1 : -1) * multiplier;
    });

    const totalPages = Math.ceil(filteredProductsCount / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = sortedProducts.slice(startIndex, endIndex);

    // Reset to page 1 when filters or search change
    useEffect(() => {
        setCurrentPage(1);
        setSelectedRows(new Set());
    }, [selectedFilters, globalSearch]);

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            setSelectedRows(new Set()); // Clear selection when changing pages
        }
    };

    const handleItemsPerPageChange = (newItemsPerPage: number) => {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1); // Reset to first page when changing items per page
    };

    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages + 2) {
            // Show all pages if total is small
            for (let i = 1; i <= totalPages; i += 1) {
                pages.push(i);
            }
        } else {
            // Always show first page
            pages.push(1);

            if (currentPage > 3) {
                pages.push('...');
            }

            // Show pages around current page
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i += 1) {
                pages.push(i);
            }

            if (currentPage < totalPages - 2) {
                pages.push('...');
            }

            // Always show last page
            pages.push(totalPages);
        }

        return pages;
    };

    // Filter columns based on mode
    const displayedColumns = isSimplifiedMode
        ? tableColumns.filter((col) => SIMPLIFIED_COLUMN_IDS.includes(col.id))
        : tableColumns;

    const tableMinWidth = isSimplifiedMode ? '1200px' : '2400px';

    return (
        <div className="bg-white shadow-sm rounded-lg mx-4 mb-8">
            {/* Table Header Bar */}
            <div className="px-8 py-5 border-b border-gray-200 flex items-center justify-between bg-gray-50 rounded-t-lg">
                <div className="flex items-center gap-8">
                    <span className="text-sm text-gray-700">
                        Showing
                        {' '}
                        <span className="font-semibold text-gray-900">
                            {filteredProductsCount > 0 ? startIndex + 1 : 0}
                            {' - '}
                            {Math.min(endIndex, filteredProductsCount)}
                        </span>
                        {' '}
                        of
                        {' '}
                        <span className="font-semibold text-gray-900">
                            {filteredProductsCount.toLocaleString()}
                        </span>
                    </span>

                    {/* Items per page */}
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-600">Show:</span>
                        <select
                            value={itemsPerPage}
                            onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                            className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white"
                        >
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                        </select>
                    </div>

                    {/* Sort By Dropdown */}
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-600">Sort By:</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="text-sm border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white"
                        >
                            <option value="-100">Featured</option>
                            <option value="-102">Quantity Available</option>
                            <option value="-101">Price</option>
                            <option value="412">Battery Chemistry</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Table with horizontal scroll */}
            <div className="overflow-x-auto" style={{ maxWidth: '100vw' }}>
                <table className="w-full" style={{ minWidth: tableMinWidth }}>
                    {/* Purple header */}
                    <thead>
                        <tr className="bg-[#2d2d86]">
                            {displayedColumns.map((col) => (
                                <th
                                    key={col.id}
                                    className={`px-5 py-4 text-left text-xs font-medium text-white uppercase tracking-wide ${col.sortable ? 'cursor-pointer hover:bg-[#3d3d96]' : ''}`}
                                    onClick={() => col.sortable && handleSort(col.id)}
                                >
                                    {col.id === 'checkbox' ? (
                                        <input
                                            type="checkbox"
                                            checked={selectedRows.size === paginatedProducts.length && paginatedProducts.length > 0}
                                            onChange={toggleAllRows}
                                            className="w-4 h-4 rounded border-white/50 bg-transparent"
                                        />
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <span className="whitespace-nowrap">{col.label}</span>
                                            {col.help && (
                                                <HelpCircle className="w-4 h-4 text-white/70" />
                                            )}
                                        </div>
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {paginatedProducts.length > 0 ? (
                            paginatedProducts.map((productItems) => {
                                const productDetail = productItems.find((item) => item.type === 'productDetail');
                                const compareItem = productItems.find((item) => item.type === 'compare');
                                const productId = compareItem?.type === 'compare' ? compareItem.value.productId : '';

                                return (
                                    <tr key={productId} className="hover:bg-gray-50 transition-colors">
                                        {displayedColumns.map((col) => {
                                            const item = productItems.find((i) => i.id === col.id);

                                            // Checkbox column
                                            if (col.id === 'checkbox') {
                                                return (
                                                    <td key={col.id} className="px-5 py-5 whitespace-nowrap">
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedRows.has(productId)}
                                                            onChange={() => toggleRowSelection(productId)}
                                                            className="w-4 h-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                                                        />
                                                    </td>
                                                );
                                            }

                                            // Image column
                                            if (col.id === '-99' && compareItem?.type === 'compare') {
                                                return (
                                                    <td key={col.id} className="px-5 py-5 whitespace-nowrap">
                                                        <img
                                                            src={`https:${compareItem.value.iconImage}`}
                                                            alt={compareItem.value.manufacturerPartNumber}
                                                            className="w-16 h-16 object-contain"
                                                        />
                                                    </td>
                                                );
                                            }

                                            // Manufacturer part number
                                            if (col.id === '-100' && productDetail?.type === 'productDetail') {
                                                return (
                                                    <td key={col.id} className="px-5 py-5">
                                                        <div className="space-y-1.5">
                                                            <a
                                                                href="#"
                                                                className="text-sm font-semibold text-blue-700 hover:text-blue-900 hover:underline block"
                                                            >
                                                                {productDetail.value.productNumber}
                                                            </a>
                                                            <div className="text-xs text-gray-500 leading-relaxed">
                                                                {productDetail.value.description}
                                                            </div>
                                                            <a
                                                                href="#"
                                                                className="text-xs text-blue-600 hover:underline block"
                                                            >
                                                                {productDetail.value.manufacturer.value.label}
                                                            </a>
                                                        </div>
                                                    </td>
                                                );
                                            }

                                            // Quantity available
                                            if (col.id === '-102') {
                                                const qtyItem = productItems.find((i) => i.id === '-102' && i.type === 'qtyAvailable');
                                                if (qtyItem?.type === 'qtyAvailable') {
                                                    return (
                                                        <td key={col.id} className="px-5 py-5 whitespace-nowrap">
                                                            <div className="text-sm font-semibold text-gray-900">
                                                                {qtyItem.value[0]?.quantity || '-'}
                                                            </div>
                                                            <div className="text-xs text-green-600 mt-1">
                                                                {qtyItem.value[0]?.label || ''}
                                                            </div>
                                                        </td>
                                                    );
                                                }
                                                // Fallback if qtyAvailable not found
                                                return (
                                                    <td key={col.id} className="px-5 py-5 whitespace-nowrap">
                                                        <div className="text-sm font-semibold text-gray-900">-</div>
                                                    </td>
                                                );
                                            }

                                            // Price with tiers
                                            if (col.id === '-101' && item?.type === 'unitPrice') {
                                                return (
                                                    <td key={col.id} className="px-5 py-5">
                                                        <div className="space-y-2">
                                                            {item.value.map((tier, idx) => (
                                                                <div key={idx} className="text-sm">
                                                                    <span className="text-gray-500">{tier.quantity} : </span>
                                                                    <span className="font-semibold text-gray-900">{tier.unitPrice}</span>
                                                                    {tier.label && (
                                                                        <div className="text-xs text-gray-500 mt-0.5">{tier.label}</div>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </td>
                                                );
                                            }

                                            // Tariff status
                                            if (col.id === '-9' && item?.type === 'string') {
                                                return (
                                                    <td key={col.id} className="px-5 py-5 whitespace-nowrap text-sm text-gray-700">
                                                        {item.value.value}
                                                    </td>
                                                );
                                            }

                                            // Series (link)
                                            if (col.id === '-4' && item?.type === 'link') {
                                                return (
                                                    <td key={col.id} className="px-5 py-5 whitespace-nowrap">
                                                        <a href="#" className="text-sm text-blue-700 hover:underline">
                                                            {item.value.label}
                                                        </a>
                                                    </td>
                                                );
                                            }

                                            // Package (stringList with help icons)
                                            if (col.id === '-5' && item?.type === 'stringList') {
                                                return (
                                                    <td key={col.id} className="px-5 py-5">
                                                        <div className="space-y-1.5">
                                                            {item.value.map((pkg, idx) => (
                                                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                                                    {pkg.value}
                                                                    {pkg.help && (
                                                                        <HelpCircle className="w-4 h-4 text-gray-400" />
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </td>
                                                );
                                            }

                                            // Default rendering
                                            const value = getProductValue(productItems, col.id);
                                            return (
                                                <td key={col.id} className="px-5 py-5 text-sm text-gray-700 whitespace-nowrap">
                                                    {value || '-'}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan={displayedColumns.length} className="px-8 py-20 text-center text-gray-500">
                                    <div className="text-lg font-medium">No products match your filters</div>
                                    <div className="text-sm mt-3">Try adjusting your filter selections</div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="px-8 py-5 border-t border-gray-200 flex items-center justify-between bg-gray-50 rounded-b-lg">
                <div className="text-sm text-gray-700">
                    Page
                    {' '}
                    <span className="font-semibold">{currentPage}</span>
                    {' of '}
                    <span className="font-semibold">{totalPages}</span>
                </div>

                <div className="flex items-center gap-2">
                    {/* First page */}
                    <button
                        type="button"
                        onClick={() => goToPage(1)}
                        disabled={currentPage === 1}
                        className="p-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
                        title="First page"
                    >
                        <ChevronsLeft className="w-4 h-4 text-gray-600" />
                    </button>

                    {/* Previous page */}
                    <button
                        type="button"
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
                        title="Previous page"
                    >
                        <ChevronLeft className="w-4 h-4 text-gray-600" />
                    </button>

                    {/* Page numbers */}
                    <div className="flex items-center gap-1">
                        {getPageNumbers().map((page) => (
                            typeof page === 'number' ? (
                                <button
                                    key={page}
                                    type="button"
                                    onClick={() => goToPage(page)}
                                    className={`min-w-[40px] h-10 px-3 rounded-lg text-sm font-medium transition-colors ${
                                        currentPage === page
                                            ? 'bg-[#2d2d86] text-white'
                                            : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                                    }`}
                                >
                                    {page}
                                </button>
                            ) : (
                                <span key={`ellipsis-${page}`} className="px-2 text-gray-500">
                                    {page}
                                </span>
                            )
                        ))}
                    </div>

                    {/* Next page */}
                    <button
                        type="button"
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
                        title="Next page"
                    >
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                    </button>

                    {/* Last page */}
                    <button
                        type="button"
                        onClick={() => goToPage(totalPages)}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
                        title="Last page"
                    >
                        <ChevronsRight className="w-4 h-4 text-gray-600" />
                    </button>
                </div>

                {/* Quick jump to page */}
                <div className="flex items-center gap-3">
                    <label htmlFor="page-jump" className="text-sm text-gray-600">Go to page:</label>
                    <input
                        id="page-jump"
                        type="number"
                        min={1}
                        max={totalPages}
                        value={currentPage}
                        onChange={(e) => {
                            const page = parseInt(e.target.value, 10);
                            if (!Number.isNaN(page)) {
                                goToPage(page);
                            }
                        }}
                        className="w-16 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 text-center"
                    />
                </div>
            </div>
        </div>
    );
}

export default Table;
