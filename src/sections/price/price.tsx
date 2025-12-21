'use client';

// ----------------------------------------------------------------------

import { Table, Stack, TableRow, TableBody, TableCell, Typography } from '@mui/material';

import { fNumber } from 'src/utils/format-number';

import { Logo } from 'src/components/logo';
import { TableHeadCustom, type TableHeadCellProps } from 'src/components/table';

const TABLE_HEAD: TableHeadCellProps[] = [
  { id: 'name', label: 'SẢN PHẨM' },
  { id: 'cost', label: 'ĐƠN VỊ' },
  { id: 'buy', label: 'GIÁ MUA VÀO', align: 'right' },
  { id: 'sell', label: 'GIÁ BÁN RA', align: 'right' },
];

export type TableData = {
  name: string;
  buy?: number;
  sell?: number;
  cost: string;
  description?: string;
};

export type PriceData = {
  title: string;
  data: TableData[];
};

const TABLE_DATA: PriceData[] = [
  {
    title: 'BẠC THƯƠNG HIỆU PHÚ QUÝ',
    data: [
      {
        name: 'Bạc miếng Phú Quý 999 1 lượng',
        buy: 2198000,
        sell: 2266000,
        cost: 'VNĐ/LƯỢNG',
      },
      {
        name: 'Bạc thỏi phú quý 999 10 luợng, 5 lượng',
        buy: 2198000,
        sell: 2266000,
        cost: 'VNĐ/LƯỢNG',
      },
      {
        name: 'Đồng bạc mỹ nghệ phú quý 999',
        buy: 2198000,
        sell: 2266000,
        cost: 'VNĐ/LƯỢNG',
      },
      {
        name: 'Bạc thỏi phú quý 999 1kilo',
        buy: 6210611,
        sell: 64026507,
        cost: 'VNĐ/KG',
      },
    ],
  },
  {
    title: 'BẠC THƯƠNG HIỆU KHÁC',
    data: [
      {
        name: 'BẠC 999 TRÊN 500 LƯỢNG',
        buy: 1915800,
        cost: 'VNĐ/LƯỢNG',
        description: 'MIẾNG - THANH - THỎI',
      },
      {
        name: 'BẠC 999 DƯỚI 500 LƯỢNG',
        buy: 1860000,
        cost: 'VNĐ/LƯỢNG',
        description: 'MIẾNG - THANH - THỎI',
      },
    ],
  },
];

export function Price() {
  const renderTable = (item: TableData) => (
    <TableRow
      key={item.name}
      sx={{ width: '100%', '&:not(:last-child)': { borderBottom: '8px #971519 solid' } }}
    >
      <TableCell sx={{ border: '2px solid white' }}>{item.name}</TableCell>
      <TableCell sx={{ border: '2px solid white' }}>{item.cost}</TableCell>
      <TableCell align="right" sx={{ border: '2px solid white' }}>
        <Typography variant="body1" color="success">
          {fNumber(item.buy)}
        </Typography>
      </TableCell>
      <TableCell align="right" sx={{ border: '2px solid white' }}>
        <Typography variant="body1" color="success">
          {item?.sell ? fNumber(item.sell) : <Logo />}
        </Typography>
      </TableCell>
    </TableRow>
  );

  const renderHeader = (title: string) => (
    <Stack sx={{ background: '#821818', width: '100%' }}>
      <Typography>{title}</Typography>
      <></>
    </Stack>
  );
  return (
    <>
      {TABLE_DATA.map((row, index) => (
        <Stack key={row.title}>
          {renderHeader(row.title)}
          <Table sx={{ background: 'white' }}>
            <TableHeadCustom
              sx={{ background: '#821818', color: 'white', border: '2px solid white' }}
              headCells={TABLE_HEAD}
            />

            <TableBody>{row.data.map((item) => renderTable(item))}</TableBody>
          </Table>
        </Stack>
      ))}
    </>
  );
}
