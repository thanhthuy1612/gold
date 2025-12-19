import type { BoxProps } from '@mui/material/Box';
import type { IProductItem } from 'src/types/product';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

import { ProductItem } from './components/product-item';
import { ProductList } from './components/product-list';
import { FloatLine, FloatTriangleLeftIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const _orders: IProductItem[] = [
  { id: '1', name: 'Thần Tài Phú Quý 10 chỉ', buy: 154500000, sell: 15150000, img: '/' },
  { id: '2', name: 'Bạc Thanh Long Phú Quý 999 1KG', buy: 154500000, sell: 15150000, img: '/' },
  { id: '3', name: 'Thần Tài Phú Quý 10 chỉ', buy: 154500000, sell: 15150000, img: '/' },
  { id: '4', name: 'Thần Tài Phú Quý 10 chỉ', buy: 154500000, sell: 15150000, img: '/' },
  { id: '5', name: 'Bạc Thanh Long Phú Quý 999 1KG', buy: 154500000, sell: 15150000, img: '/' },
  { id: '6', name: 'Thần Tài Phú Quý 10 chỉ', buy: 154500000, sell: 15150000, img: '/' },
];
const renderLines = () => (
  <>
    <FloatTriangleLeftIcon sx={{ top: 80, left: 80, opacity: 0.4 }} />
    <FloatLine vertical sx={{ top: 0, left: 80 }} />
  </>
);

export function HomeBestSeller({ sx, ...other }: BoxProps) {
  const renderList = () =>
    _orders.map((product) => <ProductItem key={product.id} product={product} detailsHref="" />);
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
            component={m.div}
            variants={varFade('inUp')}
            variant="h2"
            sx={{ color: '#8c0302', pb: 3, height: 'fit-content', textAlign: 'center' }}
          >
            Sản phẩm bán chạy trong tuần
          </Typography>

          <m.div variants={varFade('inUp')}>
            <img src="/assets/background/landing2.jpg" width="100%" height="auto" />
          </m.div>
          {/* <Box
            sx={[
              () => ({
                mt: 5,
                gap: 3,
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                  lg: 'repeat(4, 1fr)',
                },
              }),
            ]}
            {...other}
          >
            {renderList()}
          </Box> */}
          <m.div variants={varFade('inUp')}>
            <ProductList data={_orders} />
          </m.div>
        </Container>
      </MotionViewport>
    </Box>
  );
}
