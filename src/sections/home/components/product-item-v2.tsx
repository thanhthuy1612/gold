import type { Theme, SxProps } from '@mui/material';
import type { IProductItem } from 'src/types/product';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { fabClasses } from '@mui/material/Fab';
import { Tooltip, Typography, useMediaQuery } from '@mui/material';

import { fNumber, fCurrency } from 'src/utils/format-number';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  product: IProductItem;
  detailsHref: string;
  sx?: SxProps<Theme>;
};

export function ProductItemV2({ product, detailsHref, sx }: Props) {
  const { id, name, buy, sell, img } = product;
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
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
          variant={isSmallScreen ? 'subtitle1' : 'h5'}
          sx={{
            color: '#98130f',
            mb: 2,
            p: isSmallScreen ? 1 : 1.5,
            pt: isSmallScreen ? 0 : 1.5,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            lineHeight: '1.5',
            height: isSmallScreen ? 'calc(2 * 1.5em)' : 'calc(2.25 * 1.5em)',
          }}
        >
          {name}
        </Typography>
      </Tooltip>
      <Box
        sx={{
          background: '#fff',
          p: 1.5,
          borderTop: '2px solid #98130f',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          whiteSpace: 'nowrap',
          wordBreak: 'break-all',
        }}
      >
        <Stack direction="row" alignItems="center" gap={0} spacing={1}>
          <Iconify
            sx={{ color: '#3ab163', width: 20, height: 20 }}
            icon="solar:double-alt-arrow-right-bold-duotone"
          />

          <Typography
            sx={{
              minWidth: 48,
              color: '#3ab163',
              fontWeight: 700,
              fontFamily: 'serif',
            }}
            variant={isSmallScreen ? 'subtitle2' : 'h5'}
          >
            Bán
          </Typography>

          <Typography
            variant={isSmallScreen ? 'subtitle2' : 'h5'}
            sx={{
              color: '#3ab163',
              fontWeight: 700,
              fontFamily: 'serif',
              whiteSpace: 'nowrap',
              wordBreak: 'break-all',
            }}
          >
            {isSmallScreen ? fNumber(buy) : fCurrency(buy)}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" gap={0} spacing={1}>
          <Iconify
            sx={{ color: '#9a0f15', width: 20, height: 20, transform: 'rotate(180deg)' }}
            icon="solar:double-alt-arrow-right-bold-duotone"
          />

          <Typography
            sx={{
              minWidth: 48,
              color: '#9a0f15',
              fontWeight: 700,
              fontFamily: 'serif',
            }}
            variant={isSmallScreen ? 'subtitle2' : 'h5'}
          >
            Mua
          </Typography>

          <Typography
            variant={isSmallScreen ? 'subtitle2' : 'h5'}
            sx={{
              color: '#9a0f15',
              fontWeight: 700,
              fontFamily: 'serif',
              whiteSpace: 'nowrap',
              wordBreak: 'break-all',
            }}
          >
            {isSmallScreen ? fNumber(sell) : fCurrency(sell)}
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
