'use client';

import type { Breakpoint } from '@mui/material/styles';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Stack, useMediaQuery } from '@mui/material';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/global-config';

import { Logo } from 'src/components/logo';
import { varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const listInfo = [
  { name: 'Mã số doanh nghiệp', value: '0111262522', href: '/' },
  { name: 'Điện thoại', value: '0383599995', href: 'tel:0383599995' },
  { name: 'Thư điện tử', value: 'tdtailoc@gmail.com', href: 'mailto:tdtailoc@gmail.com' },
];

const LINKS = [
  {
    headline: 'Minimal',
    children: [{ name: 'FAQs', href: paths.faqs }],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and condition', href: '#' },
      { name: 'Privacy policy', href: '#' },
    ],
  },
  { headline: 'Contact', children: [{ name: 'support@minimals.cc', href: '#' }] },
];

const listSocial = [
  {
    icon: <img src="/assets/background/fb.png" width="30" height="auto" />,
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61583709022271',
  },
  // {
  //   icon: <img src="/assets/background/tt.png" width="30" height="auto" />,
  //   name: 'Tiktok',
  //   href: '/',
  // },
  {
    icon: <img src="/assets/background/zalo-icon.png" width="30" height="auto" />,
    name: 'Zalo',
    href: 'https://zalo.me/g/acdmkl802',
  },
];

// ----------------------------------------------------------------------

const FooterRoot = styled('footer')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.vars.palette.background.default,
}));

export type FooterProps = React.ComponentProps<typeof FooterRoot>;

export function Footer({
  sx,
  layoutQuery = 'md',
  ...other
}: FooterProps & { layoutQuery?: Breakpoint }) {
  return (
    <FooterRoot sx={sx} {...other}>
      <Divider />

      <Container
        sx={(theme) => ({
          pb: 5,
          pt: 10,
          textAlign: 'center',
          [theme.breakpoints.up(layoutQuery)]: { textAlign: 'unset' },
        })}
      >
        <Logo />

        <Grid
          container
          sx={[
            (theme) => ({
              mt: 3,
              justifyContent: 'center',
              [theme.breakpoints.up(layoutQuery)]: { justifyContent: 'space-between' },
            }),
          ]}
        >
          <Grid size={{ xs: 12, [layoutQuery]: 3 }}>
            <Typography
              variant="body2"
              sx={(theme) => ({
                mx: 'auto',
                maxWidth: 280,
                [theme.breakpoints.up(layoutQuery)]: { mx: 'unset' },
              })}
            >
              The starting point for your next project with Minimal UI Kit, built on the newest
              version of Material-UI ©, ready to be customized to your style.
            </Typography>

            <Box
              sx={(theme) => ({
                mt: 3,
                mb: 5,
                display: 'flex',
                justifyContent: 'center',
                [theme.breakpoints.up(layoutQuery)]: { mb: 0, justifyContent: 'flex-start' },
              })}
            >
              {/* {listSocial.map((social) => (
                <IconButton key={social.label}>
                  {social.value === 'twitter' && <Iconify icon="socials:twitter" />}
                  {social.value === 'facebook' && <Iconify icon="socials:facebook" />}
                  {social.value === 'instagram' && <Iconify icon="socials:instagram" />}
                  {social.value === 'linkedin' && <Iconify icon="socials:linkedin" />}
                </IconButton>
              ))} */}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, [layoutQuery]: 6 }}>
            <Box
              sx={(theme) => ({
                gap: 5,
                display: 'flex',
                flexDirection: 'column',
                [theme.breakpoints.up(layoutQuery)]: { flexDirection: 'row' },
              })}
            >
              {LINKS.map((list) => (
                <Box
                  key={list.headline}
                  sx={(theme) => ({
                    gap: 2,
                    width: 1,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    [theme.breakpoints.up(layoutQuery)]: { alignItems: 'flex-start' },
                  })}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 10 }}>
          © All rights reserved.
        </Typography>
      </Container>
    </FooterRoot>
  );
}

// ----------------------------------------------------------------------

