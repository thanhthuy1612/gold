import type { Metadata } from 'next';

import { Container } from '@mui/material';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { StoreView } from 'src/sections/store/view';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Cửa hàng',
  description: 'Vàng bạc Tài Lộc',
};

export default function Page() {
  return (
    <Container sx={{ textAlign: 'center', my: 5 }}>
      <CustomBreadcrumbs
        links={[{ name: 'Trang chủ', href: '/' }, { name: 'Cửa hàng Tài Lộc' }]}
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
      <StoreView />
    </Container>
  );
}
