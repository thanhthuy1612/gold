'use client';

import { Container } from '@mui/material';

import { MainLayout } from 'src/layouts/main';
import { MainSection } from 'src/layouts/core';
import { AuthCenteredContent } from 'src/layouts/auth-centered';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { GuestGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <GuestGuard>
      <MainLayout>
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
          <MainSection
            sx={[
              (theme) => ({
                alignItems: 'center',
                p: theme.spacing(3, 2, 10, 2),
                [theme.breakpoints.up('md')]: {
                  justifyContent: 'center',
                  p: theme.spacing(10, 0, 10, 0),
                },
              }),
            ]}
          >
            <AuthCenteredContent>{children}</AuthCenteredContent>
          </MainSection>
        </Container>
      </MainLayout>
    </GuestGuard>
  );
}
