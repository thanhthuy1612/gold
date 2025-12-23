export type PriceType = {
  type: ProductType | null;
  unit: ChartUnit | null;
  timeRange: ChartTimeRange | null;
};

export type PriceData = {
  changePriceIn?: number;
  changePriceOut?: number;
  changeRate: number;
  infoList: {
    lastUpdate: Date;
    priceIn: number;
    priceOut: number;
  }[];
};

export type PriceResult = {
  silver: PriceData;
  sjcGold: PriceData;
  pqGold: PriceData;
};

export enum ChartTimeRange {
  _1D = 1,
  _7D = 2,
  _1M = 3,
  _3M = 4,
  _1Y = 5,
}

export enum ChartUnit {
  BAC_LUONG = 1,
  BAC_KG = 2,
  VANG_CHI = 3,
  VANG_LUONG = 4,
}

export enum ProductType {
  GOLD = 1,
  SILVER = 2,
}
