'use client';

import Stack from '@mui/material/Stack';

import { BackToTopButton } from 'src/components/animate/back-to-top-button';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeInfo } from '../home-info';
import { HomeHero } from '../home-hero';
import { HomeListProduct } from '../home-list-product';
import { HomePriceContainer } from '../home-price-container';
import { HomeReferencePrice } from '../home-reference-price';

// ----------------------------------------------------------------------

export function HomeView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={[(theme) => ({ position: 'fixed', zIndex: theme.zIndex.appBar + 1 })]}
      />

      <BackToTopButton />

      <BackToTopButton />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <HomePriceContainer />
        {/* <HomeBestSeller /> */}
        <HomeListProduct />
        <HomeReferencePrice />
        <HomeInfo />
        <HomeHero />
      </Stack>
    </>
  );
}
