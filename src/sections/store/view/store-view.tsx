// ----------------------------------------------------------------------

import { Container } from '@mui/material';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { Store } from '../store';

export function StoreView() {
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
      <Store />
    </Container>
  );
}
