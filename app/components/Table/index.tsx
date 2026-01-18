import { useState } from 'react';

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

const tableColumns: TableColumn[] = [
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

interface Props {
    selectedFilters: Set<string>;
}

interface Props {
    selectedFilters: Set<string>;
}

function Table(props: Props) {
    const { selectedFilters } = props;

    const [sortBy, setSortBy] = useState('mfrPartNumber');

    // Helper function to get value from ProductDataItem by id
    const getProductValue = (productItems: ProductDataItem[], id: string): any => {
        const item = productItems.find((pr) => pr.id === id);
        if (!item) return null;

        switch (item.type) {
            case 'compare':
                return item.value;
            case 'productDetail':
                return item.value;
            case 'qtyAvailable':
                return item.value[0]?.quantity || '-';
            case 'unitPrice':
                return item.value[0]?.unitPrice || '-';
            case 'string':
                return item.value.value;
            case 'link':
                return item.value.label;
            case 'stringList':
                return item.value[0]?.value || '-';
            default:
                return null;
        }
    };

    const getFilteredProducts = () => {
        if (selectedFilters.size === 0) return productData;

        return productData.filter((productItems) => {
            const selectedManufacturers = Array.from(selectedFilters).filter(
                (f) => batteryData[0].options.some((opt) => opt.value === f),
            );
            const selectedSeries = Array.from(selectedFilters).filter(
                (f) => batteryData[1].options.some((opt) => opt.value === f),
            );
            const selectedChemistry = Array.from(selectedFilters).filter(
                (f) => batteryData[2].options.some((opt) => opt.value === f),
            );

            // Get manufacturer from productDetail item
            const productDetail = productItems.find((item) => item.type === 'productDetail');
            const manufacturer = productDetail?.type === 'productDetail'
                ? productDetail.value.manufacturer.value.label
                : '';

            // Get series from link item with id '-4'
            const seriesItem = productItems.find((item) => item.id === '-4');
            const series = seriesItem?.type === 'link' ? seriesItem.value.label : '';

            // Get chemistry from string item with id '412'
            const chemistryItem = productItems.find((item) => item.id === '412');
            const chemistry = chemistryItem?.type === 'string' ? chemistryItem.value.value : '';

            if (selectedManufacturers.length > 0) {
                const manuMatch = selectedManufacturers.some((m) => {
                    const option = batteryData[0].options.find((opt) => opt.value === m);
                    return option && manufacturer === option.text;
                });
                if (!manuMatch) return false;
            }

            if (selectedSeries.length > 0) {
                const seriesMatch = selectedSeries.some((s) => {
                    const option = batteryData[1].options.find((opt) => opt.value === s);
                    return option && series === option.text;
                });
                if (!seriesMatch) return false;
            }

            if (selectedChemistry.length > 0) {
                const chemMatch = selectedChemistry.some((c) => {
                    const option = batteryData[2].options.find((opt) => opt.value === c);
                    return option && chemistry === option.text;
                });
                if (!chemMatch) return false;
            }

            return true;
        });
    };

    const getColumnValue = (
        productItems: ProductDataItem[],
        columnId: string,
    ) => getProductValue(productItems, columnId);

    const filteredProducts = getFilteredProducts();

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        const aVal = getProductValue(a, sortBy);
        const bVal = getProductValue(b, sortBy);
        const multiplier = 1;
        if (aVal === null || bVal === null) return 0;
        return aVal > bVal ? multiplier : -multiplier;
    });

    return (
        <>
            <div className="bg-white rounded-t-lg shadow-sm px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Products (
                        {filteredProducts.length}
                        {' '}
                        results)
                    </h3>
                </div>
            </div>
            <div className="bg-white rounded-b-lg shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                {tableColumns.map((col) => (
                                    <th
                                        key={col.id}
                                        className={`px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${col.sortable ? 'cursor-pointer hover:bg-gray-100' : ''}`}
                                        onClick={() => col.sortable && setSortBy(col.id)}
                                    >
                                        <div className="flex items-center gap-1">
                                            {col.label}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {sortedProducts.length > 0 ? (
                                sortedProducts.map((productItems, index) => {
                                    const productDetail = productItems.find((item) => item.type === 'productDetail');
                                    const compareItem = productItems.find((item) => item.type === 'compare');

                                    return (
                                        <tr key={`${index}`} className="hover:bg-gray-50">
                                            {tableColumns.map((col) => {
                                                const item = productItems.find(
                                                    (i) => i.id === col.id,
                                                );

                                                // Special rendering for image column
                                                if (col.id === '-99' && compareItem?.type === 'compare') {
                                                    return (
                                                        <td key={col.id} className="px-4 py-4 whitespace-nowrap">
                                                            <img
                                                                src={compareItem.value.iconImage}
                                                                alt={compareItem
                                                                    .value.manufacturerPartNumber}
                                                                className="w-16 h-16 object-contain"
                                                            />
                                                        </td>
                                                    );
                                                }

                                                // Special rendering for manufacturer part number
                                                if (col.id === '-100' && productDetail?.type === 'productDetail') {
                                                    return (
                                                        <td key={col.id} className="px-4 py-4 whitespace-nowrap">
                                                            <div className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer">
                                                                {productDetail.value.productNumber}
                                                            </div>
                                                            <div className="text-xs text-gray-500">
                                                                {productDetail
                                                                    .value.manufacturer.value.label}
                                                            </div>
                                                            <div className="text-xs text-gray-400 mt-1">
                                                                {productDetail.value.description}
                                                            </div>
                                                        </td>
                                                    );
                                                }

                                                // Quantity available
                                                if (col.id === '-102' && item?.type === 'qtyAvailable') {
                                                    return (
                                                        <td key={col.id} className="px-4 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                                                            {item.value[0]?.quantity}
                                                        </td>
                                                    );
                                                }

                                                // Price
                                                if (col.id === '-101' && item?.type === 'unitPrice') {
                                                    return (
                                                        <td key={col.id} className="px-4 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                            {item.value[0]?.unitPrice}
                                                        </td>
                                                    );
                                                }

                                                // Tariff status
                                                if (col.id === '-9' && item?.type === 'string') {
                                                    const { value } = item.value;
                                                    return (
                                                        <td key={col.id} className="px-4 py-4 whitespace-nowrap">
                                                            <span className={`text-xs px-2 py-1 rounded-full ${value === 'No tariff' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                                {value}
                                                            </span>
                                                        </td>
                                                    );
                                                }

                                                // Default rendering for other columns
                                                const value = getColumnValue(productItems, col.id);
                                                return (
                                                    <td key={col.id} className="px-4 py-4 text-sm text-gray-700">
                                                        {value || '-'}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan={tableColumns.length} className="px-6 py-12 text-center text-gray-500">
                                        <div className="text-lg font-medium">No products match your filters</div>
                                        <div className="text-sm mt-2">Try adjusting your filter selections</div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Table;
