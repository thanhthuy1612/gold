'use client';

import type { Theme, SxProps, BoxProps } from '@mui/material';
import type { PriceType, PriceData, PriceResult } from 'src/types/landing';

import React from 'react';

import { Box, Card, Grid, Stack, Button, Typography } from '@mui/material';

import { fCurrency, fShortenNumber } from 'src/utils/format-number';

import { homeService } from 'src/services/landing.services';

import { Iconify } from 'src/components/iconify';
import { ChartSelect } from 'src/components/chart';

import { ChartUnit, ProductType, ChartTimeRange } from 'src/types/landing';

import { HomeChart } from './home-chart';

// ----------------------------------------------------------------------

const listTimeRange = ['1 ngày', '7 ngày', '1 tháng', '3 tháng', '1 năm'];
const listUnitSilver = ['Lượng', 'Kg'];
const listUnitGold = ['Chỉ', 'Lương'];

const gold = ['Vàng SJC', 'Vàng Phú Quý'];
export function HomePrice({ sx, ...other }: BoxProps) {
  const [chart, setChart] = React.useState<PriceData>();
  const [data, setData] = React.useState<PriceResult>();
  const [type, setType] = React.useState<ProductType>(ProductType.SILVER);
  const [goldType, setGoldType] = React.useState<string>('Vàng Phú Quý');
  const [timeRange, setTimeRange] = React.useState<ChartTimeRange>(ChartTimeRange._1D);
  const [unit, setUnit] = React.useState<ChartUnit>(ChartUnit.BAC_LUONG);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [loadingFirst, setLoadingFirst] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (loadingFirst) {
      fetchData({
        type: null,
        unit: null,
        timeRange: null,
      });
    } else {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingFirst]);

  const fetchData = async (body?: PriceType, typeChange?: string) => {
    try {
      setLoading(true);
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
      setChart(newData);
      if (loadingFirst) {
        setData(result.data);
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
          setGoldType(value);
          fetchData({ type, unit, timeRange }, value);
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
              p: 3,
              backgroundColor: '#e1ecff',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box>
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
            </Box>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{ background: '#b4292d !important', fontSize: 12 }}
                  onClick={async () => {
                    setType(ProductType.SILVER);
                    setUnit(ChartUnit.BAC_LUONG);
                    await fetchData({
                      type: ProductType.SILVER,
                      unit: ChartUnit.BAC_LUONG,
                      timeRange,
                    });
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
                    setType(ProductType.GOLD);
                    setUnit(ChartUnit.VANG_CHI);
                    await fetchData({
                      type: ProductType.GOLD,
                      unit: ChartUnit.VANG_CHI,
                      timeRange,
                    });
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
              <Stack display="flex" flexDirection="row" gap={0.5}>
                <ChartSelect
                  options={listTimeRange}
                  value={listTimeRange[timeRange - 1]}
                  onChange={async (value) => {
                    const target = listTimeRange.indexOf(value) + 1;
                    setTimeRange(target);
                    await fetchData({
                      type,
                      unit,
                      timeRange: target,
                    });
                  }}
                />
                <ChartSelect
                  options={type === ProductType.SILVER ? listUnitSilver : listUnitGold}
                  value={
                    type === ProductType.SILVER ? listUnitSilver[unit - 1] : listUnitGold[unit - 3]
                  }
                  onChange={async (value) => {
                    const target =
                      type === ProductType.SILVER
                        ? listUnitSilver.indexOf(value) + 1
                        : listUnitGold.indexOf(value) + 3;
                    setUnit(target);
                    await fetchData({
                      type,
                      unit: target,
                      timeRange,
                    });
                  }}
                />
              </Stack>
            }
            changePriceIn={chart?.changePriceIn}
            changePriceOut={chart?.changePriceOut}
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
  return (
    <Card sx={sx}>
      <Typography variant="h6" sx={{ mb: 2, color: '#8c0302' }}>
        {title}
      </Typography>
      <Grid container spacing={1}>
        <Grid size={6}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Giá mua
          </Typography>
          <Typography variant="h6" color="error">
            {loading ? '...' : fCurrency(buy)}
          </Typography>
          <Typography
            sx={{ display: 'flex', alignItems: 'center' }}
            variant="caption"
            color={isIncreaseBuy > 0 ? 'success' : 'error'}
          >
            <Iconify
              icon={
                isIncreaseBuy > 0
                  ? 'solar:double-alt-arrow-up-bold-duotone'
                  : 'solar:double-alt-arrow-down-bold-duotone'
              }
            />
            {loading ? '...' : `${fCurrency(isIncreaseBuy)} (${fShortenNumber(persentBuy)})%`}
          </Typography>
        </Grid>
        <Grid size={6}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Giá bán
          </Typography>
          <Typography variant="h6" color="success">
            {loading ? '...' : fCurrency(sell)}
          </Typography>
          <Typography
            sx={{ display: 'flex', alignItems: 'center' }}
            variant="caption"
            color={isIncreaseSell > 0 ? 'success' : 'error'}
          >
            <Iconify
              icon={
                isIncreaseSell > 0
                  ? 'solar:double-alt-arrow-up-bold-duotone'
                  : 'solar:double-alt-arrow-down-bold-duotone'
              }
            />
            {loading ? '...' : `${fCurrency(isIncreaseSell)} (${fShortenNumber(persentSell)})%`}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
