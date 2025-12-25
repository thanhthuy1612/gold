import type { BoxProps } from '@mui/material/Box';
import type { IProductItem } from 'src/types/product';

import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Stack, useMediaQuery } from '@mui/material';

import { mapProductApiToItem } from 'src/utils/map-products';

import { homeService } from 'src/services/landing.services';

import { MotionViewport } from 'src/components/animate';

import { ProductItemV2 } from './components/product-item-v2';
import { ProductItemSkeleton } from './components/product-item-skeleton';
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
  // const renderList = () =>
  //   _orders.map((product) => <ProductItemV2 key={product.id} product={product} detailsHref="" />);
  const [products, setProducts] = useState<IProductItem[]>([]);
  const [loading, setLoading] = useState(true);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await homeService.products();

        const raw = res.data;

        const merged = [...(raw?.bacTichLuy || []), ...(raw?.bacMyNghe || [])].map(
          mapProductApiToItem
        );

        setProducts(merged);
      } catch (error) {
        console.error('Fetch products failed:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  const renderList = () => {
    if (loading) {
      return Array.from({ length: 10 }).map((_, i) => <ProductItemSkeleton key={i} />);
    }

    return products.map((product) => (
      <ProductItemV2 key={product.id} product={product} detailsHref={`/san-pham/${product.id}`} />
    ));
  };
  return (
    <Box
      component="section"
      sx={[
        () => ({
          pt: 3,
          position: 'relative',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <MotionViewport>
        {/* {renderLines()} */}

        <Container sx={{ textAlign: 'center' }}>
          {/* <m.div variants={varFade('inUp')}> */}
          <img src="/assets/background/landing4.jpg" width="100%" height="auto" />
          {/* </m.div> */}
          <Typography
            // component={m.div}
            // variants={varFade('inUp')}
            variant={isSmallScreen ? 'h3' : 'h2'}
            sx={{ color: '#8c0302', pb: 3, mt: 5, height: 'fit-content', textAlign: 'center' }}
          >
            Danh sách sản phẩm
          </Typography>
          {/* <m.div variants={varFade('inUp')}> */}
          <Box
            sx={[
              () => ({
                gap: { xs: 0.5, md: 2 },
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(2, 1fr)',
                  sm: 'repeat(3, 1fr)',
                  md: 'repeat(4, 1fr)',
                  lg: 'repeat(5, 1fr)',
                },
              }),
            ]}
            {...other}
          >
            {renderList()}
          </Box>
          {/* </m.div> */}
        </Container>
      </MotionViewport>
    </Box>
  );
}
