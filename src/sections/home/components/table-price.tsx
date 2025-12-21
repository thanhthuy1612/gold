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
} from '@mui/material';

import { fCurrency } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';
import { TableHeadCustom } from 'src/components/table';

const TABLE_HEAD: TableHeadCellProps[] = [
  { id: 'name', label: 'Tên' },
  { id: 'buy', label: 'Giá bán', align: 'left' },
  { id: 'sell', label: 'Giá mua', align: 'left' },
];

// ----------------------------------------------------------------------
export type TableData = {
  name: string;
  buy: number;
  sell: number;
  compareBuy: number;
  compareSell: number;
};

type Props = {
  title: string;
  href: string;
  data: TableData[];
  icon: any;
};
// ----------------------------------------------------------------------

export function TablePrice({ icon, title, href, data }: Props) {
  return (
    <Stack sx={{ my: 8 }}>
      <Stack
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
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
          sx={{ background: 'white !important', color: 'black', borderRadius: 0 }}
        >
          XEM CHI TIẾT
          <Iconify sx={{ ml: 1 }} icon="eva:diagonal-arrow-right-up-fill" />
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
              <TableCell sx={{ border: '2px solid white' }}>{row.name}</TableCell>
              <TableCell align="right" sx={{ border: '2px solid white' }}>
                <Box display="flex" flexDirection="column" alignItems="flex-start">
                  <Typography variant="body1" color="success">
                    {fCurrency(row.buy)}
                  </Typography>
                  <Typography
                    sx={{ display: 'flex', alignItems: 'center' }}
                    variant="body2"
                    color={row.compareBuy > 0 ? 'success' : 'error'}
                  >
                    <Iconify
                      icon={
                        row.compareBuy > 0
                          ? 'solar:double-alt-arrow-up-bold-duotone'
                          : 'solar:double-alt-arrow-down-bold-duotone'
                      }
                    />
                    {fCurrency(row.compareBuy)}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="right" sx={{ border: '2px solid white' }}>
                <Box display="flex" flexDirection="column" alignItems="flex-start">
                  <Typography variant="body1" color="success">
                    {fCurrency(row.sell)}
                  </Typography>
                  <Typography
                    sx={{ display: 'flex', alignItems: 'center' }}
                    variant="body2"
                    color={row.compareSell > 0 ? 'success' : 'error'}
                  >
                    <Iconify
                      icon={
                        row.compareSell > 0
                          ? 'solar:double-alt-arrow-up-bold-duotone'
                          : 'solar:double-alt-arrow-down-bold-duotone'
                      }
                    />
                    {fCurrency(row.compareSell)}
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
