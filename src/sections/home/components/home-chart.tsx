import type { JSX } from 'react';
import type { ChartOptions } from 'src/components/chart';
import type { Theme, SxProps } from '@mui/material/styles';

import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';

import { fDate, fTime } from 'src/utils/format-time';
import { fShortenNumber } from 'src/utils/format-number';

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

  const chartColors = chart.colors ?? [theme.palette.error.main, theme.palette.info.main];

  const getLable = () =>
    (chart.categories ?? []).map((item) => {
      if (!item) return '';
      switch (timeRange) {
        case ChartTimeRange._1D:
          return fTime(item, 'HH:MM');
        case ChartTimeRange._1M:
        case ChartTimeRange._7D:
          return fDate(item, 'DD/MM');
        case ChartTimeRange._3M:
        case ChartTimeRange._1Y:
          return `${fDate(item, 'DD/MM/YYYY')}`;
        default:
          return '';
      }
    });
  const chartOptions = useChart({
    colors: chartColors,
    xaxis: { categories: getLable() },
    ...chart.options,
  });

  return (
    <Card sx={sx}>
      <CardHeader title={title} subheader={subheader} action={action} sx={{ mb: 3 }} />

      <ChartLegends
        colors={chartOptions?.colors}
        labels={(chart.series[0] ?? [])?.data.map((item) => item.name)}
        values={[fShortenNumber(changePriceIn ?? 0), fShortenNumber(changePriceOut ?? 0)]}
        sx={{ px: 3, gap: 3 }}
      />

      <Chart
        type="area"
        series={chart?.series[0]?.data}
        options={chartOptions}
        slotProps={{ loading: { p: 2.5 } }}
        sx={{
          pl: 1,
          py: 2.5,
          pr: 2.5,
          height: 320,
        }}
      />
    </Card>
  );
}
