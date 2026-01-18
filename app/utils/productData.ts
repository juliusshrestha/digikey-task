import { ProductDataItem } from './types';

const baseProductData: ProductDataItem[][] = [
    [
        {
            type: 'compare',
            value: {
                productId: '1889203',
                productNumber: '728-1052-1-ND',
                packaging: 'Cut Tape (CT)',
                quantity: 1,
                manufacturer: {
                    id: 728,
                    name: 'Seiko Instruments',
                },
                shortDescription: 'BATT LITHIUM 3V 1MAH COIN',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/010/139/982/ML414H-IV01E_tmb%2864x64%29.jpg',
                manufacturerPartNumber: 'ML414H IV01E',
                price: '1.95066',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: 'https://www.sii.co.jp/hubfs/40217095/MicroBattery_E_20230330_rev05-security.pdf',
                description: 'BATT LITHIUM 3V 1MAH COIN',
                detailUrl: '/en/products/detail/seiko-instruments/ML414H-IV01E/1889203',
                image: {
                    label: 'ML414H-IV01E',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/414/ML414H-IV01E.JPG',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/010/139/982/ML414H-IV01E_tmb%2864x64%29.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'Seiko Instruments',
                        url: '/en/supplier-centers/seiko-instruments',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '1889203',
                productNumber: 'ML414H IV01E',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '32,587',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$1.95066',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$1.95066',
                            extPrice: '$1.95',
                        },
                        {
                            brkQty: '10',
                            unitPrice: '$1.62187',
                            extPrice: '$16.22',
                        },
                        {
                            brkQty: '50',
                            unitPrice: '$1.42568',
                            extPrice: '$71.28',
                        },
                        {
                            brkQty: '100',
                            unitPrice: '$1.34872',
                            extPrice: '$134.87',
                        },
                        {
                            brkQty: '250',
                            unitPrice: '$1.25337',
                            extPrice: '$313.34',
                        },
                        {
                            brkQty: '500',
                            unitPrice: '$1.18579',
                            extPrice: '$592.89',
                        },
                        {
                            brkQty: '1,000',
                            unitPrice: '$1.17810',
                            extPrice: '$1,178.10',
                        },
                    ],
                    quantity: '1',
                    label: 'Cut Tape (CT)',
                    showLeadTime: false,
                },
                {
                    unitPrice: '$1.10485',
                    mergedPricingTiers: [
                        {
                            brkQty: '4,000',
                            unitPrice: '$1.10485',
                            extPrice: '$4,419.40',
                        },
                        {
                            brkQty: '8,000',
                            unitPrice: '$1.04548',
                            extPrice: '$8,363.84',
                        },
                    ],
                    quantity: '4,000',
                    label: 'Tape & Reel (TR)',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'link',
            value: {
                label: 'ML414H',
                url: '/en/products/result?s=N4IgjCBcoLQCxVAYygMwIYBsDOBTANCAG4B2aWehA9lANohwAcYAbAgLqEAOALlCCAC%2bwoA',
                type: 'text',
                external: false,
            },
            id: '-4',
            filterOptions: '48164',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Tape & Reel (TR)',
                    help: {
                        content: '<p>Tape & Reel is an unmodified reel of continuous tape as received from a manufacturer. A length of empty tape at the beginning and end, known respectively as a leader and trailer, enables the use of automated assembly equipment. The tape is wound onto a plastic reel according to Electronics Industries Alliance (EIA) standards. Reel size, pitch, quantity, orientation and other detailed information is usually found toward the end of the part’s datasheet. Reels are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Tape & Reel',
                    },
                },
                {
                    value: 'Cut Tape (CT)',
                    help: {
                        content: '<p>Cut tape is a length of tape, cut from a reel (described above), containing exactly the number of parts ordered. Cut tape does not contain a leader or trailer, rendering it unsuitable for many automated assembly machines. The piece(s) of tape are then packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Cut Tape (CT)',
                    },
                },
                {
                    value: 'Digi-Reel®',
                    help: {
                        content: '<p>A <a href=\'https://www.digikey.com/en/videos/d/digi-key-electronics/what-is-a-digi-reel\' target=\'_blank\'>Digi-Reel®</a> is a custom quantity reel of continuous cut-tape made from a manufacturer’s reel. A 18 inch leader and trailer are attached so that the sprocket holes are aligned enabling direct and flawless feeding into automated board assembly equipment and then rewound onto a plastic reel according to Electronics Industries Alliance (EIA) standards. In most instances we can assemble this item specifically for your order and ship it the same day. We will contact you if we are unable to fulfill your order.</p><p>A \'reeling fee\' will be charged for each reel and included in your total cost.</p><p>Digi-Reels are a custom product and are non-cancelable and non-returnable.</p>',
                        title: 'Digi-Reel®',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '1',
                '2',
                '243',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Lithium',
            },
            id: '412',
            filterOptions: '365295',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'Coin, 4.8mm',
            },
            id: '32',
            filterOptions: '332116',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '3 V',
            },
            id: '2079',
            filterOptions: '3 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '1mAh',
            },
            id: '33',
            filterOptions: '120508',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '46',
            filterOptions: '1',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'SMD (SMT) Tab',
            },
            id: '258',
            filterOptions: '404185',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '1887175',
                productNumber: '728-1134-ND',
                packaging: 'Tray',
                quantity: 1,
                manufacturer: {
                    id: 728,
                    name: 'Seiko Instruments',
                },
                shortDescription: 'BATT LITHIUM 3V 5.5MAH COIN',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/010/728/MS621FE_tmb.jpg',
                manufacturerPartNumber: 'MS621FE',
                price: '2.2',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: 'https://www.sii.co.jp/hubfs/40217095/MicroBattery_E_20230330_rev05-security.pdf',
                description: 'BATT LITHIUM 3V 5.5MAH COIN',
                detailUrl: '/en/products/detail/seiko-instruments/MS621FE/1887175',
                image: {
                    label: 'MS621FE',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/310/MS621FE.jpg',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/010/728/MS621FE_tmb.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'Seiko Instruments',
                        url: '/en/supplier-centers/seiko-instruments',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '1887175',
                productNumber: 'MS621FE',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '24,552',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$2.20000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$2.20000',
                            extPrice: '$2.20',
                        },
                        {
                            brkQty: '10',
                            unitPrice: '$1.82500',
                            extPrice: '$18.25',
                        },
                        {
                            brkQty: '50',
                            unitPrice: '$1.60440',
                            extPrice: '$80.22',
                        },
                        {
                            brkQty: '100',
                            unitPrice: '$1.51780',
                            extPrice: '$151.78',
                        },
                        {
                            brkQty: '300',
                            unitPrice: '$1.39007',
                            extPrice: '$417.02',
                        },
                        {
                            brkQty: '500',
                            unitPrice: '$1.33444',
                            extPrice: '$667.22',
                        },
                        {
                            brkQty: '1,000',
                            unitPrice: '$1.26255',
                            extPrice: '$1,262.55',
                        },
                        {
                            brkQty: '2,500',
                            unitPrice: '$1.17350',
                            extPrice: '$2,933.75',
                        },
                        {
                            brkQty: '5,000',
                            unitPrice: '$1.11039',
                            extPrice: '$5,551.95',
                        },
                    ],
                    quantity: '1',
                    label: 'Tray',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'link',
            value: {
                label: 'MS621FE',
                url: '/en/products/result?s=N4IgjCBcoLQCxVAYygMwIYBsDOBTANCAG4B2aWehA9lANrgCcA7AAwBMIAuoQA4AuUECAC%2booA',
                type: 'text',
                external: false,
            },
            id: '-4',
            filterOptions: '19702',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Tray',
                    help: {
                        content: '<p>Tray usually refers to a JEDEC standard matrix tray measuring 12.7x5.35 inches and either 0.25 or 0.40 inches tall. Trays are usually constructed from plastic, but aluminum is permissible. JEDEC trays contain slots to allow air to pass vertically and are rated for at least 140°C to allow drying of parts in industrial ovens. Trays are stackable and feature a chamfered corner indicating the orientation of pin one of the parts. Trays are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Tray',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '17',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Lithium',
            },
            id: '412',
            filterOptions: '365295',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'Coin, 6.8mm',
            },
            id: '32',
            filterOptions: '332118',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '3 V',
            },
            id: '2079',
            filterOptions: '3 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '5.5mAh',
            },
            id: '33',
            filterOptions: '232958',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.27\' Dia x 0.08\' H (6.8mm x 2.1mm)',
            },
            id: '46',
            filterOptions: '16854',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'Requires Holder',
            },
            id: '258',
            filterOptions: '395953',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '1889204',
                productNumber: '728-1053-ND',
                packaging: 'Tray',
                quantity: 1,
                manufacturer: {
                    id: 728,
                    name: 'Seiko Instruments',
                },
                shortDescription: 'BATT LITHIUM 3V 1MAH COIN',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/002/649/623/MS621FE-FL11E%2C%20MS518SE-FL35E%2C%20%20MS412FE-FL26E_tmb.jpg',
                manufacturerPartNumber: 'MS412FE-FL26E',
                price: '2.2',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: 'https://www.sii.co.jp/hubfs/40217095/MicroBattery_E_20230330_rev05-security.pdf',
                description: 'BATT LITHIUM 3V 1MAH COIN',
                detailUrl: '/en/products/detail/seiko-instruments/MS412FE-FL26E/1889204',
                image: {
                    label: 'MS1.6, MS1.8, MS2.7',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/2576/MS621FE-FL11E%2C%20MS518SE-FL35E%2C%20%20MS412FE-FL26E.JPG',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/002/649/623/MS621FE-FL11E%2C%20MS518SE-FL35E%2C%20%20MS412FE-FL26E_tmb.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'Seiko Instruments',
                        url: '/en/supplier-centers/seiko-instruments',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '1889204',
                productNumber: 'MS412FE-FL26E',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '6,065',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$2.20000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$2.20000',
                            extPrice: '$2.20',
                        },
                        {
                            brkQty: '10',
                            unitPrice: '$1.82500',
                            extPrice: '$18.25',
                        },
                        {
                            brkQty: '50',
                            unitPrice: '$1.60440',
                            extPrice: '$80.22',
                        },
                        {
                            brkQty: '200',
                            unitPrice: '$1.43590',
                            extPrice: '$287.18',
                        },
                        {
                            brkQty: '400',
                            unitPrice: '$1.35845',
                            extPrice: '$543.38',
                        },
                        {
                            brkQty: '600',
                            unitPrice: '$1.31513',
                            extPrice: '$789.08',
                        },
                        {
                            brkQty: '1,000',
                            unitPrice: '$1.26255',
                            extPrice: '$1,262.55',
                        },
                        {
                            brkQty: '2,600',
                            unitPrice: '$1.16983',
                            extPrice: '$3,041.56',
                        },
                        {
                            brkQty: '5,000',
                            unitPrice: '$1.11039',
                            extPrice: '$5,551.95',
                        },
                    ],
                    quantity: '1',
                    label: 'Tray',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'link',
            value: {
                label: 'MS412FE',
                url: '/en/products/result?s=N4IgjCBcoLQCxVAYygMwIYBsDOBTANCAG4B2aWehA9lANrgCcAbAwyALqEAOALlCCAC%2bwoA',
                type: 'text',
                external: false,
            },
            id: '-4',
            filterOptions: '19699',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Tray',
                    help: {
                        content: '<p>Tray usually refers to a JEDEC standard matrix tray measuring 12.7x5.35 inches and either 0.25 or 0.40 inches tall. Trays are usually constructed from plastic, but aluminum is permissible. JEDEC trays contain slots to allow air to pass vertically and are rated for at least 140°C to allow drying of parts in industrial ovens. Trays are stackable and feature a chamfered corner indicating the orientation of pin one of the parts. Trays are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Tray',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '17',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Lithium',
            },
            id: '412',
            filterOptions: '365295',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'Coin, 4.8mm',
            },
            id: '32',
            filterOptions: '332116',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '3 V',
            },
            id: '2079',
            filterOptions: '3 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '1mAh',
            },
            id: '33',
            filterOptions: '120508',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.19\' Dia x 0.05\' H (4.8mm x 1.2mm)',
            },
            id: '46',
            filterOptions: '13555',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '258',
            filterOptions: '1',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '1202947',
                productNumber: 'SY103-ND',
                packaging: 'Bulk',
                quantity: 1,
                manufacturer: {
                    id: 935,
                    name: 'FDK America, Inc.',
                },
                shortDescription: 'BATT LITHIUM 3V 5.8MAH COIN',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/001/151/155/ML621-TZ1_tmb.jpg',
                manufacturerPartNumber: 'ML621-TZ1',
                price: '2.42',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: '//mm.digikey.com/Volume0/opasdata/d220001/medias/docus/1816/ML621.PDF',
                description: 'BATT LITHIUM 3V 5.8MAH COIN',
                detailUrl: '/en/products/detail/fdk-america-inc/ML621-TZ1/1202947',
                image: {
                    label: 'ML621-TZ1',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/1098/ML621-TZ1.JPG',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/001/151/155/ML621-TZ1_tmb.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'FDK America, Inc.',
                        url: '/en/supplier-centers/fdk-america',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '1202947',
                productNumber: 'ML621-TZ1',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '4,643',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$2.42000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$2.42000',
                            extPrice: '$2.42',
                        },
                        {
                            brkQty: '10',
                            unitPrice: '$2.00900',
                            extPrice: '$20.09',
                        },
                        {
                            brkQty: '50',
                            unitPrice: '$1.76640',
                            extPrice: '$88.32',
                        },
                        {
                            brkQty: '100',
                            unitPrice: '$1.67100',
                            extPrice: '$167.10',
                        },
                        {
                            brkQty: '250',
                            unitPrice: '$1.55288',
                            extPrice: '$388.22',
                        },
                        {
                            brkQty: '500',
                            unitPrice: '$1.46920',
                            extPrice: '$734.60',
                        },
                        {
                            brkQty: '1,000',
                            unitPrice: '$1.39007',
                            extPrice: '$1,390.07',
                        },
                        {
                            brkQty: '4,000',
                            unitPrice: '$1.24455',
                            extPrice: '$4,978.20',
                        },
                        {
                            brkQty: '8,000',
                            unitPrice: '$1.22500',
                            extPrice: '$9,800.00',
                        },
                    ],
                    quantity: '1',
                    label: 'Bulk',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'link',
            value: {
                label: 'ML621',
                url: '/en/products/result?s=N4IgjCBcoLQCxVAYygMwIYBsDOBTANCAG4B2aWehA9lANogBMAHAJwsDsIAuoQA4AuUECAC%2bYoA',
                type: 'text',
                external: false,
            },
            id: '-4',
            filterOptions: '28997',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Bulk',
                    help: {
                        content: '<p>Bulk refers to a package (usually a bag) of loose unorganized parts, and is usually unsuitable for automated assembly machines. Bulk parts are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Bulk',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '3',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Lithium',
            },
            id: '412',
            filterOptions: '365295',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'Coin, 6.8mm',
            },
            id: '32',
            filterOptions: '332118',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '3 V',
            },
            id: '2079',
            filterOptions: '3 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '5.8mAh',
            },
            id: '33',
            filterOptions: '234464',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.27\' Dia x 0.09\' H (6.8mm x 2.2mm)',
            },
            id: '46',
            filterOptions: '16855',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'SMD (SMT) Tab',
            },
            id: '258',
            filterOptions: '404185',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '1889208',
                productNumber: '728-1057-ND',
                packaging: 'Tray',
                quantity: 1,
                manufacturer: {
                    id: 728,
                    name: 'Seiko Instruments',
                },
                shortDescription: 'BATT LITHIUM 3V 5.5MAH COIN',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/002/649/623/MS621FE-FL11E%2C%20MS518SE-FL35E%2C%20%20MS412FE-FL26E_tmb.jpg',
                manufacturerPartNumber: 'MS621FE-FL11E',
                price: '2.51',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: 'https://www.sii.co.jp/hubfs/40217095/MicroBattery_E_20230330_rev05-security.pdf',
                description: 'BATT LITHIUM 3V 5.5MAH COIN',
                detailUrl: '/en/products/detail/seiko-instruments/MS621FE-FL11E/1889208',
                image: {
                    label: 'MS1.6, MS1.8, MS2.7',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/2576/MS621FE-FL11E%2C%20MS518SE-FL35E%2C%20%20MS412FE-FL26E.JPG',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/002/649/623/MS621FE-FL11E%2C%20MS518SE-FL35E%2C%20%20MS412FE-FL26E_tmb.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'Seiko Instruments',
                        url: '/en/supplier-centers/seiko-instruments',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '1889208',
                productNumber: 'MS621FE-FL11E',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '3,413',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$2.51000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$2.51000',
                            extPrice: '$2.51',
                        },
                        {
                            brkQty: '10',
                            unitPrice: '$2.09000',
                            extPrice: '$20.90',
                        },
                        {
                            brkQty: '50',
                            unitPrice: '$1.83680',
                            extPrice: '$91.84',
                        },
                        {
                            brkQty: '100',
                            unitPrice: '$1.73780',
                            extPrice: '$173.78',
                        },
                        {
                            brkQty: '300',
                            unitPrice: '$1.59157',
                            extPrice: '$477.47',
                        },
                        {
                            brkQty: '500',
                            unitPrice: '$1.52788',
                            extPrice: '$763.94',
                        },
                        {
                            brkQty: '1,000',
                            unitPrice: '$1.44559',
                            extPrice: '$1,445.59',
                        },
                        {
                            brkQty: '2,500',
                            unitPrice: '$1.34366',
                            extPrice: '$3,359.15',
                        },
                        {
                            brkQty: '5,000',
                            unitPrice: '$1.27143',
                            extPrice: '$6,357.15',
                        },
                    ],
                    quantity: '1',
                    label: 'Tray',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'link',
            value: {
                label: 'MS621FE',
                url: '/en/products/result?s=N4IgjCBcoLQCxVAYygMwIYBsDOBTANCAG4B2aWehA9lANrgCcA7AAwBMIAuoQA4AuUECAC%2booA',
                type: 'text',
                external: false,
            },
            id: '-4',
            filterOptions: '19702',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Tray',
                    help: {
                        content: '<p>Tray usually refers to a JEDEC standard matrix tray measuring 12.7x5.35 inches and either 0.25 or 0.40 inches tall. Trays are usually constructed from plastic, but aluminum is permissible. JEDEC trays contain slots to allow air to pass vertically and are rated for at least 140°C to allow drying of parts in industrial ovens. Trays are stackable and feature a chamfered corner indicating the orientation of pin one of the parts. Trays are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Tray',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '17',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Lithium',
            },
            id: '412',
            filterOptions: '365295',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'Coin, 6.8mm',
            },
            id: '32',
            filterOptions: '332118',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '3 V',
            },
            id: '2079',
            filterOptions: '3 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '5.5mAh',
            },
            id: '33',
            filterOptions: '232958',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.27\' Dia x 0.08\' H (6.8mm x 2.1mm)',
            },
            id: '46',
            filterOptions: '16854',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'SMD (SMT) Tab',
            },
            id: '258',
            filterOptions: '404185',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '11696835',
                productNumber: '728-MS621RII27ECT-ND',
                packaging: 'Cut Tape (CT)',
                quantity: 1,
                manufacturer: {
                    id: 728,
                    name: 'Seiko Instruments',
                },
                shortDescription: 'BATT LITHIUM 3V 3MAH COIN',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/030/206/321/MFG_MS621RII27E_tmb%2864x64%29.jpg',
                manufacturerPartNumber: 'MS621R II27E',
                price: '2.68',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: 'https://www.sii.co.jp/hubfs/40217095/MicroBattery_E_20230330_rev05-security.pdf',
                description: 'BATT LITHIUM 3V 3MAH COIN',
                detailUrl: '/en/products/detail/seiko-instruments/MS621R-II27E/11696835',
                image: {
                    label: 'MS621R II27E',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/447/MFG_MS621RII27E.jpg',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/030/206/321/MFG_MS621RII27E_tmb%2864x64%29.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'Seiko Instruments',
                        url: '/en/supplier-centers/seiko-instruments',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '11696835',
                productNumber: 'MS621R II27E',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '3,415',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$2.68000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$2.68000',
                            extPrice: '$2.68',
                        },
                        {
                            brkQty: '10',
                            unitPrice: '$2.22600',
                            extPrice: '$22.26',
                        },
                        {
                            brkQty: '50',
                            unitPrice: '$1.95720',
                            extPrice: '$97.86',
                        },
                        {
                            brkQty: '100',
                            unitPrice: '$1.85160',
                            extPrice: '$185.16',
                        },
                        {
                            brkQty: '250',
                            unitPrice: '$1.72076',
                            extPrice: '$430.19',
                        },
                        {
                            brkQty: '500',
                            unitPrice: '$1.68300',
                            extPrice: '$841.50',
                        },
                    ],
                    quantity: '1',
                    label: 'Cut Tape (CT)',
                    showLeadTime: false,
                },
                {
                    unitPrice: '$1.64951',
                    mergedPricingTiers: [
                        {
                            brkQty: '1,400',
                            unitPrice: '$1.64951',
                            extPrice: '$2,309.31',
                        },
                        {
                            brkQty: '2,800',
                            unitPrice: '$1.56080',
                            extPrice: '$4,370.24',
                        },
                        {
                            brkQty: '4,200',
                            unitPrice: '$1.51117',
                            extPrice: '$6,346.91',
                        },
                    ],
                    quantity: '1,400',
                    label: 'Tape & Reel (TR)',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'link',
            value: {
                label: 'MS621R',
                url: '/en/products/result?s=N4IgjCBcoLQCxVAYygMwIYBsDOBTANCAG4B2aWehA9lANogAcYADAMwCcIAuoQA4AuUECAC%2bYoA',
                type: 'text',
                external: false,
            },
            id: '-4',
            filterOptions: '81039',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Tape & Reel (TR)',
                    help: {
                        content: '<p>Tape & Reel is an unmodified reel of continuous tape as received from a manufacturer. A length of empty tape at the beginning and end, known respectively as a leader and trailer, enables the use of automated assembly equipment. The tape is wound onto a plastic reel according to Electronics Industries Alliance (EIA) standards. Reel size, pitch, quantity, orientation and other detailed information is usually found toward the end of the part’s datasheet. Reels are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Tape & Reel',
                    },
                },
                {
                    value: 'Cut Tape (CT)',
                    help: {
                        content: '<p>Cut tape is a length of tape, cut from a reel (described above), containing exactly the number of parts ordered. Cut tape does not contain a leader or trailer, rendering it unsuitable for many automated assembly machines. The piece(s) of tape are then packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Cut Tape (CT)',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '1',
                '2',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Lithium',
            },
            id: '412',
            filterOptions: '365295',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'Coin, 6.8mm',
            },
            id: '32',
            filterOptions: '332118',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '3 V',
            },
            id: '2079',
            filterOptions: '3 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '3mAh',
            },
            id: '33',
            filterOptions: '202159',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.27\' Dia x 0.08\' H (6.8mm x 2.1mm)',
            },
            id: '46',
            filterOptions: '16854',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'SMD (SMT) Tab',
            },
            id: '258',
            filterOptions: '404185',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '416290',
                productNumber: 'P047-ND',
                packaging: 'Bulk',
                quantity: 1,
                manufacturer: {
                    id: 11,
                    name: 'Panasonic Energy',
                },
                shortDescription: 'BATTERY LITHIUM 3V 45MAH COIN',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/001/625/ML2020%5EH1C_tmb.jpg',
                manufacturerPartNumber: 'ML-2020/H1CN',
                price: '2.7',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: '//mm.digikey.com/Volume0/opasdata/d220001/medias/docus/390/ML_Serie.pdf',
                description: 'BATTERY LITHIUM 3V 45MAH COIN',
                detailUrl: '/en/products/detail/panasonic-energy/ML-2020-H1CN/416290',
                image: {
                    label: 'ML2020/H1C',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/729/ML2020%5EH1C.jpg',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/001/625/ML2020%5EH1C_tmb.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'Panasonic Energy',
                        url: '/en/supplier-centers/panasonic-energy',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '416290',
                productNumber: 'ML-2020/H1CN',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '43,767',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$2.70000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$2.70000',
                            extPrice: '$2.70',
                        },
                        {
                            brkQty: '20',
                            unitPrice: '$2.12300',
                            extPrice: '$42.46',
                        },
                        {
                            brkQty: '40',
                            unitPrice: '$2.00850',
                            extPrice: '$80.34',
                        },
                        {
                            brkQty: '100',
                            unitPrice: '$1.86660',
                            extPrice: '$186.66',
                        },
                        {
                            brkQty: '360',
                            unitPrice: '$1.68483',
                            extPrice: '$606.54',
                        },
                        {
                            brkQty: '720',
                            unitPrice: '$1.59407',
                            extPrice: '$1,147.73',
                        },
                        {
                            brkQty: '1,080',
                            unitPrice: '$1.54330',
                            extPrice: '$1,666.76',
                        },
                        {
                            brkQty: '2,520',
                            unitPrice: '$1.44243',
                            extPrice: '$3,634.92',
                        },
                    ],
                    quantity: '1',
                    label: 'Bulk',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'link',
            value: {
                label: 'ML2020',
                url: '/en/products/result?s=N4IgjCBcoLQCxVAYygMwIYBsDOBTANCAG4B2aWehA9lANrgCcAbAwEwgC6hADgC5QgQAXxFA',
                type: 'text',
                external: false,
            },
            id: '-4',
            filterOptions: '19692',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Bulk',
                    help: {
                        content: '<p>Bulk refers to a package (usually a bag) of loose unorganized parts, and is usually unsuitable for automated assembly machines. Bulk parts are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Bulk',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '3',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Lithium',
            },
            id: '412',
            filterOptions: '365295',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'Coin, 20.0mm',
            },
            id: '32',
            filterOptions: '332110',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '3 V',
            },
            id: '2079',
            filterOptions: '3 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '45mAh',
            },
            id: '33',
            filterOptions: '222078',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.79\' Dia x 0.08\' H (20.0mm x 2.0mm)',
            },
            id: '46',
            filterOptions: '33854',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'PC Pin (Horizontal Mount)',
            },
            id: '258',
            filterOptions: '384843',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '1889209',
                productNumber: '728-1058-ND',
                packaging: 'Tray',
                quantity: 1,
                manufacturer: {
                    id: 728,
                    name: 'Seiko Instruments',
                },
                shortDescription: 'BATT LITH 3V 11MAH COIN 9.5MM',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/010/197/372/MS920SE-FL27E_tmb%2864x64%29.jpg',
                manufacturerPartNumber: 'MS920SE-FL27E',
                price: '2.9',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: 'https://www.sii.co.jp/hubfs/40217095/MicroBattery_E_20230330_rev05-security.pdf',
                description: 'BATT LITH 3V 11MAH COIN 9.5MM',
                detailUrl: '/en/products/detail/seiko-instruments/MS920SE-FL27E/1889209',
                image: {
                    label: 'MS920SE-FL27E',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/637/MS920SE-FL27E.JPG',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/010/197/372/MS920SE-FL27E_tmb%2864x64%29.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'Seiko Instruments',
                        url: '/en/supplier-centers/seiko-instruments',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '1889209',
                productNumber: 'MS920SE-FL27E',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '9,302',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$2.90000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$2.90000',
                            extPrice: '$2.90',
                        },
                        {
                            brkQty: '10',
                            unitPrice: '$2.41000',
                            extPrice: '$24.10',
                        },
                        {
                            brkQty: '50',
                            unitPrice: '$2.11820',
                            extPrice: '$105.91',
                        },
                        {
                            brkQty: '100',
                            unitPrice: '$2.00380',
                            extPrice: '$200.38',
                        },
                        {
                            brkQty: '300',
                            unitPrice: '$1.83530',
                            extPrice: '$550.59',
                        },
                        {
                            brkQty: '500',
                            unitPrice: '$1.76186',
                            extPrice: '$880.93',
                        },
                        {
                            brkQty: '1,000',
                            unitPrice: '$1.66699',
                            extPrice: '$1,666.99',
                        },
                        {
                            brkQty: '2,500',
                            unitPrice: '$1.54949',
                            extPrice: '$3,873.72',
                        },
                        {
                            brkQty: '5,000',
                            unitPrice: '$1.46621',
                            extPrice: '$7,331.05',
                        },
                    ],
                    quantity: '1',
                    label: 'Tray',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'link',
            value: {
                label: 'MS920SE',
                url: '/en/products/result?s=N4IgjCBcoLQCxVAYygMwIYBsDOBTANCAG4B2aWehA9lANrgCcA7AAwDMIAuoQA4AuUECAC%2booA',
                type: 'text',
                external: false,
            },
            id: '-4',
            filterOptions: '19703',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Tray',
                    help: {
                        content: '<p>Tray usually refers to a JEDEC standard matrix tray measuring 12.7x5.35 inches and either 0.25 or 0.40 inches tall. Trays are usually constructed from plastic, but aluminum is permissible. JEDEC trays contain slots to allow air to pass vertically and are rated for at least 140°C to allow drying of parts in industrial ovens. Trays are stackable and feature a chamfered corner indicating the orientation of pin one of the parts. Trays are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Tray',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '17',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Lithium',
            },
            id: '412',
            filterOptions: '365295',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'Coin, 9.5mm',
            },
            id: '32',
            filterOptions: '332120',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '3 V',
            },
            id: '2079',
            filterOptions: '3 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '11mAh',
            },
            id: '33',
            filterOptions: '80098',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.37\' Dia x 0.08\' H (9.5mm x 2.1mm)',
            },
            id: '46',
            filterOptions: '20548',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'SMD (SMT) Tab',
            },
            id: '258',
            filterOptions: '404185',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '597940',
                productNumber: 'P213-ND',
                packaging: 'Bulk',
                quantity: 1,
                manufacturer: {
                    id: 11,
                    name: 'Panasonic Energy',
                },
                shortDescription: 'BATTERY NIMH 1.2V 700MAH AAA',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/200/120/889/HHR-70AAAB8_tmb.jpg',
                manufacturerPartNumber: 'HHR-70AAAE4',
                price: '2.97',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: '//mm.digikey.com/Volume0/opasdata/d220001/medias/docus/1152/HHR-70AAA.pdf',
                description: 'BATTERY NIMH 1.2V 700MAH AAA',
                detailUrl: '/en/products/detail/panasonic-energy/HHR-70AAAE4/597940',
                image: {
                    label: 'HHR-70AAAB8',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/399/HHR-70AAAB8.jpg',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/200/120/889/HHR-70AAAB8_tmb.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'Panasonic Energy',
                        url: '/en/supplier-centers/panasonic-energy',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '597940',
                productNumber: 'HHR-70AAAE4',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '13,222',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$2.97000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$2.97000',
                            extPrice: '$2.97',
                        },
                        {
                            brkQty: '20',
                            unitPrice: '$2.32500',
                            extPrice: '$46.50',
                        },
                        {
                            brkQty: '40',
                            unitPrice: '$2.19650',
                            extPrice: '$87.86',
                        },
                        {
                            brkQty: '100',
                            unitPrice: '$2.03780',
                            extPrice: '$203.78',
                        },
                        {
                            brkQty: '300',
                            unitPrice: '$1.86243',
                            extPrice: '$558.73',
                        },
                        {
                            brkQty: '500',
                            unitPrice: '$1.78610',
                            extPrice: '$893.05',
                        },
                        {
                            brkQty: '1,380',
                            unitPrice: '$1.64359',
                            extPrice: '$2,268.15',
                        },
                        {
                            brkQty: '2,760',
                            unitPrice: '$1.55288',
                            extPrice: '$4,285.95',
                        },
                    ],
                    quantity: '1',
                    label: 'Bulk',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: 'Tariff may apply if shipping to the United States',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'link',
            value: {
                label: 'HHR',
                url: '/en/products/result?s=N4IgjCBcoLQCxVAYygMwIYBsDOBTANCAG4B2aWehA9lANohwAcYArAOwgC6hADgC5QQIAL6igA',
                type: 'text',
                external: false,
            },
            id: '-4',
            filterOptions: '48157',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Bulk',
                    help: {
                        content: '<p>Bulk refers to a package (usually a bag) of loose unorganized parts, and is usually unsuitable for automated assembly machines. Bulk parts are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Bulk',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '3',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Nickel Metal Hydride',
            },
            id: '412',
            filterOptions: '380071',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'AAA',
            },
            id: '32',
            filterOptions: '306894',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '1.2 V',
            },
            id: '2079',
            filterOptions: '1.2 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '700mAh',
            },
            id: '33',
            filterOptions: '272991',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.41\' Dia x 1.75\' H (10.5mm x 44.5mm)',
            },
            id: '46',
            filterOptions: '22387',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'Flat Top (Non-Extending)',
            },
            id: '258',
            filterOptions: '347905',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '6137712',
                productNumber: '728-1078-ND',
                packaging: 'Tray',
                quantity: 1,
                manufacturer: {
                    id: 728,
                    name: 'Seiko Instruments',
                },
                shortDescription: 'BATT LITHIUM 3V 3MAH COIN',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/002/336/280/MS621T-%28top%29_tmb.jpg',
                manufacturerPartNumber: 'MS621T',
                price: '3.04',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: 'https://www.sii.co.jp/hubfs/40217095/MicroBattery_E_20230330_rev05-security.pdf',
                description: 'BATT LITHIUM 3V 3MAH COIN',
                detailUrl: '/en/products/detail/seiko-instruments/MS621T/6137712',
                image: {
                    label: 'MS621T',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/1136/MS621T-%28top%29.jpg',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/002/336/280/MS621T-%28top%29_tmb.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'Seiko Instruments',
                        url: '/en/supplier-centers/seiko-instruments',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '6137712',
                productNumber: 'MS621T',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '7,351',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$3.04000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$3.04000',
                            extPrice: '$3.04',
                        },
                        {
                            brkQty: '10',
                            unitPrice: '$2.52800',
                            extPrice: '$25.28',
                        },
                        {
                            brkQty: '50',
                            unitPrice: '$2.22240',
                            extPrice: '$111.12',
                        },
                        {
                            brkQty: '100',
                            unitPrice: '$2.10240',
                            extPrice: '$210.24',
                        },
                        {
                            brkQty: '300',
                            unitPrice: '$1.92560',
                            extPrice: '$577.68',
                        },
                        {
                            brkQty: '500',
                            unitPrice: '$1.84860',
                            extPrice: '$924.30',
                        },
                        {
                            brkQty: '1,000',
                            unitPrice: '$1.74906',
                            extPrice: '$1,749.06',
                        },
                        {
                            brkQty: '2,500',
                            unitPrice: '$1.62576',
                            extPrice: '$4,064.40',
                        },
                        {
                            brkQty: '5,000',
                            unitPrice: '$1.53841',
                            extPrice: '$7,692.05',
                        },
                    ],
                    quantity: '1',
                    label: 'Tray',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'link',
            value: {
                label: 'MS621T',
                url: '/en/products/result?s=N4IgjCBcoLQCxVAYygMwIYBsDOBTANCAG4B2aWehA9lANogCscATKyALqEAOALlCCAC%2bwoA',
                type: 'text',
                external: false,
            },
            id: '-4',
            filterOptions: '54222',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Tray',
                    help: {
                        content: '<p>Tray usually refers to a JEDEC standard matrix tray measuring 12.7x5.35 inches and either 0.25 or 0.40 inches tall. Trays are usually constructed from plastic, but aluminum is permissible. JEDEC trays contain slots to allow air to pass vertically and are rated for at least 140°C to allow drying of parts in industrial ovens. Trays are stackable and feature a chamfered corner indicating the orientation of pin one of the parts. Trays are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Tray',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '17',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Lithium',
            },
            id: '412',
            filterOptions: '365295',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'Coin, 6.8mm',
            },
            id: '32',
            filterOptions: '332118',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '3 V',
            },
            id: '2079',
            filterOptions: '3 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '3mAh',
            },
            id: '33',
            filterOptions: '202159',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.27\' Dia x 0.08\' H (6.8mm x 2.1mm)',
            },
            id: '46',
            filterOptions: '16854',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'Requires Holder',
            },
            id: '258',
            filterOptions: '395953',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '5067198',
                productNumber: 'P689-ND',
                packaging: 'Box',
                quantity: 1,
                manufacturer: {
                    id: 11,
                    name: 'Panasonic Energy',
                },
                shortDescription: 'BATTERY NIMH 1.2V 750MAH AAA',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/300/292/766/BK-80AAAB9B_tmb.jpg',
                manufacturerPartNumber: 'BK-80AAAB9B',
                price: '3.18',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: 'https://industrial.panasonic.com/cdbs/www-data/pdf2/ACG4000/ACG4000CE264.pdf',
                description: 'BATTERY NIMH 1.2V 750MAH AAA',
                detailUrl: '/en/products/detail/panasonic-energy/BK-80AAAB9B/5067198',
                image: {
                    label: 'BK-80AAAB9B',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/2248/BK-80AAAB9B.JPG',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/300/292/766/BK-80AAAB9B_tmb.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'Panasonic Energy',
                        url: '/en/supplier-centers/panasonic-energy',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '5067198',
                productNumber: 'BK-80AAAB9B',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '1,124',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$3.18000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$3.18000',
                            extPrice: '$3.18',
                        },
                        {
                            brkQty: '20',
                            unitPrice: '$2.49150',
                            extPrice: '$49.83',
                        },
                        {
                            brkQty: '40',
                            unitPrice: '$2.35400',
                            extPrice: '$94.16',
                        },
                        {
                            brkQty: '100',
                            unitPrice: '$2.18380',
                            extPrice: '$218.38',
                        },
                        {
                            brkQty: '300',
                            unitPrice: '$1.99587',
                            extPrice: '$598.76',
                        },
                        {
                            brkQty: '500',
                            unitPrice: '$1.91410',
                            extPrice: '$957.05',
                        },
                        {
                            brkQty: '1,380',
                            unitPrice: '$1.76137',
                            extPrice: '$2,430.69',
                        },
                        {
                            brkQty: '2,760',
                            unitPrice: '$1.66416',
                            extPrice: '$4,593.08',
                        },
                    ],
                    quantity: '1',
                    label: 'Box',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: 'Tariff may apply if shipping to the United States',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-4',
            filterOptions: '818',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Box',
                    help: {
                        content: '<P>Box-style product packaging indicates that the minimum orderable product quantity, typically one unit, is contained or enclosed by a manufacturer-provided box.</P>',
                        title: 'Box',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '61',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Nickel Metal Hydride',
            },
            id: '412',
            filterOptions: '380071',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'AAA',
            },
            id: '32',
            filterOptions: '306894',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '1.2 V',
            },
            id: '2079',
            filterOptions: '1.2 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '750mAh',
            },
            id: '33',
            filterOptions: '277449',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.41\' Dia x 1.75\' H (10.5mm x 44.5mm)',
            },
            id: '46',
            filterOptions: '22387',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'Button Top (Extending)',
            },
            id: '258',
            filterOptions: '323896',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '6151923',
                productNumber: '728-1084-ND',
                packaging: 'Tray',
                quantity: 1,
                manufacturer: {
                    id: 728,
                    name: 'Seiko Instruments',
                },
                shortDescription: 'BATT LITHIUM 1.5V 2.5MAH COIN',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/003/108/783/MFG_TS621E-FL11E_tmb%2864x64%29.jpg',
                manufacturerPartNumber: 'TS621E-FL11E',
                price: '3.21',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: 'https://www.sii.co.jp/hubfs/40217095/MicroBattery_E_20230330_rev05-security.pdf',
                description: 'BATT LITHIUM 1.5V 2.5MAH COIN',
                detailUrl: '/en/products/detail/seiko-instruments/TS621E-FL11E/6151923',
                image: {
                    label: 'TS621E-FL11E',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/44/MFG_TS621E-FL11E.jpg',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/003/108/783/MFG_TS621E-FL11E_tmb%2864x64%29.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'Seiko Instruments',
                        url: '/en/supplier-centers/seiko-instruments',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '6151923',
                productNumber: 'TS621E-FL11E',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '1,711',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$3.21000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$3.21000',
                            extPrice: '$3.21',
                        },
                        {
                            brkQty: '10',
                            unitPrice: '$2.66600',
                            extPrice: '$26.66',
                        },
                        {
                            brkQty: '50',
                            unitPrice: '$2.34320',
                            extPrice: '$117.16',
                        },
                        {
                            brkQty: '100',
                            unitPrice: '$2.21680',
                            extPrice: '$221.68',
                        },
                        {
                            brkQty: '300',
                            unitPrice: '$2.03033',
                            extPrice: '$609.10',
                        },
                        {
                            brkQty: '500',
                            unitPrice: '$1.94912',
                            extPrice: '$974.56',
                        },
                        {
                            brkQty: '1,000',
                            unitPrice: '$1.84420',
                            extPrice: '$1,844.20',
                        },
                        {
                            brkQty: '2,500',
                            unitPrice: '$1.71422',
                            extPrice: '$4,285.55',
                        },
                        {
                            brkQty: '5,000',
                            unitPrice: '$1.62211',
                            extPrice: '$8,110.55',
                        },
                    ],
                    quantity: '1',
                    label: 'Tray',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'link',
            value: {
                label: 'TS621E',
                url: '/en/products/result?s=N4IgjCBcoLQCxVAYygMwIYBsDOBTANCAG4B2aWehA9lANogCsccATAgLqEAOALlCCAC%2bwoA',
                type: 'text',
                external: false,
            },
            id: '-4',
            filterOptions: '54424',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Tray',
                    help: {
                        content: '<p>Tray usually refers to a JEDEC standard matrix tray measuring 12.7x5.35 inches and either 0.25 or 0.40 inches tall. Trays are usually constructed from plastic, but aluminum is permissible. JEDEC trays contain slots to allow air to pass vertically and are rated for at least 140°C to allow drying of parts in industrial ovens. Trays are stackable and feature a chamfered corner indicating the orientation of pin one of the parts. Trays are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Tray',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '17',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Lithium',
            },
            id: '412',
            filterOptions: '365295',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'Coin, 6.8mm',
            },
            id: '32',
            filterOptions: '332118',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '1.5 V',
            },
            id: '2079',
            filterOptions: '1.5 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '2.5mAH',
            },
            id: '33',
            filterOptions: '131788',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.27\' Dia x 0.08\' H (6.8mm x 2.1mm)',
            },
            id: '46',
            filterOptions: '16854',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'SMD (SMT) Tab',
            },
            id: '258',
            filterOptions: '404185',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '6137714',
                productNumber: '728-1080-ND',
                packaging: 'Tray',
                quantity: 1,
                manufacturer: {
                    id: 728,
                    name: 'Seiko Instruments',
                },
                shortDescription: 'BATT LITHIUM 3V 3MAH COIN',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/002/304/216/MFG_MS621T_tmb.jpg',
                manufacturerPartNumber: 'MS621T-FL11E',
                price: '3.3',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: 'https://www.sii.co.jp/hubfs/40217095/MicroBattery_E_20230330_rev05-security.pdf',
                description: 'BATT LITHIUM 3V 3MAH COIN',
                detailUrl: '/en/products/detail/seiko-instruments/MS621T-FL11E/6137714',
                image: {
                    label: 'MS621T Series',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/1033/MFG_MS621T.jpg',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/002/304/216/MFG_MS621T_tmb.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'Seiko Instruments',
                        url: '/en/supplier-centers/seiko-instruments',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '6137714',
                productNumber: 'MS621T-FL11E',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '11,449',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$3.30000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$3.30000',
                            extPrice: '$3.30',
                        },
                        {
                            brkQty: '10',
                            unitPrice: '$2.74400',
                            extPrice: '$27.44',
                        },
                        {
                            brkQty: '50',
                            unitPrice: '$2.41180',
                            extPrice: '$120.59',
                        },
                        {
                            brkQty: '100',
                            unitPrice: '$2.28180',
                            extPrice: '$228.18',
                        },
                        {
                            brkQty: '300',
                            unitPrice: '$2.08987',
                            extPrice: '$626.96',
                        },
                        {
                            brkQty: '500',
                            unitPrice: '$2.00628',
                            extPrice: '$1,003.14',
                        },
                        {
                            brkQty: '1,000',
                            unitPrice: '$1.89828',
                            extPrice: '$1,898.28',
                        },
                        {
                            brkQty: '2,500',
                            unitPrice: '$1.76450',
                            extPrice: '$4,411.25',
                        },
                        {
                            brkQty: '5,000',
                            unitPrice: '$1.66970',
                            extPrice: '$8,348.50',
                        },
                    ],
                    quantity: '1',
                    label: 'Tray',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'link',
            value: {
                label: 'MS621T',
                url: '/en/products/result?s=N4IgjCBcoLQCxVAYygMwIYBsDOBTANCAG4B2aWehA9lANogCscATKyALqEAOALlCCAC%2bwoA',
                type: 'text',
                external: false,
            },
            id: '-4',
            filterOptions: '54222',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Tray',
                    help: {
                        content: '<p>Tray usually refers to a JEDEC standard matrix tray measuring 12.7x5.35 inches and either 0.25 or 0.40 inches tall. Trays are usually constructed from plastic, but aluminum is permissible. JEDEC trays contain slots to allow air to pass vertically and are rated for at least 140°C to allow drying of parts in industrial ovens. Trays are stackable and feature a chamfered corner indicating the orientation of pin one of the parts. Trays are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Tray',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '17',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Lithium',
            },
            id: '412',
            filterOptions: '365295',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'Coin, 6.8mm',
            },
            id: '32',
            filterOptions: '332118',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '3 V',
            },
            id: '2079',
            filterOptions: '3 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '3mAh',
            },
            id: '33',
            filterOptions: '202159',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.27\' Dia x 0.08\' H (6.8mm x 2.1mm)',
            },
            id: '46',
            filterOptions: '16854',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'SMD (SMT) Tab',
            },
            id: '258',
            filterOptions: '404185',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '2404069',
                productNumber: 'P664-ND',
                packaging: 'Tray',
                quantity: 1,
                manufacturer: {
                    id: 11,
                    name: 'Panasonic Energy',
                },
                shortDescription: 'BATTERY LITHIUM 3V 45MAH COIN',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/002/662/072/ML-2020%5EF1AN_tmb.jpg',
                manufacturerPartNumber: 'ML-2020/F1AN',
                price: '3.3',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: '//mm.digikey.com/Volume0/opasdata/d220001/medias/docus/390/ML_Serie.pdf',
                description: 'BATTERY LITHIUM 3V 45MAH COIN',
                detailUrl: '/en/products/detail/panasonic-energy/ML-2020-F1AN/2404069',
                image: {
                    label: 'ML-2020/F1AN',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/2583/ML-2020%5EF1AN.JPG',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/002/662/072/ML-2020%5EF1AN_tmb.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'Panasonic Energy',
                        url: '/en/supplier-centers/panasonic-energy',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '2404069',
                productNumber: 'ML-2020/F1AN',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '8,478',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$3.30000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$3.30000',
                            extPrice: '$3.30',
                        },
                        {
                            brkQty: '20',
                            unitPrice: '$2.59800',
                            extPrice: '$51.96',
                        },
                        {
                            brkQty: '40',
                            unitPrice: '$2.45775',
                            extPrice: '$98.31',
                        },
                        {
                            brkQty: '100',
                            unitPrice: '$2.28390',
                            extPrice: '$228.39',
                        },
                        {
                            brkQty: '300',
                            unitPrice: '$2.09183',
                            extPrice: '$627.55',
                        },
                        {
                            brkQty: '800',
                            unitPrice: '$1.93425',
                            extPrice: '$1,547.40',
                        },
                        {
                            brkQty: '1,600',
                            unitPrice: '$1.83019',
                            extPrice: '$2,928.30',
                        },
                        {
                            brkQty: '3,200',
                            unitPrice: '$1.74125',
                            extPrice: '$5,572.00',
                        },
                    ],
                    quantity: '1',
                    label: 'Tray',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'link',
            value: {
                label: 'ML2020',
                url: '/en/products/result?s=N4IgjCBcoLQCxVAYygMwIYBsDOBTANCAG4B2aWehA9lANrgCcAbAwEwgC6hADgC5QgQAXxFA',
                type: 'text',
                external: false,
            },
            id: '-4',
            filterOptions: '19692',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Tray',
                    help: {
                        content: '<p>Tray usually refers to a JEDEC standard matrix tray measuring 12.7x5.35 inches and either 0.25 or 0.40 inches tall. Trays are usually constructed from plastic, but aluminum is permissible. JEDEC trays contain slots to allow air to pass vertically and are rated for at least 140°C to allow drying of parts in industrial ovens. Trays are stackable and feature a chamfered corner indicating the orientation of pin one of the parts. Trays are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Tray',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '17',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Lithium',
            },
            id: '412',
            filterOptions: '365295',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'Coin, 20.0mm',
            },
            id: '32',
            filterOptions: '332110',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '3 V',
            },
            id: '2079',
            filterOptions: '3 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '45mAh',
            },
            id: '33',
            filterOptions: '222078',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.79\' Dia x 0.08\' H (20.0mm x 2.0mm)',
            },
            id: '46',
            filterOptions: '33854',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'SMD (SMT) Tab',
            },
            id: '258',
            filterOptions: '404185',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '655447',
                productNumber: '11-HHR-75AAAB-ND',
                packaging: 'Bulk',
                quantity: 1,
                manufacturer: {
                    id: 11,
                    name: 'Panasonic Energy',
                },
                shortDescription: 'BATTERY NIMH 1.2V 700MAH AAA',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/001/133/301/HHR-75AAA%5EB5B_tmb.jpg',
                manufacturerPartNumber: 'HHR-75AAAB',
                price: '3.38',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: '//mm.digikey.com/Volume0/opasdata/d220001/medias/docus/949/HHR75AAA_B.pdf',
                description: 'BATTERY NIMH 1.2V 700MAH AAA',
                detailUrl: '/en/products/detail/panasonic-energy/HHR-75AAAB/655447',
                image: {
                    label: 'HHR-75AAA/B5B',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/1040/HHR-75AAA%5EB5B.jpg',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/001/133/301/HHR-75AAA%5EB5B_tmb.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'Panasonic Energy',
                        url: '/en/supplier-centers/panasonic-energy',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '655447',
                productNumber: 'HHR-75AAAB',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '17,226',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$3.38000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$3.38000',
                            extPrice: '$3.38',
                        },
                        {
                            brkQty: '20',
                            unitPrice: '$2.64650',
                            extPrice: '$52.93',
                        },
                        {
                            brkQty: '40',
                            unitPrice: '$2.50050',
                            extPrice: '$100.02',
                        },
                        {
                            brkQty: '100',
                            unitPrice: '$2.31960',
                            extPrice: '$231.96',
                        },
                        {
                            brkQty: '300',
                            unitPrice: '$2.12000',
                            extPrice: '$636.00',
                        },
                        {
                            brkQty: '500',
                            unitPrice: '$2.03312',
                            extPrice: '$1,016.56',
                        },
                        {
                            brkQty: '1,380',
                            unitPrice: '$1.87089',
                            extPrice: '$2,581.83',
                        },
                        {
                            brkQty: '2,760',
                            unitPrice: '$1.76764',
                            extPrice: '$4,878.69',
                        },
                    ],
                    quantity: '1',
                    label: 'Bulk',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: 'Tariff may apply if shipping to the United States',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'link',
            value: {
                label: 'HHR',
                url: '/en/products/result?s=N4IgjCBcoLQCxVAYygMwIYBsDOBTANCAG4B2aWehA9lANohwAcYArAOwgC6hADgC5QQIAL6igA',
                type: 'text',
                external: false,
            },
            id: '-4',
            filterOptions: '48157',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Bulk',
                    help: {
                        content: '<p>Bulk refers to a package (usually a bag) of loose unorganized parts, and is usually unsuitable for automated assembly machines. Bulk parts are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Bulk',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '3',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Nickel Metal Hydride',
            },
            id: '412',
            filterOptions: '380071',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'AAA',
            },
            id: '32',
            filterOptions: '306894',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '1.2 V',
            },
            id: '2079',
            filterOptions: '1.2 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '700mAh',
            },
            id: '33',
            filterOptions: '272991',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.41\' Dia x 1.75\' H (10.5mm x 44.5mm)',
            },
            id: '46',
            filterOptions: '22387',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'Button Top (Extending)',
            },
            id: '258',
            filterOptions: '323896',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '271832',
                productNumber: 'P015-ND',
                packaging: 'Bulk',
                quantity: 1,
                manufacturer: {
                    id: 11,
                    name: 'Panasonic Energy',
                },
                shortDescription: 'BATTERY NIMH 1.2V 1.5AH AA',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/001/162/771/HHR-150AAC8_tmb.jpg',
                manufacturerPartNumber: 'HHR-150AAC8',
                price: '3.73',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: 'https://api.pim.na.industrial.panasonic.com/file_stream/main/fileversion/3515',
                description: 'BATTERY NIMH 1.2V 1.5AH AA',
                detailUrl: '/en/products/detail/panasonic-energy/HHR-150AAC8/271832',
                image: {
                    label: 'HHR-150AAC8',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/1133/HHR-150AAC8.jpg',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/001/162/771/HHR-150AAC8_tmb.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'Panasonic Energy',
                        url: '/en/supplier-centers/panasonic-energy',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '271832',
                productNumber: 'HHR-150AAC8',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '9,041',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$3.73000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$3.73000',
                            extPrice: '$3.73',
                        },
                        {
                            brkQty: '20',
                            unitPrice: '$2.91750',
                            extPrice: '$58.35',
                        },
                        {
                            brkQty: '40',
                            unitPrice: '$2.75650',
                            extPrice: '$110.26',
                        },
                        {
                            brkQty: '100',
                            unitPrice: '$2.55730',
                            extPrice: '$255.73',
                        },
                        {
                            brkQty: '420',
                            unitPrice: '$2.27367',
                            extPrice: '$954.94',
                        },
                        {
                            brkQty: '840',
                            unitPrice: '$2.14818',
                            extPrice: '$1,804.47',
                        },
                        {
                            brkQty: '1,260',
                            unitPrice: '$2.07801',
                            extPrice: '$2,618.29',
                        },
                        {
                            brkQty: '2,520',
                            unitPrice: '$1.96333',
                            extPrice: '$4,947.59',
                        },
                    ],
                    quantity: '1',
                    label: 'Bulk',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: 'Tariff may apply if shipping to the United States',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'link',
            value: {
                label: 'HHR',
                url: '/en/products/result?s=N4IgjCBcoLQCxVAYygMwIYBsDOBTANCAG4B2aWehA9lANohwAcYArAOwgC6hADgC5QQIAL6igA',
                type: 'text',
                external: false,
            },
            id: '-4',
            filterOptions: '48157',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Bulk',
                    help: {
                        content: '<p>Bulk refers to a package (usually a bag) of loose unorganized parts, and is usually unsuitable for automated assembly machines. Bulk parts are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Bulk',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '3',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Nickel Metal Hydride',
            },
            id: '412',
            filterOptions: '380071',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'AA',
            },
            id: '32',
            filterOptions: '306832',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '1.2 V',
            },
            id: '2079',
            filterOptions: '1.2 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '1.5Ah',
            },
            id: '33',
            filterOptions: '55120',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.57\' Dia x 1.99\' H (14.5mm x 50.5mm)',
            },
            id: '46',
            filterOptions: '27633',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'Flat Top (Non-Extending)',
            },
            id: '258',
            filterOptions: '347905',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '6137716',
                productNumber: '728-1082-ND',
                packaging: 'Tray',
                quantity: 1,
                manufacturer: {
                    id: 728,
                    name: 'Seiko Instruments',
                },
                shortDescription: 'BATT LITH 1.5V 5.5MAH COIN 9.5MM',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/300/281/068/TS920E-FL27E_tmb.jpg',
                manufacturerPartNumber: 'TS920E-FL27E',
                price: '3.74',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: 'https://www.sii.co.jp/hubfs/40217095/MicroBattery_E_20230330_rev05-security.pdf',
                description: 'BATT LITH 1.5V 5.5MAH COIN 9.5MM',
                detailUrl: '/en/products/detail/seiko-instruments/TS920E-FL27E/6137716',
                image: {
                    label: 'TS920E-FL27E',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/2204/TS920E-FL27E.JPG',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/300/281/068/TS920E-FL27E_tmb.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'Seiko Instruments',
                        url: '/en/supplier-centers/seiko-instruments',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '6137716',
                productNumber: 'TS920E-FL27E',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '990',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$3.74000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$3.74000',
                            extPrice: '$3.74',
                        },
                        {
                            brkQty: '10',
                            unitPrice: '$3.11100',
                            extPrice: '$31.11',
                        },
                        {
                            brkQty: '50',
                            unitPrice: '$2.73500',
                            extPrice: '$136.75',
                        },
                        {
                            brkQty: '100',
                            unitPrice: '$2.58740',
                            extPrice: '$258.74',
                        },
                        {
                            brkQty: '300',
                            unitPrice: '$2.36990',
                            extPrice: '$710.97',
                        },
                        {
                            brkQty: '500',
                            unitPrice: '$2.27514',
                            extPrice: '$1,137.57',
                        },
                        {
                            brkQty: '1,000',
                            unitPrice: '$2.15268',
                            extPrice: '$2,152.68',
                        },
                        {
                            brkQty: '2,500',
                            unitPrice: '$2.00101',
                            extPrice: '$5,002.52',
                        },
                        {
                            brkQty: '5,000',
                            unitPrice: '$1.89353',
                            extPrice: '$9,467.65',
                        },
                    ],
                    quantity: '1',
                    label: 'Tray',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'link',
            value: {
                label: 'TS920E',
                url: '/en/products/result?s=N4IgjCBcoLQCxVAYygMwIYBsDOBTANCAG4B2aWehA9lANogCscATMwMwgC6hADgC5QQIAL6igA',
                type: 'text',
                external: false,
            },
            id: '-4',
            filterOptions: '54223',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Tray',
                    help: {
                        content: '<p>Tray usually refers to a JEDEC standard matrix tray measuring 12.7x5.35 inches and either 0.25 or 0.40 inches tall. Trays are usually constructed from plastic, but aluminum is permissible. JEDEC trays contain slots to allow air to pass vertically and are rated for at least 140°C to allow drying of parts in industrial ovens. Trays are stackable and feature a chamfered corner indicating the orientation of pin one of the parts. Trays are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Tray',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '17',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Lithium',
            },
            id: '412',
            filterOptions: '365295',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'Coin, 9.5mm',
            },
            id: '32',
            filterOptions: '332120',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '1.5 V',
            },
            id: '2079',
            filterOptions: '1.5 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '5.5mAh',
            },
            id: '33',
            filterOptions: '232958',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.37\' Dia x 0.08\' H (9.5mm x 2.1mm)',
            },
            id: '46',
            filterOptions: '20548',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'SMD (SMT) Tab',
            },
            id: '258',
            filterOptions: '404185',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '4849860',
                productNumber: '728-1077-ND',
                packaging: 'Tray',
                quantity: 1,
                manufacturer: {
                    id: 728,
                    name: 'Seiko Instruments',
                },
                shortDescription: 'BATT LITH 3V 6.5MAH COIN 9.5MM',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/002/290/430/MS920T-FL27E_tmb.jpg',
                manufacturerPartNumber: 'MS920T-FL27E',
                price: '3.79',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: 'https://www.sii.co.jp/hubfs/40217095/MicroBattery_E_20230330_rev05-security.pdf',
                description: 'BATT LITH 3V 6.5MAH COIN 9.5MM',
                detailUrl: '/en/products/detail/seiko-instruments/MS920T-FL27E/4849860',
                image: {
                    label: 'MS920T-FL27E',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/985/MS920T-FL27E.jpg',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/002/290/430/MS920T-FL27E_tmb.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'Seiko Instruments',
                        url: '/en/supplier-centers/seiko-instruments',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '4849860',
                productNumber: 'MS920T-FL27E',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '3,702',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$3.79000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$3.79000',
                            extPrice: '$3.79',
                        },
                        {
                            brkQty: '10',
                            unitPrice: '$3.15000',
                            extPrice: '$31.50',
                        },
                        {
                            brkQty: '50',
                            unitPrice: '$2.76880',
                            extPrice: '$138.44',
                        },
                        {
                            brkQty: '100',
                            unitPrice: '$2.61940',
                            extPrice: '$261.94',
                        },
                        {
                            brkQty: '300',
                            unitPrice: '$2.39910',
                            extPrice: '$719.73',
                        },
                        {
                            brkQty: '500',
                            unitPrice: '$2.30320',
                            extPrice: '$1,151.60',
                        },
                        {
                            brkQty: '1,000',
                            unitPrice: '$2.17924',
                            extPrice: '$2,179.24',
                        },
                        {
                            brkQty: '2,500',
                            unitPrice: '$2.02569',
                            extPrice: '$5,064.23',
                        },
                        {
                            brkQty: '5,000',
                            unitPrice: '$1.91689',
                            extPrice: '$9,584.45',
                        },
                    ],
                    quantity: '1',
                    label: 'Tray',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'link',
            value: {
                label: 'MS920T',
                url: '/en/products/result?s=N4IgjCBcoLQCxVAYygMwIYBsDOBTANCAG4B2aWehA9lANohwAcATKyALqEAOALlCCAC%2bwoA',
                type: 'text',
                external: false,
            },
            id: '-4',
            filterOptions: '48222',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Tray',
                    help: {
                        content: '<p>Tray usually refers to a JEDEC standard matrix tray measuring 12.7x5.35 inches and either 0.25 or 0.40 inches tall. Trays are usually constructed from plastic, but aluminum is permissible. JEDEC trays contain slots to allow air to pass vertically and are rated for at least 140°C to allow drying of parts in industrial ovens. Trays are stackable and feature a chamfered corner indicating the orientation of pin one of the parts. Trays are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Tray',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '17',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Lithium',
            },
            id: '412',
            filterOptions: '365295',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'Coin, 9.5mm',
            },
            id: '32',
            filterOptions: '332120',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '3 V',
            },
            id: '2079',
            filterOptions: '3 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '6.5mAh',
            },
            id: '33',
            filterOptions: '253059',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.37\' Dia x 0.08\' H (9.5mm x 2.1mm)',
            },
            id: '46',
            filterOptions: '20548',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'SMD (SMT) Tab',
            },
            id: '258',
            filterOptions: '404185',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '1202987',
                productNumber: 'SY144-ND',
                packaging: 'Bulk',
                quantity: 1,
                manufacturer: {
                    id: 935,
                    name: 'FDK America, Inc.',
                },
                shortDescription: 'BATTERY NIMH 1.2V 1.5AH AA',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/001/107/829/HR-AAU_tmb.jpg',
                manufacturerPartNumber: 'HR-AAU',
                price: '3.88',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: 'https://www.fdk.com/battery/nimh_e/tech_info/HR-AAU.pdf',
                description: 'BATTERY NIMH 1.2V 1.5AH AA',
                detailUrl: '/en/products/detail/fdk-america-inc/HR-AAU/1202987',
                image: {
                    label: 'HR-AAU',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/952/HR-AAU.jpg',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/001/107/829/HR-AAU_tmb.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'FDK America, Inc.',
                        url: '/en/supplier-centers/fdk-america',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '1202987',
                productNumber: 'HR-AAU',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '15,807',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$3.88000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$3.88000',
                            extPrice: '$3.88',
                        },
                        {
                            brkQty: '10',
                            unitPrice: '$3.20900',
                            extPrice: '$32.09',
                        },
                        {
                            brkQty: '50',
                            unitPrice: '$2.81280',
                            extPrice: '$140.64',
                        },
                        {
                            brkQty: '100',
                            unitPrice: '$2.65760',
                            extPrice: '$265.76',
                        },
                        {
                            brkQty: '250',
                            unitPrice: '$2.46540',
                            extPrice: '$616.35',
                        },
                        {
                            brkQty: '500',
                            unitPrice: '$2.32934',
                            extPrice: '$1,164.67',
                        },
                        {
                            brkQty: '1,000',
                            unitPrice: '$2.20079',
                            extPrice: '$2,200.79',
                        },
                        {
                            brkQty: '2,500',
                            unitPrice: '$2.04166',
                            extPrice: '$5,104.15',
                        },
                        {
                            brkQty: '5,000',
                            unitPrice: '$1.95000',
                            extPrice: '$9,750.00',
                        },
                    ],
                    quantity: '1',
                    label: 'Bulk',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'link',
            value: {
                label: 'TWICELL',
                url: '/en/products/result?s=N4IgjCBcoLQCxVAYygMwIYBsDOBTANCAG4B2aWehA9lANogBMAHAJwsDMIAuoQA4AuUECAC%2bYoA',
                type: 'text',
                external: false,
            },
            id: '-4',
            filterOptions: '28993',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Bulk',
                    help: {
                        content: '<p>Bulk refers to a package (usually a bag) of loose unorganized parts, and is usually unsuitable for automated assembly machines. Bulk parts are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Bulk',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '3',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Nickel Metal Hydride',
            },
            id: '412',
            filterOptions: '380071',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'AA',
            },
            id: '32',
            filterOptions: '306832',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '1.2 V',
            },
            id: '2079',
            filterOptions: '1.2 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '1.5Ah',
            },
            id: '33',
            filterOptions: '55120',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.56\' Dia x 1.97\' H (14.2mm x 50.0mm)',
            },
            id: '46',
            filterOptions: '27396',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'Flat Top (Non-Extending)',
            },
            id: '258',
            filterOptions: '347905',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '119907',
                productNumber: 'P079-ND',
                packaging: 'Bulk',
                quantity: 1,
                manufacturer: {
                    id: 11,
                    name: 'Panasonic Energy',
                },
                shortDescription: 'BATT LITH 3V 7MAH COIN 12.5MM',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/010/180/445/VL-1220%5EHFN_tmb.jpg',
                manufacturerPartNumber: 'VL-1220/HFN',
                price: '4.24',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: 'https://api.pim.na.industrial.panasonic.com/file_stream/main/fileversion/3569',
                description: 'BATT LITH 3V 7MAH COIN 12.5MM',
                detailUrl: '/en/products/detail/panasonic-energy/VL-1220-HFN/119907',
                image: {
                    label: 'VL-1220/HFN',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/602/VL-1220%5EHFN.JPG',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/010/180/445/VL-1220%5EHFN_tmb.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'Panasonic Energy',
                        url: '/en/supplier-centers/panasonic-energy',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '119907',
                productNumber: 'VL-1220/HFN',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '2,207',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$4.24000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$4.24000',
                            extPrice: '$4.24',
                        },
                        {
                            brkQty: '20',
                            unitPrice: '$3.33500',
                            extPrice: '$66.70',
                        },
                        {
                            brkQty: '40',
                            unitPrice: '$3.15500',
                            extPrice: '$126.20',
                        },
                        {
                            brkQty: '100',
                            unitPrice: '$2.93200',
                            extPrice: '$293.20',
                        },
                        {
                            brkQty: '300',
                            unitPrice: '$2.68557',
                            extPrice: '$805.67',
                        },
                        {
                            brkQty: '720',
                            unitPrice: '$2.50428',
                            extPrice: '$1,803.08',
                        },
                        {
                            brkQty: '1,440',
                            unitPrice: '$2.36961',
                            extPrice: '$3,412.24',
                        },
                        {
                            brkQty: '2,880',
                            unitPrice: '$2.30652',
                            extPrice: '$6,642.78',
                        },
                    ],
                    quantity: '1',
                    label: 'Bulk',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'link',
            value: {
                label: 'VL1220',
                url: '/en/products/result?s=N4IgjCBcoLQCxVAYygMwIYBsDOBTANCAG4B2aWehA9lANrgCcA7AMxMgC6hADgC5QgQAXxFA',
                type: 'text',
                external: false,
            },
            id: '-4',
            filterOptions: '19737',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Bulk',
                    help: {
                        content: '<p>Bulk refers to a package (usually a bag) of loose unorganized parts, and is usually unsuitable for automated assembly machines. Bulk parts are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Bulk',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '3',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Lithium',
            },
            id: '412',
            filterOptions: '365295',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'Coin, 12.5mm',
            },
            id: '32',
            filterOptions: '332108',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '3 V',
            },
            id: '2079',
            filterOptions: '3 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '7mAh',
            },
            id: '33',
            filterOptions: '280966',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.49\' Dia x 0.08\' H (12.5mm x 2.0mm)',
            },
            id: '46',
            filterOptions: '24734',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'PC Pin (Horizontal Mount)',
            },
            id: '258',
            filterOptions: '384843',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '598005',
                productNumber: 'P220-ND',
                packaging: 'Bulk',
                quantity: 1,
                manufacturer: {
                    id: 11,
                    name: 'Panasonic Energy',
                },
                shortDescription: 'BATTERY NIMH 1.2V 2AH AA',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/001/111/604/HHR-210AA%5EB2B_tmb.jpg',
                manufacturerPartNumber: 'HHR-210AAC4B',
                price: '4.29',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: '//mm.digikey.com/Volume0/opasdata/d220001/medias/docus/7181/Ni-MH-Datasheet.pdf',
                description: 'BATTERY NIMH 1.2V 2AH AA',
                detailUrl: '/en/products/detail/panasonic-energy/HHR-210AAC4B/598005',
                image: {
                    label: 'HHR210AA/B2B',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/966/HHR-210AA%5EB2B.jpg',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/001/111/604/HHR-210AA%5EB2B_tmb.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'Panasonic Energy',
                        url: '/en/supplier-centers/panasonic-energy',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '598005',
                productNumber: 'HHR-210AAC4B',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '11,921',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$4.29000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$4.29000',
                            extPrice: '$4.29',
                        },
                        {
                            brkQty: '20',
                            unitPrice: '$3.36000',
                            extPrice: '$67.20',
                        },
                        {
                            brkQty: '40',
                            unitPrice: '$3.17450',
                            extPrice: '$126.98',
                        },
                        {
                            brkQty: '100',
                            unitPrice: '$2.94490',
                            extPrice: '$294.49',
                        },
                        {
                            brkQty: '420',
                            unitPrice: '$2.61829',
                            extPrice: '$1,099.68',
                        },
                        {
                            brkQty: '840',
                            unitPrice: '$2.47380',
                            extPrice: '$2,077.99',
                        },
                        {
                            brkQty: '1,260',
                            unitPrice: '$2.39299',
                            extPrice: '$3,015.17',
                        },
                        {
                            brkQty: '2,520',
                            unitPrice: '$2.26092',
                            extPrice: '$5,697.52',
                        },
                    ],
                    quantity: '1',
                    label: 'Bulk',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: 'Tariff may apply if shipping to the United States',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'link',
            value: {
                label: 'HHR',
                url: '/en/products/result?s=N4IgjCBcoLQCxVAYygMwIYBsDOBTANCAG4B2aWehA9lANohwAcYArAOwgC6hADgC5QQIAL6igA',
                type: 'text',
                external: false,
            },
            id: '-4',
            filterOptions: '48157',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Bulk',
                    help: {
                        content: '<p>Bulk refers to a package (usually a bag) of loose unorganized parts, and is usually unsuitable for automated assembly machines. Bulk parts are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Bulk',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '3',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Nickel Metal Hydride',
            },
            id: '412',
            filterOptions: '380071',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'AA',
            },
            id: '32',
            filterOptions: '306832',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '1.2 V',
            },
            id: '2079',
            filterOptions: '1.2 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '2Ah',
            },
            id: '33',
            filterOptions: '167714',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.57\' Dia x 1.99\' H (14.5mm x 50.5mm)',
            },
            id: '46',
            filterOptions: '27633',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'Button Top (Extending)',
            },
            id: '258',
            filterOptions: '323896',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '5067197',
                productNumber: 'P688-ND',
                packaging: 'Box',
                quantity: 1,
                manufacturer: {
                    id: 11,
                    name: 'Panasonic Energy',
                },
                shortDescription: 'BATTERY NIMH 1.2V 1.9AH AA',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/300/273/005/BK-200AAB9B_tmb%2864x64%29.jpg',
                manufacturerPartNumber: 'BK-200AAB9B',
                price: '4.29',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: 'http://industrial.panasonic.com/cdbs/www-data/pdf2/ACG4000/ACG4000CE266.pdf',
                description: 'BATTERY NIMH 1.2V 1.9AH AA',
                detailUrl: '/en/products/detail/panasonic-energy/BK-200AAB9B/5067197',
                image: {
                    label: 'BK-200AAB9B',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/2172/BK-200AAB9B.jpg',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/300/273/005/BK-200AAB9B_tmb%2864x64%29.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'Panasonic Energy',
                        url: '/en/supplier-centers/panasonic-energy',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '5067197',
                productNumber: 'BK-200AAB9B',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '4,261',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$4.29000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$4.29000',
                            extPrice: '$4.29',
                        },
                        {
                            brkQty: '20',
                            unitPrice: '$3.35400',
                            extPrice: '$67.08',
                        },
                        {
                            brkQty: '40',
                            unitPrice: '$3.16875',
                            extPrice: '$126.75',
                        },
                        {
                            brkQty: '100',
                            unitPrice: '$2.93970',
                            extPrice: '$293.97',
                        },
                        {
                            brkQty: '420',
                            unitPrice: '$2.61367',
                            extPrice: '$1,097.74',
                        },
                        {
                            brkQty: '840',
                            unitPrice: '$2.46943',
                            extPrice: '$2,074.32',
                        },
                        {
                            brkQty: '1,260',
                            unitPrice: '$2.38875',
                            extPrice: '$3,009.82',
                        },
                        {
                            brkQty: '2,520',
                            unitPrice: '$2.25692',
                            extPrice: '$5,687.44',
                        },
                    ],
                    quantity: '1',
                    label: 'Box',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: 'Tariff may apply if shipping to the United States',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-4',
            filterOptions: '818',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Box',
                    help: {
                        content: '<P>Box-style product packaging indicates that the minimum orderable product quantity, typically one unit, is contained or enclosed by a manufacturer-provided box.</P>',
                        title: 'Box',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '61',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Nickel Metal Hydride',
            },
            id: '412',
            filterOptions: '380071',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'AA',
            },
            id: '32',
            filterOptions: '306832',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '1.2 V',
            },
            id: '2079',
            filterOptions: '1.2 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '1.9Ah',
            },
            id: '33',
            filterOptions: '62747',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.57\' Dia x 1.99\' H (14.5mm x 50.5mm)',
            },
            id: '46',
            filterOptions: '27633',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'Button Top (Extending)',
            },
            id: '258',
            filterOptions: '323896',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '32334',
                productNumber: 'P085-ND',
                packaging: 'Bulk',
                quantity: 1,
                manufacturer: {
                    id: 11,
                    name: 'Panasonic Energy',
                },
                shortDescription: 'BATT LITH 3V 50MAH COIN 23.0MM',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/001/918/VL2330-1HF_tmb.jpg',
                manufacturerPartNumber: 'VL-2330/HFN',
                price: '5.44',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: 'https://api.pim.na.industrial.panasonic.com/file_stream/main/fileversion/3571',
                description: 'BATT LITH 3V 50MAH COIN 23.0MM',
                detailUrl: '/en/products/detail/panasonic-energy/VL-2330-HFN/32334',
                image: {
                    label: 'VL2330-1HF',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/905/VL2330-1HF.jpg',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/001/918/VL2330-1HF_tmb.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'Panasonic Energy',
                        url: '/en/supplier-centers/panasonic-energy',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '32334',
                productNumber: 'VL-2330/HFN',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '2,084',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$5.44000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$5.44000',
                            extPrice: '$5.44',
                        },
                        {
                            brkQty: '20',
                            unitPrice: '$4.28250',
                            extPrice: '$85.65',
                        },
                        {
                            brkQty: '40',
                            unitPrice: '$4.05125',
                            extPrice: '$162.05',
                        },
                        {
                            brkQty: '240',
                            unitPrice: '$3.51079',
                            extPrice: '$842.59',
                        },
                        {
                            brkQty: '480',
                            unitPrice: '$3.32179',
                            extPrice: '$1,594.46',
                        },
                        {
                            brkQty: '720',
                            unitPrice: '$3.21610',
                            extPrice: '$2,315.59',
                        },
                        {
                            brkQty: '1,200',
                            unitPrice: '$3.08777',
                            extPrice: '$3,705.32',
                        },
                        {
                            brkQty: '2,640',
                            unitPrice: '$3.05625',
                            extPrice: '$8,068.50',
                        },
                    ],
                    quantity: '1',
                    label: 'Bulk',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'link',
            value: {
                label: 'VL2330',
                url: '/en/products/result?s=N4IgjCBcoLQCxVAYygMwIYBsDOBTANCAG4B2aWehA9lANrgCcA7HAAwgC6hADgC5QgQAXxFA',
                type: 'text',
                external: false,
            },
            id: '-4',
            filterOptions: '19740',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Bulk',
                    help: {
                        content: '<p>Bulk refers to a package (usually a bag) of loose unorganized parts, and is usually unsuitable for automated assembly machines. Bulk parts are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Bulk',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '3',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Lithium',
            },
            id: '412',
            filterOptions: '365295',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: 'Coin, 23.0mm',
            },
            id: '32',
            filterOptions: '332111',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '3 V',
            },
            id: '2079',
            filterOptions: '3 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '50mAh',
            },
            id: '33',
            filterOptions: '238186',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.91\' Dia x 0.12\' H (23.0mm x 3.0mm)',
            },
            id: '46',
            filterOptions: '37106',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'PC Pin (Horizontal Mount)',
            },
            id: '258',
            filterOptions: '384843',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '9828824',
                productNumber: '2059-PCIFR18650-1500-ND',
                packaging: 'Bulk',
                quantity: 1,
                manufacturer: {
                    id: 2059,
                    name: 'ZEUS Battery Products',
                },
                shortDescription: 'BATTERY LITHIUM 3.2V 1.5AH 18650',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/100/013/942/MFG_PCIFR18650-1500_tmb.jpg',
                manufacturerPartNumber: 'PCIFR18650-1500',
                price: '5.85',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: 'https://www.zeusbatteryproducts.com/wp-content/uploads/downloads/ZEUS_LIFEPO4_PCIFR18650-1500_SPEC_SHEET.pdf',
                description: 'BATTERY LITHIUM 3.2V 1.5AH 18650',
                detailUrl: '/en/products/detail/zeus-battery-products/PCIFR18650-1500/9828824',
                image: {
                    label: 'PCIFR18650-1500',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/694/MFG_PCIFR18650-1500.jpg',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/100/013/942/MFG_PCIFR18650-1500_tmb.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'ZEUS Battery Products',
                        url: '/en/supplier-centers/zeus-battery-products',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '9828824',
                productNumber: 'PCIFR18650-1500',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '963',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$5.85000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$5.85000',
                            extPrice: '$5.85',
                        },
                        {
                            brkQty: '10',
                            unitPrice: '$4.86200',
                            extPrice: '$48.62',
                        },
                        {
                            brkQty: '50',
                            unitPrice: '$4.27480',
                            extPrice: '$213.74',
                        },
                        {
                            brkQty: '100',
                            unitPrice: '$4.04440',
                            extPrice: '$404.44',
                        },
                        {
                            brkQty: '250',
                            unitPrice: '$3.75892',
                            extPrice: '$939.73',
                        },
                        {
                            brkQty: '500',
                            unitPrice: '$3.55664',
                            extPrice: '$1,778.32',
                        },
                        {
                            brkQty: '1,000',
                            unitPrice: '$3.36542',
                            extPrice: '$3,365.42',
                        },
                        {
                            brkQty: '2,500',
                            unitPrice: '$3.31250',
                            extPrice: '$8,281.25',
                        },
                    ],
                    quantity: '1',
                    label: 'Bulk',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-4',
            filterOptions: '818',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Bulk',
                    help: {
                        content: '<p>Bulk refers to a package (usually a bag) of loose unorganized parts, and is usually unsuitable for automated assembly machines. Bulk parts are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Bulk',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '3',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Lithium Iron Phosphate',
            },
            id: '412',
            filterOptions: '365304',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: '18650',
            },
            id: '32',
            filterOptions: '115505',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '3.2 V',
            },
            id: '2079',
            filterOptions: '3.2 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '1.5Ah',
            },
            id: '33',
            filterOptions: '55120',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.72\' Dia x 2.58\' H (18.2mm x 65.5mm)',
            },
            id: '46',
            filterOptions: '32088',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'Button Top (Extending)',
            },
            id: '258',
            filterOptions: '323896',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
    [
        {
            type: 'compare',
            value: {
                productId: '5054546',
                productNumber: '1528-1837-ND',
                packaging: 'Bulk',
                quantity: 1,
                manufacturer: {
                    id: 1528,
                    name: 'Adafruit Industries LLC',
                },
                shortDescription: 'BATTERY LITH-ION 3.7V 100MAH',
                iconImage: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/100/960/521/MFG_1528_1570_tmb.jpg',
                manufacturerPartNumber: '1570',
                price: '5.95',
            },
            id: '-99',
            analyticsTag: 'tr-compareParts',
        },
        {
            type: 'productDetail',
            value: {
                datasheetUrl: 'https://cdn-shop.adafruit.com/product-files/1570/1570datasheet.pdf',
                description: 'BATTERY LITH-ION 3.7V 100MAH',
                detailUrl: '/en/products/detail/adafruit-industries-llc/1570/5054546',
                image: {
                    label: '1570',
                    standard: '//mm.digikey.com/Volume0/opasdata/d220001/medias/images/4847/MFG_1528_1570.jpg',
                    thumb: '//mm.digikey.com/Volume0/opasdata/d220001/derivates/3/100/960/521/MFG_1528_1570_tmb.jpg',
                },
                manufacturer: {
                    type: 'link',
                    value: {
                        label: 'Adafruit Industries LLC',
                        url: '/en/supplier-centers/adafruit',
                        type: 'text',
                        external: true,
                    },
                    id: '-1',
                    analyticsTag: 'tr-manufacturer',
                },
                productId: '5054546',
                productNumber: '1570',
                rohsCompliant: false,
            },
            id: '-100',
            analyticsTag: 'tr-product',
        },
        {
            type: 'qtyAvailable',
            value: [
                {
                    quantity: '613',
                    label: 'In Stock',
                    showLeadTime: false,
                },
            ],
            id: '-102',
            analyticsTag: 'tr-qtyAvailable',
        },
        {
            type: 'unitPrice',
            value: [
                {
                    unitPrice: '$5.95000',
                    mergedPricingTiers: [
                        {
                            brkQty: '1',
                            unitPrice: '$5.95000',
                            extPrice: '$5.95',
                        },
                    ],
                    quantity: '1',
                    label: 'Bulk',
                    showLeadTime: false,
                },
            ],
            id: '-101',
            analyticsTag: 'tr-unitPrice',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-9',
            analyticsTag: 'tr-tariff',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '-4',
            filterOptions: '818',
            analyticsTag: 'tr-series',
        },
        {
            type: 'stringList',
            value: [
                {
                    value: 'Bulk',
                    help: {
                        content: '<p>Bulk refers to a package (usually a bag) of loose unorganized parts, and is usually unsuitable for automated assembly machines. Bulk parts are packaged according to the ESD (ElectroStatic Discharge) and MSL (Moisture Sensitivity Level) protection requirements determined by the manufacturer.</p>',
                        title: 'Bulk',
                    },
                },
            ],
            id: '-5',
            filterOptions: [
                '3',
            ],
            analyticsTag: 'tr-packaging',
        },
        {
            type: 'string',
            value: {
                value: 'Active',
            },
            id: '1989',
            filterOptions: '0',
            analyticsTag: 'tr-productstatus',
        },
        {
            type: 'string',
            value: {
                value: 'Lithium-Ion',
            },
            id: '412',
            filterOptions: '365315',
            filterParameterType: 'String',
            analyticsTag: 'CLS 412',
        },
        {
            type: 'string',
            value: {
                value: '-',
            },
            id: '32',
            filterOptions: '1',
            filterParameterType: 'String',
            analyticsTag: 'CLS 32',
        },
        {
            type: 'string',
            value: {
                value: '3.7 V',
            },
            id: '2079',
            filterOptions: '3.7 V',
            filterParameterType: 'UnitOfMeasure',
            analyticsTag: 'CLS 2079',
        },
        {
            type: 'string',
            value: {
                value: '100mAh',
            },
            id: '33',
            filterOptions: '68936',
            filterParameterType: 'String',
            analyticsTag: 'CLS 33',
        },
        {
            type: 'string',
            value: {
                value: '0.45\' L x 1.22\' W x 0.15\' H (11.5mm x 31.0mm x 3.8mm)',
            },
            id: '46',
            filterOptions: '23592',
            filterParameterType: 'String',
            analyticsTag: 'CLS 46',
        },
        {
            type: 'string',
            value: {
                value: 'JST PH Connector',
            },
            id: '258',
            filterOptions: '362111',
            filterParameterType: 'String',
            analyticsTag: 'CLS 258',
        },
    ],
];

