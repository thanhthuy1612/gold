import type { Theme, SxProps, BoxProps } from '@mui/material';

import { Box, Card, Grid, Button, Typography } from '@mui/material';

import { fNumber } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';

import { HomeChart } from './home-chart';

// ----------------------------------------------------------------------

export function HomePrice({ sx, ...other }: BoxProps) {
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
                title="Bạc thỏi Phú Quý 1kg"
                buy={6210611}
                sell={64026507}
                isIncreaseBuy={-2426661}
                isIncreaseSell={-2426661}
                sx={{ p: 2, mb: 3, backgroundColor: '#ffffff' }}
              />
              <CardPrice
                title="Giá Vàng Phú Quý 1 lượng"
                buy={6210611}
                sell={64026507}
                isIncreaseBuy={2426661}
                isIncreaseSell={2426661}
                sx={{ p: 2, mb: 3, backgroundColor: '#cedcff' }}
              />
            </Box>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{ background: '#b4292d !important' }}
                >
                  XEM BẢNG GIÁ BẠC
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{ background: '#ff8c1c !important' }}
                >
                  XEM BẢNG GIÁ VÀNG
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 7 }}>
          <HomeChart
            title="Giá Bạc Phú Quý"
            subheader=""
            chart={{
              categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
              series: [
                {
                  name: 'Tháng 11',
                  data: [
                    {
                      name: 'Mua vào',
                      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
                    },
                    {
                      name: 'Bán ra',
                      data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 77],
                    },
                  ],
                },
                {
                  name: 'Tháng 12',
                  data: [
                    {
                      name: 'Mua vào',
                      data: [51, 35, 41, 10, 91, 69, 62, 148, 91, 69, 62, 49],
                    },
                    {
                      name: 'Bán ra',
                      data: [56, 13, 34, 10, 77, 99, 88, 45, 77, 99, 88, 77],
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
};
export function CardPrice({ sx, title, buy, sell, isIncreaseBuy, isIncreaseSell }: CardPriceProps) {
  return (
    <Card sx={sx}>
      <Typography variant="h6" sx={{ mb: 2, color: '#8c0302' }}>
        {title}
      </Typography>
      <Grid container spacing={1}>
        <Grid size={6}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Giá mua
          </Typography>
          <Typography variant="body2" color="success">
            {fNumber(buy)}
          </Typography>
          <Typography
            sx={{ display: 'flex', alignItems: 'center' }}
            variant="body2"
            color={isIncreaseBuy > 0 ? 'success' : 'error'}
          >
            <Iconify
              icon={
                isIncreaseBuy > 0
                  ? 'solar:double-alt-arrow-up-bold-duotone'
                  : 'solar:double-alt-arrow-down-bold-duotone'
              }
            />
            {fNumber(isIncreaseBuy)}
          </Typography>
        </Grid>
        <Grid size={6}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Giá bán
          </Typography>
          <Typography variant="body2" color="success">
            {fNumber(sell)}
          </Typography>
          <Typography
            sx={{ display: 'flex', alignItems: 'center' }}
            variant="body2"
            color={isIncreaseSell > 0 ? 'success' : 'error'}
          >
            <Iconify
              icon={
                isIncreaseSell > 0
                  ? 'solar:double-alt-arrow-up-bold-duotone'
                  : 'solar:double-alt-arrow-down-bold-duotone'
              }
            />
            {fNumber(isIncreaseSell)}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
