import type { BoxProps } from '@mui/material/Box';

import React from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { varFade, MotionViewport } from 'src/components/animate';

import { HomePrice } from './components/home-price';
import { CircleSvg, FloatLine, FloatPlusIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const renderLines = () => (
  <>
    <FloatPlusIcon sx={{ top: 72, left: 72 }} />
    <FloatPlusIcon sx={{ bottom: 72, left: 72 }} />
    <FloatLine sx={{ top: 80, left: 0 }} />
    <FloatLine sx={{ bottom: 80, left: 0 }} />
    <FloatLine vertical sx={{ top: 0, left: 80 }} />
  </>
);

export function HomePriceContainer({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        {
          overflow: 'hidden',
          position: 'relative',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <MotionViewport>
        {renderLines()}
        <m.div variants={varFade('inUp')}>
          <img src="/assets/background/landing1.jpg" width="100%" height="auto" />
        </m.div>
        <Container sx={{ position: 'relative' }}>
          <CircleSvg variants={varFade('in')} sx={{ display: { xs: 'none', md: 'block' } }} />
          <m.div variants={varFade('inUp')}>
            <HomePrice />
          </m.div>
        </Container>
      </MotionViewport>
    </Box>
  );
}

// ----------------------------------------------------------------------
