import type { IProductItem } from 'src/types/product';
import { buildImageUrl } from 'src/utils/build-image';

type ApiProduct = {
  productId: number;
  productName: string;
  imageUrls?: string[];
  priceIn: number;
  priceOut: number;
};

export function mapProductApiToItem(p: ApiProduct): IProductItem {
  return {
    id: String(p.productId),
    name: p.productName,
    buy: p.priceOut,
    sell: p.priceIn,
    img: buildImageUrl(p.imageUrls?.[0]),
  };
}
