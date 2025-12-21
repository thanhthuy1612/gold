import type { Metadata } from 'next';

import { Container } from '@mui/material';

import { ComingSoonView } from 'src/components/coming-soon/view';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Tra cứu đơn',
  description: 'Vàng bạc Tài Lộc',
};

export default function Page() {
  return (
    <Container sx={{ textAlign: 'center', my: 5 }}>
      <CustomBreadcrumbs
        links={[{ name: 'Trang chủ', href: '/' }, { name: 'Tra cứu đơn' }]}
        sx={{ mb: { xs: 3, md: 5 } }}
        slotProps={{
          breadcrumbs: {
            color: '#821818',
          },
          action: {},
          heading: {},
          moreLink: {},
        }}
      />
      <ComingSoonView />
    </Container>
  );
}
