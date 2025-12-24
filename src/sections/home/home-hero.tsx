import type { BoxProps } from '@mui/material/Box';

import { useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

// const smKey: Breakpoint = 'sm';
// const mdKey: Breakpoint = 'md';
// const lgKey: Breakpoint = 'lg';

// const motionProps: MotionProps = {
//   variants: varFade('inUp', { distance: 24 }),
// };

export function HomeHero({ sx, ...other }: BoxProps) {
  const scrollProgress = useScrollPercent();

  return (
    <Box
      ref={scrollProgress.elementRef}
      component="section"
      sx={[
        () => ({
          position: 'relative',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container component={MotionContainer} sx={{ textAlign: 'center' }}>
        {/* <m.div variants={varFade('inUp')}> */}
        <img src="/assets/background/info4.jpg" width="100%" height="auto" />
        {/* </m.div> */}
      </Container>

      {/* <HeroBackground /> */}
    </Box>
  );
}

// ----------------------------------------------------------------------

function useScrollPercent() {
  const elementRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);

  useMotionValueEvent(scrollY, 'change', (scrollHeight) => {
    let heroHeight = 0;

    if (elementRef.current) {
      heroHeight = elementRef.current.offsetHeight;
    }

    const scrollPercent = Math.floor((scrollHeight / heroHeight) * 100);

    if (scrollPercent >= 100) {
      setPercent(100);
    } else {
      setPercent(Math.floor(scrollPercent));
    }
  });

  return { elementRef, percent, scrollY };
}
