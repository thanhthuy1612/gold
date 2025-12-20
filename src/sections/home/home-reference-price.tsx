import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import { Grid, Stack } from '@mui/material';
import Container from '@mui/material/Container';

import { varFade, MotionViewport } from 'src/components/animate';

import { TablePrice } from './components/table-price';
import { FloatLine, FloatDotIcon } from './components/svg-elements';

import type { TableData } from './components/table-price';
// ----------------------------------------------------------------------
const TABLE_DATA: TableData[] = [
  {
    name: 'Bạc thỏi Phú Quý 1kg',
    buy: 6210611,
    sell: 64026507,
    compareBuy: 2426661,
    compareSell: 2426661,
  },
  {
    name: 'Bạc thỏi Phú Quý 1kg2',
    buy: 6210611,
    sell: 64026507,
    compareBuy: -2426661,
    compareSell: -2426661,
  },
  {
    name: 'Bạc thỏi Phú Quý 1kg3',
    buy: 6210611,
    sell: 64026507,
    compareBuy: 2426661,
    compareSell: 2426661,
  },
];

// ----------------------------------------------------------------------
const renderLines = () => (
  <>
    <Stack
      spacing={8}
      alignItems="center"
      sx={{
        top: 64,
        left: 80,
        zIndex: 2,
        bottom: 64,
        position: 'absolute',
        transform: 'translateX(-50%)',
        '& span': { position: 'static', opacity: 0.12 },
      }}
    >
      <FloatDotIcon />
      <FloatDotIcon sx={{ opacity: 0.24, width: 14, height: 14 }} />
      <Box sx={{ flexGrow: 1 }} />
      <FloatDotIcon sx={{ opacity: 0.24, width: 14, height: 14 }} />
      <FloatDotIcon />
    </Stack>

    <FloatLine vertical sx={{ top: 0, left: 80 }} />
  </>
);

export function HomeReferencePrice({ sx, ...other }: BoxProps) {
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

        <Container sx={{ textAlign: 'center', background: '#8c0302' }}>
          <m.div variants={varFade('inUp')}>
            <Grid container spacing={3}>
              <Grid size={6}>
                <TablePrice title="Giá bạc tham chiếu" data={TABLE_DATA} href="/" />
              </Grid>
              <Grid size={6}>
                <TablePrice title="Giá bạc tham chiếu" data={TABLE_DATA} href="/" />
              </Grid>
            </Grid>
          </m.div>
        </Container>
      </MotionViewport>
    </Box>
  );
}
