import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import { Grid, Stack } from '@mui/material';
import Container from '@mui/material/Container';

import { CONFIG } from 'src/global-config';
import { useAppSelector } from 'src/lib/hooks';

import { MotionViewport } from 'src/components/animate';

import { TablePrice } from './components/table-price';
import { FloatLine, FloatDotIcon } from './components/svg-elements';

import type { TableData } from './components/table-price';
// ----------------------------------------------------------------------
const TABLE_DATA: TableData[] = [
  {
    name: 'Bạc thỏi Phú Quý 1kg',
    buy: 6210611,
    sell: 64026507,
  },
  {
    name: 'Bạc thỏi Phú Quý 1kg2',
    buy: 6210611,
    sell: 64026507,
  },
  {
    name: 'Bạc thỏi Phú Quý 1kg3',
    buy: 6210611,
    sell: 64026507,
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
  const mapToTableData = (items: any[]): TableData[] =>
    items.map((item) => ({
      name: item.productTypeName,
      buy: item.priceIn,
      sell: item.priceOut,
    }));

  const { gold, silver, loading } = useAppSelector((state) => state.landing);

  const silverTableData = mapToTableData(silver);
  const goldTableData = mapToTableData(gold);

  return (
    <Box
      component="section"
      sx={(theme) => ({
        mt: 5,
        position: 'relative',
        alignContent: 'center',
        ...theme.mixins.bgGradient({
          images: [`url(${CONFIG.assetsDir}/assets/background/footer-bg.jpg)`],
        }),
        zIndex: 1,
        width: '100%',
        height: 'fit-content',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      })}
      {...other}
    >
      <MotionViewport>
        {/* {renderLines()} */}

        <Container>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TablePrice
                icon={<img src="/assets/background/b.png" width="30" />}
                title="Giá bạc tham chiếu"
                data={silverTableData}
                href="/"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TablePrice
                icon={<img src="/assets/background/v.png" width="30" />}
                title="Giá vàng tham chiếu"
                data={goldTableData}
                href="/"
              />
            </Grid>
          </Grid>
          {/* </m.div> */}
        </Container>
      </MotionViewport>
    </Box>
  );
}
