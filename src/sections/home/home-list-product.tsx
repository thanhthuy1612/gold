import type { BoxProps } from '@mui/material/Box';
import type { IProductItem } from 'src/types/product';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

import { ProductItemV2 } from './components/product-item-v2';
import { FloatLine, FloatTriangleDownIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const _orders: IProductItem[] = [
  {
    id: '1',
    name: 'Thần Tài Phú Quý 10 chỉ',
    buy: 154500000,
    sell: 15150000,
    img: '/assets/sp/b1.png',
  },
  {
    id: '2',
    name: 'Bạc Thanh Long Phú Quý 999 1KG',
    buy: 154500000,
    sell: 15150000,
    img: '/assets/sp/b1.png',
  },
  {
    id: '3',
    name: 'Thần Tài Phú Quý 10 chỉ',
    buy: 154500000,
    sell: 15150000,
    img: '/assets/sp/b1.png',
  },
  {
    id: '4',
    name: 'Thần Tài Phú Quý 10 chỉ',
    buy: 154500000,
    sell: 15150000,
    img: '/assets/sp/b1.png',
  },
  {
    id: '5',
    name: 'Bạc Thanh Long Phú Quý 999 1KG',
    buy: 154500000,
    sell: 15150000,
    img: '/assets/sp/b1.png',
  },
  {
    id: '6',
    name: 'Thần Tài Phú Quý 10 chỉ',
    buy: 154500000,
    sell: 15150000,
    img: '/assets/sp/b1.png',
  },
];
const renderLines = () => (
  <>
    <Stack
      spacing={8}
      alignItems="center"
      sx={{
        top: 64,
        left: 80,
        position: 'absolute',
        transform: 'translateX(-50%)',
      }}
    >
      <FloatTriangleDownIcon sx={{ position: 'static', opacity: 0.12 }} />
      <FloatTriangleDownIcon
        sx={{
          width: 30,
          height: 15,
          opacity: 0.24,
          position: 'static',
        }}
      />
    </Stack>

    <FloatLine vertical sx={{ top: 0, left: 80 }} />
  </>
);

export function HomeListProduct({ sx, ...other }: BoxProps) {
  const renderList = () =>
    _orders.map((product) => <ProductItemV2 key={product.id} product={product} detailsHref="" />);

  return (
    <Box
      component="section"
      sx={[
        () => ({
          pt: 5,
          position: 'relative',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <MotionViewport>
        {renderLines()}

        <Container sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{ color: '#8c0302', pb: 3, height: 'fit-content', textAlign: 'center' }}
          >
            Danh sách sản phẩm
          </Typography>
          <m.div variants={varFade('inUp')}>
            <Box
              sx={[
                () => ({
                  gap: 3,
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(3, 1fr)',
                    md: 'repeat(4, 1fr)',
                    lg: 'repeat(4, 1fr)',
                  },
                }),
              ]}
              {...other}
            >
              {renderList()}
            </Box>
          </m.div>
        </Container>
      </MotionViewport>
    </Box>
  );
}
