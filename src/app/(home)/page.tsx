import type { Metadata } from 'next';

import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Vàng bạc Tài Lộc',
};

export default function Page() {
  return <HomeView />;
}
