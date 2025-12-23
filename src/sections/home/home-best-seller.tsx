import type { BoxProps } from '@mui/material/Box';
import type { IProductItem } from 'src/types/product';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { MotionViewport } from 'src/components/animate';

import { ProductList } from './components/product-list';
import { FloatLine, FloatTriangleLeftIcon } from './components/svg-elements';

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
    img: '/assets/sp/b2.png',
  },
  {
    id: '3',
    name: 'Thần Tài Phú Quý 10 chỉ',
    buy: 154500000,
    sell: 15150000,
    img: '/assets/sp/b3.png',
  },
  {
    id: '4',
    name: 'Thần Tài Phú Quý 10 chỉ',
    buy: 154500000,
    sell: 15150000,
    img: '/assets/sp/b4.png',
  },
  {
    id: '5',
    name: 'Bạc Thanh Long Phú Quý 999 1KG',
    buy: 154500000,
    sell: 15150000,
    img: '/assets/sp/b5.png',
  },
  {
    id: '6',
    name: 'Thần Tài Phú Quý 10 chỉ',
    buy: 154500000,
    sell: 15150000,
    img: '/assets/sp/b6.png',
  },
];
const renderLines = () => (
  <>
    <FloatTriangleLeftIcon sx={{ top: 80, left: 80, opacity: 0.4 }} />
    <FloatLine vertical sx={{ top: 0, left: 80 }} />
  </>
);

export function HomeBestSeller({ sx, ...other }: BoxProps) {
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
            // component={m.div}
            // variants={varFade('inUp')}
            variant="h2"
            sx={{ color: '#8c0302', pb: 3, height: 'fit-content', textAlign: 'center' }}
          >
            Sản phẩm bán chạy trong tuần
          </Typography>

          {/* <m.div variants={varFade('inUp')}> */}
          <img src="/assets/background/landing2.jpg" width="100%" height="auto" />
          {/* </m.div> */}
          {/* <m.div variants={varFade('inUp')}> */}
          <ProductList data={_orders} />
          {/* </m.div> */}
        </Container>
      </MotionViewport>
    </Box>
  );
}
