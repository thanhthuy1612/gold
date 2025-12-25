import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Typography, useMediaQuery } from '@mui/material';

import { usePathname } from 'src/routes/hooks';

import { Logo } from 'src/components/logo';
import { Scrollbar } from 'src/components/scrollbar';

import { Nav, NavUl } from '../components';
import { NavList } from './nav-mobile-list';
import { SignInButton } from '../../../components/sign-in-button';

import type { NavMainProps } from '../types';

// ----------------------------------------------------------------------

export type NavMobileProps = NavMainProps & {
  open: boolean;
  onClose: () => void;
  slots?: {
    topArea?: React.ReactNode;
    bottomArea?: React.ReactNode;
  };
};

export function NavMobile({ data, open, onClose, slots, sx }: NavMobileProps) {
  const pathname = usePathname();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  useEffect(() => {
    if (open) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: [
            {
              display: 'flex',
              flexDirection: 'column',
              width: 'var(--layout-nav-mobile-width)',
            },
            ...(Array.isArray(sx) ? sx : [sx]),
          ],
        },
      }}
    >
      {slots?.topArea ?? (
        <Box
          sx={{
            pt: 3,
            pb: 2,
            pl: 2.5,
            display: 'flex',
            background: '#901011',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Logo />
          <Typography
            variant={isSmallScreen ? 'subtitle2' : 'h6'}
            component="span"
            sx={{
              color: 'transparent',
              backgroundImage: 'linear-gradient(180deg, #fcf0ad, #d8a45b)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              display: 'inline-block',
            }}
          >
            TÀI LỘC
          </Typography>
        </Box>
      )}

      <Scrollbar fillContent>
        <Nav
          sx={{
            pb: 3,
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
          }}
        >
          <NavUl>
            {data.map((list) => (
              <NavList key={list.title} data={list} />
            ))}
          </NavUl>
        </Nav>
      </Scrollbar>

      {slots?.bottomArea ?? (
        <Box
          sx={{
            py: 3,
            px: 2.5,
            gap: 1.5,
            display: 'flex',
          }}
        >
          <SignInButton fullWidth />

          {/* <Button
            fullWidth
            variant="contained"
            rel="noopener"
            target="_blank"
            href={paths.minimalStore}
          >
            Purchase
          </Button> */}
        </Box>
      )}
    </Drawer>
  );
}
