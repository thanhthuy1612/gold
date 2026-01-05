import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid, Stack, Button } from '@mui/material';

import { paths } from 'src/routes/paths';

import { MotionViewport } from 'src/components/animate';

import { FloatLine, FloatTriangleDownIcon } from './components/svg-elements';

// ----------------------------------------------------------------------
const renderLines = () => (
  <>
    <Stack
      spacing={8}
      sx={{
        top: 64,
        left: 80,
        alignItems: 'center',
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

export function HomeInfo({ sx, ...other }: BoxProps) {
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
        {/* {renderLines()} */}

        <Container sx={{ textAlign: 'center' }}>
          <Typography
            // component={m.div}
            // variants={varFade('inUp')}
            variant="h2"
            sx={{ color: '#8c0302', pb: 3, height: 'fit-content', textAlign: 'center' }}
          >
            Tin tức
          </Typography>

          {/* <m.div variants={varFade('inUp')}> */}
          <Grid container spacing={2}>
            <Grid size={4}>
              <img src="/assets/background/webp/info1.webp" width="100%" height="auto" />
            </Grid>
            <Grid size={4}>
              <img src="/assets/background/webp/info2.webp" width="100%" height="auto" />
            </Grid>
            <Grid size={4}>
              <img src="/assets/background/webp/info3.webp" width="100%" height="auto" />
            </Grid>
          </Grid>
          <Button
            size="large"
            variant="outlined"
            sx={{ border: '2px #8c0302 solid', color: '#8c0302', my: 5 }}
            href={paths.news}
          >
            Xem tất cả
          </Button>
          {/* </m.div> */}
        </Container>
      </MotionViewport>
    </Box>
  );
}
