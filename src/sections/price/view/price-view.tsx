'use client';

// ----------------------------------------------------------------------

import React, { useState } from 'react';

import {
  Tab,
  Card,
  Tabs,
  Stack,
  useTheme,
  Typography,
  useMediaQuery,
  CircularProgress,
} from '@mui/material';

import { useAppSelector } from 'src/lib/hooks';

import { Logo } from 'src/components/logo';

import { Price } from '../price';

type TabValue = 'silver' | 'gold';

export function PriceView() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [tab, setTab] = useState<TabValue>('silver');

  const { loading, type, goldLastUpdate, silverLastUpdate } = useAppSelector(
    (state: any) => state.landing
  );

  React.useEffect(() => {
    if (type) {
      setTab(type);
    }
  }, [type]);

  const renderHeader = (title: string) => (
    <Stack
      display="flex"
      gap={1}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: '#821818',
        px: 2,
        py: 2,
        mb: 2,
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
          component="span"
          sx={{
            color: 'transparent',
            backgroundImage: 'linear-gradient(90deg, #d09f19, #ffdc2b, #ffdc2b, #d09f19)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            visibility: 'visible',
          }}
          variant={isSmallScreen ? 'h5' : 'h4'}
        >
          TÀI LỘC
        </Typography>
      </Stack>

      {/* TITLE */}
      <Typography
        component="span"
        sx={{
          color: 'transparent',
          backgroundImage: 'linear-gradient(90deg, #d09f19, #ffdc2b, #ffdc2b, #d09f19)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          visibility: 'visible',
        }}
        variant="h3"
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
          component="span"
          sx={{
            color: 'transparent',
            backgroundImage: 'linear-gradient(90deg, #d09f19, #ffdc2b, #ffdc2b, #d09f19)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            fontWeight: '700 !important',
            width: 'fit-content',
            visibility: 'visible',
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
          component="span"
          sx={{
            color: 'transparent',
            backgroundImage: 'linear-gradient(90deg, #d09f19, #ffdc2b, #ffdc2b, #d09f19)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            visibility: 'visible',
          }}
        >
          <Typography variant="h4">
            {loading
              ? '...'
              : (tab === 'silver' ? (silverLastUpdate ?? '') : (goldLastUpdate ?? '')).split(
                  ' '
                )?.[0]}
          </Typography>
          <Logo sx={{ width: 22, height: 'auto' }} />
          <Typography variant="h4">
            {loading
              ? '...'
              : (tab === 'silver' ? (silverLastUpdate ?? '') : (goldLastUpdate ?? '')).split(
                  ' '
                )?.[1]}
          </Typography>
        </Stack>
      </Card>
    </Stack>
  );

  return (
    <>
      {/* ================= TABS ================= */}
      <Stack display="flex" justifyContent="center" alignItems="center">
        <Tabs
          value={tab}
          onChange={(_, value) => setTab(value)}
          sx={{
            mb: 5,
            color: '#821818 !important',
            fontWeight: 700,
            '& .MuiTab-root': {
              fontWeight: 700,
              fontSize: 22,
            },
          }}
        >
          <Tab
            sx={{ color: '#821818 !important', border: '#821818 !important' }}
            value="silver"
            label="GIÁ BẠC"
          />
          <Tab
            sx={{ color: '#821818 !important', border: '#821818 !important' }}
            value="gold"
            label="GIÁ VÀNG"
          />
        </Tabs>
      </Stack>

      {renderHeader(tab === 'silver' ? 'GIÁ BẠC PHÚ QUÝ' : 'GIÁ VÀNG PHÚ QUÝ')}

      {/* ================= CONTENT ================= */}
      {loading ? (
        <Stack alignItems="center" my={6}>
          <CircularProgress sx={{ color: '#821818' }} />
          <Typography mt={2} color="#821818">
            Đang tải dữ liệu giá...
          </Typography>
        </Stack>
      ) : (
        <Price group={tab} />
      )}

      {/* ================= NOTE ================= */}
      <Stack display="flex" alignItems="flex-start" sx={{ mt: 2 }}>
        <Typography variant="subtitle2" color="#821818">
          Đơn giá đã bao gồm thuế GTGT
        </Typography>
        {/* <Typography variant="subtitle2" color="#821818">
          Quý khách lưu ý: Giá trên chỉ mang tính chất tham khảo, vui lòng liên hệ trực tiếp để có
          giá mua bán chính xác nhất.
        </Typography> */}
      </Stack>
    </>
  );
}