export function HomeFooter({ sx, ...other }: FooterProps) {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <FooterRoot
      sx={[
        {
          pt: 5,
          textAlign: 'center',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container maxWidth={false} sx={{ p: '0 !important', m: '0 !important' }}>
        <Box
          sx={{
            background: 'linear-gradient(90deg,#d8a45b 0%, #fcf0ad 50%, #d8a45b 100%)',
            color: '#901011',
            py: 1,
          }}
        >
          <Stack
            sx={{
              py: 1,
              px: 3,
              borderTop: '2px solid #901011',
              borderBottom: '2px solid #901011',
            }}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <m.div variants={varFade('inUp')}>
              <Box
                component={m.div}
                animate={{ y: [30, 10, 30] }}
                transition={{ duration: 4, repeat: Infinity }}
                sx={(theme) => ({
                  zIndex: 9,
                  width: 40,
                  display: 'none',
                  [theme.breakpoints.up('md')]: { width: 120, mr: -7, display: 'block' },
                  aspectRatio: '1/1',
                  position: 'relative',
                })}
              >
                <img src="/assets/background/ddt2.png" width="80" height="auto" />
              </Box>
            </m.div>
            <m.div variants={varFade('inUp')}>
              <Typography sx={{ fontWeight: 700 }} variant={isSmallScreen ? 'caption' : 'h6'}>
                Hotline của chúng tôi luôn đón chào quý khách!
              </Typography>
              <Typography variant={isSmallScreen ? 'h5' : 'h2'}>0383.599.995</Typography>
            </m.div>
          </Stack>
        </Box>
        <Stack
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={(theme) => ({
            ...theme.mixins.bgGradient({
              images: [`url(${CONFIG.assetsDir}/assets/background/footer-bg.jpg)`],
            }),
            zIndex: 1,
            width: '100%',
            height: 'fit-content',
            backgroundSize: 'cover',
            backgroundPosition: 'right bottom',
            backgroundRepeat: 'no-repeat',
          })}
        >
          <Grid
            container
            sx={{
              py: 8,
              px: 'calc(3 * var(--spacing))',
              width: '100%',
              maxWidth: '1200px',
            }}
          >
            <Grid size={{ xs: 12, md: 7 }} justifyItems="start">
              <div>
                <Typography
                  sx={{
                    color: 'transparent',
                    backgroundImage: 'linear-gradient(90deg,#d8a45b, #fcf0ad,#fcf0ad, #d8a45b)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    fontSize: '700',
                    display: 'inline-block',
                  }}
                  variant={isSmallScreen ? 'subtitle2' : 'h4'}
                >
                  <span>CÔNG TY TNHH VÀNG BẠC ĐÁ QUÝ TÀI LỘC</span>
                </Typography>
              </div>
              {listInfo.map((item) => (
                <Stack
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap={2}
                  sx={{ my: 3 }}
                  key={item.name}
                >
                  <Logo sx={{ width: 20, height: 20 }} />
                  <a href={item.href}>
                    <Link
                      component="span"
                      variant={isSmallScreen ? 'caption' : 'h5'}
                      sx={{
                        color: 'transparent',
                        backgroundImage: 'linear-gradient(90deg,#d8a45b, #fcf0ad,#fcf0ad, #d8a45b)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        fontSize: '700',
                        display: isSmallScreen ? 'inline-block' : 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {item.name}: {item.value}
                    </Link>
                  </a>
                </Stack>
              ))}
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack display="flex" flexDirection="column" alignItems="center">
                <img src="/logo/logo.png" width={isSmallScreen ? '80' : '150'} height="auto" />
                <Stack
                  display="flex"
                  flexDirection="row"
                  sx={{ mt: 1 }}
                  gap={1}
                  alignItems="center"
                >
                  {listSocial.map((item) => (
                    <Link href={item.href} key={item.name}>
                      {item.icon}
                    </Link>
                  ))}
                </Stack>
                <Typography
                  variant={isSmallScreen ? 'caption' : 'subtitle2'}
                  component="span"
                  sx={{
                    color: 'transparent',
                    backgroundImage: 'linear-gradient(90deg,#d8a45b, #fcf0ad,#fcf0ad, #d8a45b)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    width: '125px',
                    display: 'inline-block',
                    mt: 1,
                  }}
                >
                  Ấn vào ứng dụng để xem giá vàng!
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </FooterRoot>
  );
}
