import type { Metadata } from 'next';

import { PriceView } from 'src/sections/price/view';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Giá vàng bạc',
  description: 'Vàng bạc Tài Lộc',
};

export default function Page() {
  return <PriceView />;
}
