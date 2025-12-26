'use client';

import type { Theme, SxProps, BoxProps } from '@mui/material';
import type { PriceType, PriceData, PriceResult } from 'src/types/landing';

import React from 'react';
import { useRouter } from 'next/navigation';

import { Box, Card, Grid, Stack, Button, Typography, useMediaQuery } from '@mui/material';

import { paths } from 'src/routes/paths';

import { fCurrency, fShortenNumber } from 'src/utils/format-number';

import { useAppDispatch } from 'src/lib/hooks';
import { updateType } from 'src/lib/features/landing';
import { homeService } from 'src/services/landing.services';

import { Iconify } from 'src/components/iconify';
import { ChartSelect } from 'src/components/chart';

import { ChartUnit, ProductType, ChartTimeRange } from 'src/types/landing';

import { HomeChart } from './home-chart';

// ----------------------------------------------------------------------

const listTimeRange = ['1 ngày', '7 ngày', '1 tháng', '3 tháng', '1 năm'];
const listUnitSilver = ['Lượng', 'Kg'];
const listUnitGold = ['Chỉ', 'Lượng'];

const gold = ['Vàng SJC', 'Vàng Phú Quý'];
export function HomePrice({ sx, ...other }: BoxProps) {
  const [chart, setChart] = React.useState<PriceData>();
  const [data, setData] = React.useState<PriceResult>();
  const [type, setType] = React.useState<ProductType>(ProductType.SILVER);
  const [goldType, setGoldType] = React.useState<string>('Vàng Phú Quý');
  const [timeRange, setTimeRange] = React.useState<ChartTimeRange>(ChartTimeRange._7D);
  const [unit, setUnit] = React.useState<ChartUnit>(ChartUnit.BAC_LUONG);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [loadingFirst, setLoadingFirst] = React.useState<boolean>(true);

  const dispath = useAppDispatch();
  const router = useRouter();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const fetchDataInterval = () => {
    fetchData({
      type: null,
      unit: null,
      timeRange: null,
    });
    fetchData({ type, unit, timeRange });
  };

  React.useEffect(() => {
    if (loadingFirst || loading) {
      fetchDataInterval();
    }
    const intervalId = loading ? null : setInterval(fetchDataInterval, 60000);
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const fetchData = async (body?: PriceType, typeChange?: string) => {
    try {
      const newBody = body ?? {
        type,
        unit,
        timeRange,
      };
      const result = await homeService.price(newBody);
      const newData =
        newBody.type !== ProductType.GOLD
          ? result.data?.silver
          : (typeChange ?? goldType) === 'Vàng SJC'
            ? result.data?.sjcGold
            : result.data?.pqGold;
      if (body?.type === null) {
        setData(result.data);
      } else {
        setChart(newData);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setLoadingFirst(false);
    }
  };

  const renderTitle: () => React.ReactNode = () =>
    type === ProductType.SILVER ? (
      'Giá bạc Phú Quý'
    ) : (
      <ChartSelect
        options={gold}
        value={goldType}
        onChange={(value) => {
          setLoading(true);
          setGoldType(value);
        }}
      />
    );

  return (
    <Box sx={{ my: 5, ...sx }} {...other}>
      <Typography variant="h4" sx={{ color: '#8c0302', mb: 3 }}>
        Tỷ giá vàng bạc
      </Typography>
      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 6, lg: 5 }}>
          <Card
            sx={{
              p: isSmallScreen ? 2 : 3,
              backgroundColor: '#e1ecff',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Stack
                onClick={() => {
                  dispath(updateType('silver'));
                  router.push(paths.price);
                }}
              >
                <CardPrice
                  loading={loadingFirst}
                  title="Giá bạc Phú Quý"
                  buy={data?.silver?.infoList?.[1]?.priceIn ?? 0}
                  sell={data?.silver?.infoList?.[1]?.priceOut ?? 0}
                  persentBuy={
                    (((data?.silver?.infoList?.[1]?.priceIn ?? 0) -
                      (data?.silver?.infoList?.[0]?.priceIn ?? 0)) /
                      (data?.silver?.infoList?.[0]?.priceIn ?? 0)) *
                    100
                  }
                  persentSell={
                    (((data?.silver?.infoList?.[1]?.priceOut ?? 0) -
                      (data?.silver?.infoList?.[0]?.priceOut ?? 0)) /
                      (data?.silver?.infoList?.[0]?.priceOut ?? 0)) *
                    100
                  }
                  isIncreaseBuy={
                    (data?.silver?.infoList?.[1]?.priceIn ?? 0) -
                    (data?.silver?.infoList?.[0]?.priceIn ?? 0)
                  }
                  isIncreaseSell={
                    (data?.silver?.infoList?.[1]?.priceOut ?? 0) -
                    (data?.silver?.infoList?.[0]?.priceOut ?? 0)
                  }
                  sx={{
                    p: 2,
                    mb: 3,
                    backgroundColor: type === ProductType.SILVER ? '#ffffff' : '#cedcff',
                  }}
                />
              </Stack>
              <Stack
                onClick={() => {
                  dispath(updateType('gold'));
                  router.push(paths.price);
                }}
              >
                {goldType === 'Vàng SJC' ? (
                  <CardPrice
                    loading={loadingFirst}
                    title="Giá vàng SJC"
                    buy={data?.sjcGold?.infoList?.[1]?.priceIn ?? 0}
                    sell={data?.sjcGold?.infoList?.[1]?.priceOut ?? 0}
                    persentBuy={
                      (((data?.sjcGold?.infoList?.[1]?.priceIn ?? 0) -
                        (data?.sjcGold?.infoList?.[0]?.priceIn ?? 0)) /
                        (data?.sjcGold?.infoList?.[0]?.priceIn ?? 0)) *
                      100
                    }
                    persentSell={
                      (((data?.sjcGold?.infoList?.[1]?.priceOut ?? 0) -
                        (data?.sjcGold?.infoList?.[0]?.priceOut ?? 0)) /
                        (data?.sjcGold?.infoList?.[0]?.priceOut ?? 0)) *
                      100
                    }
                    isIncreaseBuy={
                      (data?.sjcGold?.infoList?.[1]?.priceIn ?? 0) -
                      (data?.sjcGold?.infoList?.[0]?.priceIn ?? 0)
                    }
                    isIncreaseSell={
                      (data?.sjcGold?.infoList?.[1]?.priceOut ?? 0) -
                      (data?.sjcGold?.infoList?.[0]?.priceOut ?? 0)
                    }
                    sx={{
                      p: 2,
                      mb: 3,
                      backgroundColor: type === ProductType.GOLD ? '#ffffff' : '#cedcff',
                    }}
                  />
                ) : (
                  <CardPrice
                    loading={loadingFirst}
                    title="Giá vàng Phú Quý"
                    buy={data?.pqGold?.infoList?.[1]?.priceIn ?? 0}
                    sell={data?.pqGold?.infoList?.[1]?.priceOut ?? 0}
                    persentBuy={
                      (((data?.pqGold?.infoList?.[1]?.priceIn ?? 0) -
                        (data?.pqGold?.infoList?.[0]?.priceIn ?? 0)) /
                        (data?.pqGold?.infoList?.[0]?.priceIn ?? 0)) *
                      100
                    }
                    persentSell={
                      (((data?.pqGold?.infoList?.[1]?.priceOut ?? 0) -
                        (data?.pqGold?.infoList?.[0]?.priceOut ?? 0)) /
                        (data?.pqGold?.infoList?.[0]?.priceOut ?? 0)) *
                      100
                    }
                    isIncreaseBuy={
                      (data?.pqGold?.infoList?.[1]?.priceIn ?? 0) -
                      (data?.pqGold?.infoList?.[0]?.priceIn ?? 0)
                    }
                    isIncreaseSell={
                      (data?.pqGold?.infoList?.[1]?.priceOut ?? 0) -
                      (data?.pqGold?.infoList?.[0]?.priceOut ?? 0)
                    }
                    sx={{
                      p: 2,
                      mb: 3,
                      backgroundColor: type === ProductType.GOLD ? '#ffffff' : '#cedcff',
                    }}
                  />
                )}
              </Stack>
            </Box>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{ background: '#b4292d !important', fontSize: 12 }}
                  onClick={async () => {
                    setLoading(true);
                    setType(ProductType.SILVER);
                    setUnit(ChartUnit.BAC_LUONG);
                  }}
                >
                  XEM BẢNG GIÁ BẠC
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{ background: '#ff8c1c !important', fontSize: 12 }}
                  onClick={async () => {
                    setLoading(true);
                    setType(ProductType.GOLD);
                    setUnit(ChartUnit.VANG_CHI);
                  }}
                >
                  XEM BẢNG GIÁ VÀNG
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 7 }}>
          <HomeChart
            timeRange={timeRange}
            loading={loading}
            title={renderTitle()}
            subheader=""
            action={
              <Stack display="flex" flexDirection="row" justifyContent="center" gap={0.5}>
                <ChartSelect
                  options={listTimeRange}
                  value={listTimeRange[timeRange - 1]}
                  onChange={async (value) => {
                    setLoading(true);
                    const target = listTimeRange.indexOf(value) + 1;
                    setTimeRange(target);
                  }}
                />
                <ChartSelect
                  options={type === ProductType.SILVER ? listUnitSilver : listUnitGold}
                  value={
                    type === ProductType.SILVER ? listUnitSilver[unit - 1] : listUnitGold[unit - 3]
                  }
                  onChange={async (value) => {
                    setLoading(true);
                    const target =
                      type === ProductType.SILVER
                        ? listUnitSilver.indexOf(value) + 1
                        : listUnitGold.indexOf(value) + 3;
                    setUnit(target);
                  }}
                />
              </Stack>
            }
            chart={{
              categories: (chart?.infoList ?? []).map((item) => item.lastUpdate),
              series: [
                {
                  data: [
                    {
                      name: 'Mua vào',
                      data: (chart?.infoList ?? []).map((item) => item?.priceIn),
                    },
                    {
                      name: 'Bán ra',
                      data: (chart?.infoList ?? []).map((item) => item?.priceOut),
                    },
                  ],
                },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

// ----------------------------------------------------------------------

type CardPriceProps = {
  title: string;
  buy: number;
  sell: number;
  isIncreaseBuy: number;
  isIncreaseSell: number;
  sx?: SxProps<Theme>;
  loading: boolean;
  persentBuy: number;
  persentSell: number;
};
export function CardPrice({
  sx,
  loading,
  title,
  buy,
  sell,
  isIncreaseBuy,
  isIncreaseSell,
  persentBuy,
  persentSell,
}: CardPriceProps) {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Card sx={sx}>
      <Typography variant="h6" sx={{ mb: 2, color: '#8c0302' }}>
        {title}
      </Typography>
      <Grid container spacing={1}>
        <Grid size={6}>
          <Typography variant={isSmallScreen ? 'subtitle1' : 'h5'} sx={{ mb: 1 }}>
            Giá mua
          </Typography>
          <Typography variant={isSmallScreen ? 'subtitle2' : 'h5'} color="error">
            {loading ? '...' : fCurrency(buy)}
          </Typography>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: isSmallScreen ? '0.7rem' : '0.75rem',
            }}
            variant="caption"
            color={isIncreaseBuy > 0 ? 'success' : 'error'}
          >
            <Iconify
              icon={
                isIncreaseBuy > 0
                  ? 'solar:double-alt-arrow-up-bold-duotone'
                  : 'solar:double-alt-arrow-down-bold-duotone'
              }
              sx={{ width: isSmallScreen ? 16 : 20, height: isSmallScreen ? 16 : 20 }}
            />
            {loading ? '...' : `${fCurrency(isIncreaseBuy)} (${fShortenNumber(persentBuy)})%`}
          </Typography>
        </Grid>
        <Grid size={6}>
          <Typography variant={isSmallScreen ? 'subtitle1' : 'h5'} sx={{ mb: 1 }}>
            Giá bán
          </Typography>
          <Typography variant={isSmallScreen ? 'subtitle2' : 'h5'} color="success">
            {loading ? '...' : fCurrency(sell)}
          </Typography>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: isSmallScreen ? '0.7rem' : '0.75rem',
            }}
            variant="caption"
            color={isIncreaseSell > 0 ? 'success' : 'error'}
          >
            <Iconify
              icon={
                isIncreaseSell > 0
                  ? 'solar:double-alt-arrow-up-bold-duotone'
                  : 'solar:double-alt-arrow-down-bold-duotone'
              }
              sx={{ width: isSmallScreen ? 16 : 20, height: isSmallScreen ? 16 : 20 }}
            />
            {loading ? '...' : `${fCurrency(isIncreaseSell)} (${fShortenNumber(persentSell)})%`}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
