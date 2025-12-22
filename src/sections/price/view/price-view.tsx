'use client';

// ----------------------------------------------------------------------

import { Card, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';

import { fDate, fTime } from 'src/utils/format-time';

import { Logo } from 'src/components/logo';

import { Price } from '../price';

export function PriceView() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const renderHeader = (title: string) => (
    <Stack
      display="flex"
      gap={1}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: '#821818',
        px: 5,
        py: 2,
        mb: 5,
        [theme.breakpoints.up('md')]: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
      }}
    >
      {/* LOGO + BRAND */}
      <Stack display="flex" gap={1} flexDirection="row" alignItems="center">
        <Logo sx={{ width: isSmallScreen ? 30 : 60, height: 'auto' }} />
        <Typography
          sx={{
            color: 'transparent',
            backgroundImage: 'linear-gradient(180deg, #f6ca68, #c18b49)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
          variant={isSmallScreen ? 'h5' : 'h4'}
        >
          TÀI LỘC
        </Typography>
      </Stack>

      {/* TITLE */}
      <Typography
        sx={{
          color: 'transparent',
          backgroundImage: 'linear-gradient(180deg, #f6ca68, #c18b49)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}
        variant={isSmallScreen ? 'h3' : 'h2'}
      >
        {title}
      </Typography>

      {/* TIME */}
      <Card
        sx={{
          p: 1,
          position: 'relative',
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
          variant="caption"
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
          <Typography variant="h5">{fTime(new Date())}</Typography>
          <Logo sx={{ width: 22, height: 'auto' }} />
          <Typography variant="h5">{fDate(new Date(), 'DD/MM/YYYY')}</Typography>
        </Stack>
      </Card>
    </Stack>
  );

  return (
    <>
      {/* ================= BẠC ================= */}
      {renderHeader('GIÁ BẠC PHÚ QUÝ')}
      <Price group="silver" />

      <Stack
        sx={{
          height: 32,
          my: 6,
          borderTop: '2px solid #c18b49',
        }}
      />

      {/* ================= VÀNG ================= */}
      {renderHeader('GIÁ VÀNG PHÚ QUÝ')}
      <Price group="gold" />

      {/* ================= NOTE ================= */}
      <Stack display="flex" alignItems="flex-start" sx={{ mt: 2 }}>
        <Typography variant="subtitle2" color="#821818">
          Đơn giá đã bao gồm thuế GTGT
        </Typography>
        <Typography variant="subtitle2" color="#821818">
          Quý khách lưu ý: Giá trên chỉ mang tính chất tham khảo, vui lòng liên hệ trực tiếp để có
          giá mua bán chính xác nhất.
        </Typography>
      </Stack>
    </>
  );
}
