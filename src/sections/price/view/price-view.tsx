// ----------------------------------------------------------------------

import { Card, Stack, Container, Typography } from '@mui/material';

import { fDate, fTime } from 'src/utils/format-time';

import { Logo } from 'src/components/logo';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { Price } from '../price';

export function PriceView() {
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
      <Stack
        display="flex"
        gap={2}
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap"
        alignItems="center"
        sx={{ background: '#821818', px: 5, py: 2 }}
      >
        <Stack display="flex" gap={2} flexDirection="row" alignItems="center">
          <Logo sx={{ width: 60, height: 'auto' }} />
          <Typography
            sx={{
              color: 'transparent',
              backgroundImage: 'linear-gradient(180deg, #f6ca68, #c18b49)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
            variant="h3"
          >
            TÀI LỘC
          </Typography>
        </Stack>
        <Typography
          sx={{
            color: 'transparent',
            backgroundImage: 'linear-gradient(180deg, #f6ca68, #c18b49)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
          variant="h2"
        >
          GIÁ BẠC PHÚ QUÝ
        </Typography>
        <Card
          sx={{
            py: 1,
            px: 2,
            position: 'relative',
            boxSizing: 'border-box',
            background: '#821818',
            backgroundClip: 'padding-box',
            border: 'solid 2px #c18b49',
          }}
        >
          <Typography
            sx={{
              color: 'transparent',
              backgroundImage: 'linear-gradient(180deg, #f6ca68, #c18b49)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
            variant="subtitle2"
          >
            GIÁ NIÊM YẾT ĐƯỢC CẬP NHẬT LẦN CUỐI
          </Typography>
          <Stack
            display="flex"
            gap={1}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              color: 'transparent',
              backgroundImage: 'linear-gradient(180deg, #f6ca68, #c18b49)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            <Typography variant="h4">{fTime(new Date())}</Typography>
            <Logo sx={{ width: 22, height: 'auto' }} />
            <Typography variant="h4">{fDate(new Date(), 'DD/MM/YYYY')}</Typography>
          </Stack>
        </Card>
      </Stack>
      <Price />
      <img src="/assets/background/price.jpg" width="100%" height="auto" />
    </Container>
  );
}