const makeUniqueSuffix = (idx: number) => String(idx + 1).padStart(4, '0');

const cloneProduct = (productItems: ProductDataItem[], idx: number): ProductDataItem[] => {
    const suffix = makeUniqueSuffix(idx);

    const compareItem = productItems.find((item) => item.type === 'compare');
    const baseProductId = compareItem?.type === 'compare' ? compareItem.value.productId : String(idx + 1);
    const newProductId = `${baseProductId}-${suffix}`;

    return productItems.map((item) => {
        if (item.type === 'compare') {
            return {
                ...item,
                value: {
                    ...item.value,
                    productId: newProductId,
                    productNumber: `${item.value.productNumber}-${suffix}`,
                    manufacturerPartNumber: `${item.value.manufacturerPartNumber}-${suffix}`,
                },
            };
        }

        if (item.type === 'productDetail') {
            const nextDetailUrl = item.value.detailUrl.replace(/\/[^/]+$/, `/${newProductId}`);
            return {
                ...item,
                value: {
                    ...item.value,
                    productId: newProductId,
                    detailUrl: nextDetailUrl,
                    productNumber: `${item.value.productNumber}-${suffix}`,
                },
            };
        }

        return item;
    });
};

// DigiKey-like total count for pagination demos
const TOTAL_PRODUCTS = 1905;

const productData: ProductDataItem[][] = Array.from({ length: TOTAL_PRODUCTS }, (_, idx) => (
    cloneProduct(baseProductData[idx % baseProductData.length], idx)
));

export default productData;
export { TOTAL_PRODUCTS };
