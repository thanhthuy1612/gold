'use client';

// ----------------------------------------------------------------------

import {
  Table,
  Stack,
  TableRow,
  useTheme,
  TableBody,
  TableCell,
  Typography,
  useMediaQuery,
} from '@mui/material';

import { fNumber } from 'src/utils/format-number';

import { Logo } from 'src/components/logo';
import { TableHeadCustom, type TableHeadCellProps } from 'src/components/table';

const TABLE_HEAD: TableHeadCellProps[] = [
  { id: 'name', label: 'SẢN PHẨM', align: 'center', width: '35%' },
  { id: 'cost', label: 'ĐƠN VỊ', width: '15%' },
  { id: 'buy', label: 'GIÁ MUA VÀO', align: 'right', width: '25%' },
  { id: 'sell', label: 'GIÁ BÁN RA', align: 'right', width: '25%' },
];

const TABLE_HEAD_MIN: TableHeadCellProps[] = [
  { id: 'name', label: 'SẢN PHẨM', align: 'center', width: '35%' },
  { id: 'buy', label: 'GIÁ MUA VÀO', align: 'right', width: '25%' },
  { id: 'sell', label: 'GIÁ BÁN RA', align: 'right', width: '25%' },
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
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const renderTable = (item: TableData) => (
    <TableRow key={item.name}>
      <TableCell sx={{ border: '1px #821818 solid !important', color: '#821818' }}>
        <Typography variant="h5">{item.name}</Typography>
        {item?.description && <Typography variant="caption">({item.description})</Typography>}
      </TableCell>
      {!isSmallScreen && (
        <TableCell sx={{ border: '1px #821818 solid !important', color: '#821818' }}>
          {item.cost}
        </TableCell>
      )}
      <TableCell align="right" sx={{ border: '1px #821818 solid !important', color: '#821818' }}>
        <Typography variant="subtitle1">{fNumber(item.buy)}</Typography>
        {isSmallScreen && <Typography variant="caption">({item.cost})</Typography>}
      </TableCell>
      <TableCell align="right" sx={{ border: '1px #821818 solid !important', color: '#821818' }}>
        <Typography variant="subtitle1">{item?.sell ? fNumber(item.sell) : <Logo />}</Typography>
        {isSmallScreen && <Typography variant="caption">({item.cost})</Typography>}
      </TableCell>
    </TableRow>
  );

  const renderHeader = (title: string) => (
    <Stack
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ background: '#821818', width: '100%', p: 2 }}
    >
      <Typography
        sx={{
          color: 'transparent',
          backgroundImage: 'linear-gradient(180deg, #f6ca68, #c18b49)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}
        variant={isSmallScreen ? 'h6' : 'h4'}
      >
        {title}
      </Typography>
      <Logo />
    </Stack>
  );
  return (
    <>
      {TABLE_DATA.map((row) => (
        <Stack key={row.title}>
          {renderHeader(row.title)}
          <Table sx={{ background: '#821818' }}>
            <TableHeadCustom
              sx={{
                color: 'transparent',
                backgroundImage: 'linear-gradient(180deg, #f6ca68, #c18b49)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                border: '1px #c18b49 solid !important',
                fontSize: isSmallScreen ? 12 : 20,
                fontWeight: 'bold',
              }}
              headCells={isSmallScreen ? TABLE_HEAD_MIN : TABLE_HEAD}
            />

            <TableBody sx={{ background: 'white', color: '#821818' }}>
              {row.data.map((item) => renderTable(item))}
            </TableBody>
          </Table>
        </Stack>
      ))}
    </>
  );
}
