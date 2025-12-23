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
      <Box sx={{
        background: '#fff',
        p: 3,
        borderTop: '2px solid #98130f',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <Box
            component="svg"
            sx={{ width: 28, height: 28 }}
            viewBox="0 0 24 24"
          >
            <path
              d="M2,5 L10,12 L2,19 L7,19 L15,12 L7,5 Z M11,5 L19,12 L11,19 L16,19 L24,12 L16,5 Z"
              fill="#3ab163"
            />
          </Box>

          <Typography
            variant="h5"
            sx={{
              color: '#3ab163',
              fontWeight: 700,
              fontFamily: 'serif',
            }}
          >
            Bán {fNumber(buy)}đ
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            component="svg"
            sx={{ width: 28, height: 28 }}
            viewBox="0 0 24 24"
          >
            <path
              d="M22,5 L14,12 L22,19 L17,19 L9,12 L17,5 Z M13,5 L5,12 L13,19 L8,19 L0,12 L8,5 Z"
              fill="#9a0f15"
            />
          </Box>

          <Typography
            variant="h5"
            sx={{
              color: '#9a0f15',
              fontWeight: 700,
              fontFamily: 'serif',
            }}
          >
            Mua {fNumber(sell)}đ
          </Typography>
        </Stack>
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
