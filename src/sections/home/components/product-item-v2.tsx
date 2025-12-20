import type { Theme, SxProps } from '@mui/material';
import type { IProductItem } from 'src/types/product';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { fabClasses } from '@mui/material/Fab';
import { Tooltip, Typography } from '@mui/material';

import { fCurrency } from 'src/utils/format-number';

import { Logo } from 'src/components/logo';
import { Image } from 'src/components/image';

// ----------------------------------------------------------------------

type Props = {
  product: IProductItem;
  detailsHref: string;
  sx?: SxProps<Theme>;
};

export function ProductItemV2({ product, detailsHref, sx }: Props) {
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
      <Stack display="flex" flexDirection="column" alignItems="center">
        <Logo />
        <Typography
          variant="h6"
          sx={{
            color: 'transparent',
            backgroundImage: 'linear-gradient(180deg, #fcf0ad, #d8a45b)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            fontWeight: '700',
          }}
        >
          TÀI LỘC
        </Typography>
      </Stack>
    </Box>
  );

  const renderImage = () => (
    <Box sx={{ position: 'relative', p: 1 }}>
      <Image alt={name} src={img} ratio="1/1" sx={{ borderRadius: 1.5, opacity: 0.95 }} />
    </Box>
  );

  const renderContent = () => (
    <Stack>
      <Tooltip title={name}>
        <Typography
          variant="h5"
          sx={{
            color: '#98130f',
            mb: 2,
            p: 3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            lineHeight: '1.5',
            height: 'calc(3 * 1.5em)',
          }}
        >
          {name}
        </Typography>
      </Tooltip>
      <Box sx={{ background: '#98130f', p: 3, pts: 2 }}>
        <Typography
          variant="h5"
          noWrap
          color="success"
          sx={{
            color: 'transparent',
            backgroundImage: 'linear-gradient(180deg, #fcf0ad, #d8a45b)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            fontWeight: '700',
            mb: 0.5,
          }}
        >
          Bán {fCurrency(buy)}
        </Typography>
        <Typography variant="h5" noWrap sx={{ color: 'white' }}>
          Mua {fCurrency(sell)}
        </Typography>
      </Box>
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
