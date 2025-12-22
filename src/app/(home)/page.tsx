import type { Metadata } from 'next';

import HomeClient from './home-client';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Vàng bạc Tài Lộc',
};

export default function HomePage() {
  return <HomeClient />;
}
