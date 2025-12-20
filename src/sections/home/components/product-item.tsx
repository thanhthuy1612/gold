import type { Theme, SxProps } from '@mui/material';
import type { IProductItem } from 'src/types/product';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { fabClasses } from '@mui/material/Fab';
import { Tooltip, Typography } from '@mui/material';

import { fCurrency } from 'src/utils/format-number';

import { Label } from 'src/components/label';
import { Image } from 'src/components/image';

// ----------------------------------------------------------------------

type Props = {
  product: IProductItem;
  detailsHref: string;
  sx?: SxProps<Theme>;
};

export function ProductItem({ product, detailsHref, sx }: Props) {
  const { id, name, buy, sell, img } = product;

  const renderLabels = () => (
    <Box
      sx={{
        gap: 1,
        top: 16,
        zIndex: 9,
        right: 16,
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        ...sx,
      }}
    >
      <Label
        variant="filled"
        sx={{
          background: 'linear-gradient(-90deg,#f0b05c 0%, #fff9b8 50%, #f0b05c 100%)',
          color: '#98130f',
          fontSize: 20,
          px: 4,
          py: 2,
        }}
      >
        Bán chạy
      </Label>
    </Box>
  );

  const renderImage = () => (
    <Box sx={{ position: 'relative', p: 1 }}>
      <Image alt={name} src={img} ratio="1/1" sx={{ borderRadius: 1.5, opacity: 0.95 }} />
    </Box>
  );

  const renderContent = () => (
    <Stack sx={{ p: 3, pts: 2 }}>
      <Tooltip title={name}>
        <Typography variant="h4" noWrap sx={{ color: '#98130f', mb: 2 }}>
          {name}
        </Typography>
      </Tooltip>
      <Typography variant="h5" noWrap color="success" sx={{ mb: 0.5 }}>
        Bán {fCurrency(buy)}
      </Typography>
      <Typography variant="h5" noWrap>
        Mua {fCurrency(sell)}
      </Typography>
    </Stack>
  );

  return (
    <Card
      sx={{
        border: '2px solid #98130f',
        '&:hover': {
          [`& .${fabClasses.root}`]: { opacity: 1, transform: 'scale(1)' },
        },
      }}
    >
      {renderLabels()}
      {renderImage()}
      {renderContent()}
    </Card>
  );
}
