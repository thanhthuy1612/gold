import type { TableHeadCellProps } from 'src/components/table';

import {
  Box,
  Table,
  Stack,
  Button,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  useMediaQuery,
} from '@mui/material';

import { fCurrency, fNumber } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';
import { TableHeadCustom } from 'src/components/table';

const TABLE_HEAD: TableHeadCellProps[] = [
  { id: 'name', label: 'Tên' },
  { id: 'buy', label: 'Giá bán', align: 'center' },
  { id: 'sell', label: 'Giá mua', align: 'center' },
];

// ----------------------------------------------------------------------
export type TableData = {
  name: string;
  buy: number;
  sell: number;
};

type Props = {
  title: string;
  href: string;
  data: TableData[];
  icon: any;
};
// ----------------------------------------------------------------------

export function TablePrice({ icon, title, href, data }: Props) {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <Stack sx={{ my: 8 }}>
      <Stack
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
      >
        <Stack display="flex" flexDirection="row" gap={1}>
          {icon}
          <Typography variant="h5" sx={{ color: 'white', display: 'flex' }}>
            {title}
          </Typography>
        </Stack>
        <Button
          href={href}
          size="small"
          variant="contained"
          endIcon={<Iconify icon="eva:diagonal-arrow-right-up-fill" />}
          sx={{
            background: 'white !important',
            color: 'black',
            borderRadius: 0,
          }}
        >
          {isSmallScreen ? 'CHI TIẾT' : 'XEM CHI TIẾT'}
        </Button>
      </Stack>
      <Table sx={{ background: 'white', mt: 2 }}>
        <TableHeadCustom
          sx={{ background: '#971519', color: 'white', border: '2px solid white' }}
          headCells={TABLE_HEAD}
        />

        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:not(:last-child)': { borderBottom: '8px #971519 solid' } }}
            >
              <TableCell sx={{ border: '2px solid white' }}>
                {row.name}
              </TableCell>

              <TableCell
                align="right"
                sx={{
                  border: '2px solid white',
                  verticalAlign: 'middle',
                }}
              >
                <Box
                  display="flex"
                  alignItems="left"
                  justifyContent="flex-end"
                  height="100%"
                >
                  <Typography variant="subtitle2" color="success.main" fontSize={16}>
                    {fCurrency(row.buy)}
                  </Typography>
                </Box>
              </TableCell>

              <TableCell
                align="right"
                sx={{
                  border: '2px solid white',
                  verticalAlign: 'middle',
                }}
              >
                <Box
                  display="flex"
                  alignItems="left"
                  justifyContent="flex-end"
                  height="100%"
                >
                  <Typography variant="subtitle2" color="error" fontSize={16}>
                    {fCurrency(row.sell)}
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
}
