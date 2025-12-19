'use client';

import type { Breakpoint } from '@mui/material/styles';

import { useBoolean } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { Stack, Typography } from '@mui/material';

import { usePathname } from 'src/routes/hooks';

import { Logo } from 'src/components/logo';

import { NavMobile } from './nav/mobile';
import { NavDesktop } from './nav/desktop';
import { Footer, HomeFooter } from './footer';
import { MainSection } from '../core/main-section';
import { MenuButton } from '../components/menu-button';
import { LayoutSection } from '../core/layout-section';
import { HeaderSection } from '../core/header-section';
import { navData as mainNavData } from '../nav-config-main';
import { SignInButton } from '../components/sign-in-button';

import type { FooterProps } from './footer';
import type { NavMainProps } from './nav/types';
import type { MainSectionProps } from '../core/main-section';
import type { HeaderSectionProps } from '../core/header-section';
import type { LayoutSectionProps } from '../core/layout-section';

// ----------------------------------------------------------------------

type LayoutBaseProps = Pick<LayoutSectionProps, 'sx' | 'children' | 'cssVars'>;

export type MainLayoutProps = LayoutBaseProps & {
  layoutQuery?: Breakpoint;
  slotProps?: {
    header?: HeaderSectionProps;
    nav?: {
      data?: NavMainProps['data'];
    };
    main?: MainSectionProps;
    footer?: FooterProps;
  };
};

export function MainLayout({
  sx,
  cssVars,
  children,
  slotProps,
  layoutQuery = 'md',
}: MainLayoutProps) {
  const pathname = usePathname();

  const { value: open, onFalse: onClose, onTrue: onOpen } = useBoolean();

  const isHomePage = pathname === '/';

  const navData = slotProps?.nav?.data ?? mainNavData;

  const renderHeader = () => {
    const headerSlots: HeaderSectionProps['slots'] = {
      topArea: (
        <Alert severity="info" sx={{ display: 'none', borderRadius: 0 }}>
          This is an info Alert.
        </Alert>
      ),
      leftArea: (
        <>
          {/** @slot Nav mobile */}
          <MenuButton
            onClick={onOpen}
            sx={(theme) => ({
              mr: 1,
              ml: -1,
              [theme.breakpoints.up(layoutQuery)]: { display: 'none' },
            })}
          />
          <NavMobile data={navData} open={open} onClose={onClose} />

          {/** @slot Logo */}
          <Stack display="flex" gap={2} flexDirection="row" alignItems="center">
            <Logo />
            <Typography
              variant="h6"
              sx={{
                color: 'transparent',
                backgroundImage: 'linear-gradient(180deg, #fcf0ad, #d8a45b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                fontSize: '700',
              }}
            >
              TÀI LỘC
            </Typography>
          </Stack>
        </>
      ),
      rightArea: (
        <>
          {/** @slot Nav desktop */}
          <NavDesktop
            data={navData}
            sx={(theme) => ({
              display: 'none',
              [theme.breakpoints.up(layoutQuery)]: { display: 'flex' },
              color: '#901011',
              height: '100%',
            })}
          />

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1, sm: 1.5 },
              height: '100%',
              '&:hover': { backgroundColor: '#901011' },
            }}
          >
            {/** @slot Sign in button */}
            <SignInButton
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1, sm: 1.5 },
                height: '100%',
                color: '#901011',
                '&:hover': {
                  color: 'transparent',
                  backgroundImage: 'linear-gradient(180deg, #fcf0ad, #d8a45b)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  '& .iconColorChange': {
                    color: '#d8a45b',
                  },
                },
                '&.active': {
                  color: 'transparent',
                  backgroundImage: 'linear-gradient(180deg, #fcf0ad, #d8a45b)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  '& .iconColorChange': {
                    color: '#d8a45b',
                  },
                },
              }}
            />
          </Box>
        </>
      ),
    };

    return (
      <HeaderSection
        layoutQuery={layoutQuery}
        {...slotProps?.header}
        slots={{ ...headerSlots, ...slotProps?.header?.slots }}
        slotProps={slotProps?.header?.slotProps}
        sx={slotProps?.header?.sx}
      />
    );
  };

  const renderFooter = () =>
    isHomePage ? (
      <HomeFooter sx={slotProps?.footer?.sx} />
    ) : (
      <Footer sx={slotProps?.footer?.sx} layoutQuery={layoutQuery} />
    );

  const renderMain = () => <MainSection {...slotProps?.main}>{children}</MainSection>;

  return (
    <LayoutSection
      /** **************************************
       * @Header
       *************************************** */
      headerSection={renderHeader()}
      /** **************************************
       * @Footer
       *************************************** */
      footerSection={renderFooter()}
      /** **************************************
       * @Styles
       *************************************** */
      cssVars={cssVars}
      sx={sx}
    >
      {renderMain()}
    </LayoutSection>
  );
}
