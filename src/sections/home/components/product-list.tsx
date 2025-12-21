import type { IProductItem } from 'src/types/product';

import Box from '@mui/material/Box';

import { Carousel, useCarousel, CarouselArrowFloatButtons } from 'src/components/carousel';

import { ProductItem } from './product-item';

// ----------------------------------------------------------------------

type Props = {
  data: IProductItem[];
};

export function ProductList({ data }: Props) {
  const carousel = useCarousel({
    loop: true,
    dragFree: true,
    slideSpacing: '20px',
    slidesToShow: { xs: 1, sm: 2, md: '36%' },
  });

  return (
    <Box sx={{ position: 'relative', my: 5 }}>
      <Carousel carousel={carousel}>
        {data.map((product) => (
          <ProductItem key={product.id} product={product} detailsHref="" />
        ))}
      </Carousel>

      <CarouselArrowFloatButtons
        {...carousel.arrows}
        options={carousel.options}
        sx={{
          color: '#98130f',
          backgroundColor: '#fff',
          border: '2px solid #98130f',
          '&:hover': {
            backgroundColor: '#98130f',
            color: '#fff',
          },
        }}
      />
    </Box>
  );
}
