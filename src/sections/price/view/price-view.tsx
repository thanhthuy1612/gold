'use client';

// ----------------------------------------------------------------------

import { Card, Stack, useTheme, Typography, useMediaQuery } from '@mui/material';

import { fDate, fTime } from 'src/utils/format-time';

import { Logo } from 'src/components/logo';

import { Price } from '../price';

export function PriceView() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <Stack
        display="flex"
        gap={1}
        flexDirection="column"
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
        sx={(t) => ({
          background: '#821818',
          px: 5,
          py: 2,
          mb: 5,
          [theme.breakpoints.up('md')]: { justifyContent: 'space-between', flexDirection: 'row' },
        })}
      >
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
        <Typography
          sx={{
            color: 'transparent',
            backgroundImage: 'linear-gradient(180deg, #f6ca68, #c18b49)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
          variant={isSmallScreen ? 'h3' : 'h2'}
        >
          GIÁ BẠC PHÚ QUÝ
        </Typography>
        <Card
          sx={{
            p: 1,
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
      <Price />
      <Stack display="flex" alignItems="start" sx={{ mt: 2 }}>
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
