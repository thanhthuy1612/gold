import type { Metadata } from 'next';

import { ComingSoonView } from 'src/components/coming-soon/view';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Liên hệ',
  description: 'Vàng bạc Tài Lộc',
};

export default function Page() {
  return <ComingSoonView />;
}
