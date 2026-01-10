'use client';

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

import { fNumber, fCurrency } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';
import { TableHeadCustom } from 'src/components/table';

const TABLE_HEAD: TableHeadCellProps[] = [
  {
    id: 'name',
    label: 'SẢN PHẨM',
    align: 'left',
    width: '50%',
    sx: { whiteSpace: 'nowrap', wordBreak: 'break-all' },
  },
  { id: 'buy', label: 'GIÁ MUA', align: 'center', width: '25%' },
  { id: 'sell', label: 'GIÁ BÁN', align: 'center', width: '25%' },
];

const TABLE_HEAD_MIN: TableHeadCellProps[] = [
  {
    id: 'name',
    label: 'SẢN PHẨM',
    align: 'left',
    width: '60%',
    sx: { whiteSpace: 'nowrap', wordBreak: 'break-all' },
  },
  { id: 'buy', label: 'GIÁ MUA', align: 'center', width: '20%' },
  { id: 'sell', label: 'GIÁ BÁN', align: 'center', width: '20%' },
];

// ----------------------------------------------------------------------
export type TableData = {
  name: string;
  buy: number;
  sell: number;
};

type Props = {
  title: React.ReactNode;
  onClick: () => void;
  data: TableData[];
  icon: any;
};
// ----------------------------------------------------------------------

export function TablePrice({ icon, title, onClick, data }: Props) {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <Stack sx={{ my: 3 }}>
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
          <Typography variant="h5" sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>
            {title}
          </Typography>
        </Stack>
        <Button
          onClick={onClick}
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
          headCells={isSmallScreen ? TABLE_HEAD_MIN : TABLE_HEAD}
        />

        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:not(:last-child)': { borderBottom: '8px #971519 solid' } }}
            >
              <TableCell sx={{ border: '2px solid white', fontWeight: '700' }}>
                {row.name}
              </TableCell>

              <TableCell
                align="right"
                sx={{
                  border: '2px solid white',
                  verticalAlign: 'middle',
                }}
              >
                <Box display="flex" alignItems="center" justifyContent="center" height="100%">
                  <Typography
                    variant="subtitle2"
                    color="#821818"
                    fontSize={isSmallScreen ? 14 : 16}
                  >
                    {isSmallScreen ? fNumber(row.buy) : fCurrency(row.buy)}
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
                <Box display="flex" alignItems="center" justifyContent="center" height="100%">
                  <Typography
                    variant="subtitle2"
                    color="#22c55e"
                    fontSize={isSmallScreen ? 14 : 16}
                  >
                    {isSmallScreen ? fNumber(row.sell) : fCurrency(row.sell)}
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
