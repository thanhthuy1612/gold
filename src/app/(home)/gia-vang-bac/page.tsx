import type { Metadata } from 'next';

import { Container } from '@mui/material';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import GiaVangBacClient from './gia-vang-bac-client';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Giá vàng bạc',
  description: 'Vàng bạc Tài Lộc',
};

export default function Page() {
  return (
    <Container sx={{ textAlign: 'center', my: 5 }}>
      <CustomBreadcrumbs
        links={[{ name: 'Trang chủ', href: '/' }, { name: 'Giá vàng - bạc' }]}
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

      <GiaVangBacClient />
    </Container>
  );
}
