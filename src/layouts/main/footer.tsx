import type { Breakpoint } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { _socials } from 'src/_mock';

import { Logo } from 'src/components/logo';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const listInfo = [
  { name: 'Mã số doanh nghiệp', value: '0111262522', href: '/' },
  { name: 'Điện thoại', value: '0961228888', href: '/' },
  { name: 'Thư điện tử', value: 'tdtailoc@gmail.com', href: '/' },
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
              {_socials.map((social) => (
                <IconButton key={social.label}>
                  {social.value === 'twitter' && <Iconify icon="socials:twitter" />}
                  {social.value === 'facebook' && <Iconify icon="socials:facebook" />}
                  {social.value === 'instagram' && <Iconify icon="socials:instagram" />}
                  {social.value === 'linkedin' && <Iconify icon="socials:linkedin" />}
                </IconButton>
              ))}
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
            py: 2,
          }}
        >
          <Stack
            sx={{
              py: 4,
              borderTop: '2px solid #901011',
              borderBottom: '2px solid #901011',
            }}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Iconify sx={{ height: 120, width: 120, mr: -5, pt: 2 }} icon="solar:phone-bold" />
            <Stack>
              <Typography variant="h5">Hotline của chúng tôi luôn đón chào quý khách!</Typography>
              <Typography variant="h2">0383.599.995</Typography>
            </Stack>
          </Stack>
        </Box>
        <Stack
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ backgroundColor: '#901011' }}
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
            <Grid size={{ xs: 12, md: 8 }} justifyItems="start">
              <Typography
                sx={{
                  color: 'transparent',
                  backgroundImage: 'linear-gradient(180deg, #fcf0ad, #d8a45b)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  fontSize: '700',
                  mb: 3,
                }}
                variant="h4"
              >
                CÔNG TY TNHH VÀNG BẠC ĐÁ QUÝ TÀI LỘC
              </Typography>
              {listInfo.map((item) => (
                <Typography
                  key={item.name}
                  sx={{
                    color: 'transparent',
                    backgroundImage: 'linear-gradient(180deg, #fcf0ad, #d8a45b)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    fontSize: '700',
                    mb: 1,
                  }}
                  variant="subtitle1"
                >
                  {item.name}: {item.value}
                </Typography>
              ))}
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack display="flex" flexDirection="column" alignItems="center">
                <Logo sx={{ width: 80, height: 80 }} />
                <Typography
                  variant="h5"
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
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </FooterRoot>
  );
}
