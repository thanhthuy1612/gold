import { Container } from '@mui/material';

import { CONFIG } from 'src/global-config';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { JwtSignInView } from 'src/auth/view/jwt';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign in | Jwt - ${CONFIG.appName}` };

export default function Page() {
  return (
    <Container sx={{ textAlign: 'center', my: 5 }}>
      <CustomBreadcrumbs
        links={[{ name: 'Trang chủ', href: '/' }, { name: 'Đăng nhập' }]}
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
      <JwtSignInView />
    </Container>
  );
}
