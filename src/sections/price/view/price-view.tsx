// ----------------------------------------------------------------------

import { Container } from '@mui/material';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

export function PriceView() {
  return (
    <Container sx={{ textAlign: 'center', my: 5 }}>
      <CustomBreadcrumbs
        links={[{ name: 'Trang chủ', href: '/' }, { name: 'Cửa hàng Tài Lộc' }]}
        sx={{ mb: { xs: 3, md: 5 } }}
        slotProps={{
          breadcrumbs: {
            color: '#981113',
          },
          action: {},
          heading: {},
          moreLink: {},
        }}
      />
      <img src="/assets/background/price.jpg" width="100%" height="auto" />
    </Container>
  );
}
