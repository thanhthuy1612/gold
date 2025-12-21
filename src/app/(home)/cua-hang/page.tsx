import type { Metadata } from 'next';

import { StoreView } from 'src/sections/store/view';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Cửa hàng',
  description: 'Vàng bạc Tài Lộc',
};

export default function Page() {
  return <StoreView />;
}
