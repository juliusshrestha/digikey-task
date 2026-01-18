interface HelpContent {
  content: string;
  title: string;
}

interface Link {
  label: string;
  url: string;
  type: string;
  external: boolean;
}

interface Image {
  label: string;
  standard: string;
  thumb: string;
}

interface Manufacturer {
  id: number;
  name: string;
}

interface PricingTier {
  brkQty: string;
  unitPrice: string;
  extPrice: string;
}

interface UnitPriceValue {
  unitPrice: string;
  mergedPricingTiers: PricingTier[];
  quantity: string;
  label: string;
  showLeadTime: boolean;
}

interface QtyAvailableValue {
  quantity: string;
  label: string;
  showLeadTime: boolean;
}

interface StringListItem {
  value: string;
  help?: HelpContent;
}

interface CompareValue {
  productId: string;
  productNumber: string;
  packaging: string;
  quantity: number;
  manufacturer: Manufacturer;
  shortDescription: string;
  iconImage: string;
  manufacturerPartNumber: string;
  price: string;
}

interface ProductDetailValue {
  datasheetUrl: string;
  description: string;
  detailUrl: string;
  image: Image;
  manufacturer: {
    type: string;
    value: Link;
    id: string;
    analyticsTag: string;
  };
  productId: string;
  productNumber: string;
  rohsCompliant: boolean;
}

interface StringValue {
  value: string;
}

export type ProductDataItem =
  | {
      type: 'compare';
      value: CompareValue;
      id: string;
      analyticsTag: string;
    }
  | {
      type: 'productDetail';
      value: ProductDetailValue;
      id: string;
      analyticsTag: string;
    }
  | {
      type: 'qtyAvailable';
      value: QtyAvailableValue[];
      id: string;
      analyticsTag: string;
    }
  | {
      type: 'unitPrice';
      value: UnitPriceValue[];
      id: string;
      analyticsTag: string;
    }
  | {
      type: 'string';
      value: StringValue;
      id: string;
      filterOptions?: string;
      filterParameterType?: string;
      analyticsTag: string;
    }
  | {
      type: 'link';
      value: Link;
      id: string;
      filterOptions?: string;
      analyticsTag: string;
    }
  | {
      type: 'stringList';
      value: StringListItem[];
      id: string;
      filterOptions?: string[];
      analyticsTag: string;
    };
