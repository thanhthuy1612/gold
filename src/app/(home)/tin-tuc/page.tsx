import type { Metadata } from 'next';

import { Container } from '@mui/material';

import { CONFIG } from 'src/global-config';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import NewsClient from './news-client';

export const metadata: Metadata = {
  title: `Tin tức | ${CONFIG.appName}`,
  description: 'Vàng bạc Tài Lộc',
};

export default function Page() {
  return (
    <Container sx={{ my: 5 }}>
      <CustomBreadcrumbs
        links={[{ name: 'Trang chủ', href: '/' }, { name: 'Tin tức' }]}
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

      <NewsClient />
    </Container>
  );
}
