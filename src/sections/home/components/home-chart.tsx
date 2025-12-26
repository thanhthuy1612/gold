'use client';

import type { JSX } from 'react';
import type { ChartOptions } from 'src/components/chart';
import type { Theme, SxProps } from '@mui/material/styles';

import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import { Stack, useMediaQuery } from '@mui/material';

import { fCurrency } from 'src/utils/format-number';
import { fDate, fTime } from 'src/utils/format-time';

import { AnimateLogoZoom } from 'src/components/animate';
import { Chart, useChart, ChartLegends } from 'src/components/chart';

import { ChartTimeRange } from 'src/types/landing';

// ----------------------------------------------------------------------

type Props = {
  title?: React.ReactNode;
  action?: JSX.Element;
  changePriceIn?: number;
  changePriceOut?: number;

  subheader?: string;
  timeRange?: ChartTimeRange;
  chart: {
    colors?: string[];
    categories?: Date[];
    series: {
      data: {
        name: string;
        data: number[];
      }[];
    }[];
    options?: ChartOptions;
  };
  sx?: SxProps<Theme>;
  loading: boolean;
};

export function HomeChart({
  action,
  loading,
  changePriceIn,
  changePriceOut,
  title,
  subheader,
  chart,
  sx,
  timeRange,
}: Props) {
  const theme = useTheme();

  const chartColors = chart.colors ?? [theme.palette.error.main, theme.palette.success.main];

  const getLable = () =>
    (chart.categories ?? []).map((item) => {
      console.log(item);
      if (!item) return '';
      switch (timeRange) {
        case ChartTimeRange._1D:
          return fTime(item, 'HH:mm');
        case ChartTimeRange._1M:
        case ChartTimeRange._7D:
          return fDate(item, 'DD/MM/YYYY HH:mm:ss');
        case ChartTimeRange._3M:
        case ChartTimeRange._1Y:
          return `${fDate(item, 'DD/MM/YYYY HH:mm:ss')}`;
        default:
          return '';
      }
    });

  const chartOptions = useChart({
    colors: chartColors,
    xaxis: {
      categories: getLable(),
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => fCurrency(value),
      },
    },
    tooltip: {
      enabled: true, // Ensure tooltip is enabled
    },
    ...chart.options,
  });

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Card sx={sx}>
      <CardHeader
        title={title}
        subheader={subheader}
        action={action}
        sx={{
          mb: 3,
          height: '100%',
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          gap: 3,
          flexWrap: 'wrap',
        }}
      />

      <>
        {loading ? (
          <Stack
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            sx={{ minHeight: '347.5px' }}
          >
            <AnimateLogoZoom />
          </Stack>
        ) : (
          <>
            <Chart
              type="area"
              series={chart?.series[0]?.data}
              options={chartOptions}
              slotProps={{ loading: { p: 2.5 } }}
              sx={{
                pl: 1,
                py: 2.5,
                pr: 1,
                height: 320,
              }}
            />
            <Stack display="flex" justifyContent="center" flexDirection="row">
              <ChartLegends
                colors={chartOptions?.colors}
                labels={(chart.series[0] ?? [])?.data.map((item) => item.name)}
                // values={[fCurrency(changePriceIn ?? 0), fCurrency(changePriceOut ?? 0)]}
                sx={{ px: 3, gap: 3, mb: 5 }}
              />
            </Stack>
          </>
        )}
      </>
    </Card>
  );
}
