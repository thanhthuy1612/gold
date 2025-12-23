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

import { useAppSelector } from 'src/lib/hooks';

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

type PriceGroup = 'silver' | 'gold';

const silverOtherBrandData: TableData[] = [
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
];

const goldOtherBrandData: TableData[] = [
  {
    name: 'VÀNG 9999',
    buy: 15800000,
    sell: 16000000,
    cost: 'VNĐ/CHỈ',
  },
];

export function Price({ group }: { group: PriceGroup }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const { gold = [], silver = [] } = useAppSelector((state: any) => state.landing);

  /* ---------- MAP API DATA ---------- */
  const silverPhuQuyData: TableData[] = silver.map((item: { productTypeName: any; priceIn: any; priceOut: any; unitOfMeasure: string; description: any; }) => ({
    name: item.productTypeName,
    buy: item.priceIn,
    sell: item.priceOut,
    cost: item.unitOfMeasure.toUpperCase(),
    description: item.description ?? undefined,
  }));

  const goldPhuQuyData: TableData[] = gold.map((item: { productTypeName: any; priceIn: any; priceOut: any; unitOfMeasure: string; description: any; }) => ({
    name: item.productTypeName,
    buy: item.priceIn,
    sell: item.priceOut,
    cost: item.unitOfMeasure.toUpperCase(),
    description: item.description ?? undefined,
  }));

  const TABLE_DATA: PriceData[] =
    group === 'silver'
      ? [
          {
            title: 'BẠC THƯƠNG HIỆU PHÚ QUÝ',
            data: silverPhuQuyData,
          },
          {
            title: 'BẠC THƯƠNG HIỆU KHÁC',
            data: silverOtherBrandData,
          },
        ]
      : [
          {
            title: 'VÀNG THƯƠNG HIỆU PHÚ QUÝ',
            data: goldPhuQuyData,
          },
          {
            title: 'VÀNG THƯƠNG HIỆU KHÁC',
            data: goldOtherBrandData,
          },
        ];

  /* ---------- RENDER ---------- */

  const renderTableRow = (item: TableData) => (
    <TableRow key={item.name}>
      <TableCell sx={{ border: '1px #821818 solid !important', color: '#821818' }}>
        <Typography variant="h5">{item.name}</Typography>
        {item.description && <Typography variant="caption">({item.description})</Typography>}
      </TableCell>
      {!isSmallScreen && (
        <TableCell sx={{ border: '1px #821818 solid !important', color: '#821818' }}>
          {item.cost}
        </TableCell>
      )}

      <TableCell align="right" sx={{ border: '1px #821818 solid !important' }}>
        <Typography variant="subtitle1">{fNumber(item.buy)}</Typography>
        {isSmallScreen && <Typography variant="caption">({item.cost})</Typography>}
      </TableCell>

      <TableCell align="right" sx={{ border: '1px #821818 solid !important' }}>
        <Typography variant="subtitle1">{item.sell ? fNumber(item.sell) : <Logo />}</Typography>
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

            <TableBody sx={{ background: 'white' }}>
              {row.data.map((item) => renderTableRow(item))}
            </TableBody>
          </Table>
        </Stack>
      ))}
    </>
  );
}
