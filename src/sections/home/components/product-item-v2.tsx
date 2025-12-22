import type { Theme, SxProps } from '@mui/material';
import type { IProductItem } from 'src/types/product';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { fabClasses } from '@mui/material/Fab';
import { Tooltip, Typography } from '@mui/material';

import { fNumber } from 'src/utils/format-number';

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
        top: 4,
        zIndex: 9,
        right: 4,
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        ...sx,
      }}
    >
      <Stack display="flex" flexDirection="column" alignItems="center">
        <img src="/logo/logo.png" width="80" height="auto" />
      </Stack>
    </Box>
  );

  const renderImage = () => (
    <Box
      sx={{
        position: 'relative',
        p: 1,
        overflow: 'hidden',
        height: '150px',
        backgroundColor: 'white',
      }}
    >
      <Image
        alt={name}
        src={img}
        sx={{ width: 'auto', height: '100%', objectFit: 'cover', borderRadius: 1.5 }}
      />
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
          Bán {fNumber(buy)} đ
        </Typography>
        <Typography variant="h5" noWrap sx={{ color: 'white' }}>
          Mua {fNumber(sell)} đ
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
