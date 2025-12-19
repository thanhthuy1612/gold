import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

import type { NavMainProps } from './main/nav/types';

// ----------------------------------------------------------------------

export const navData: NavMainProps['data'] = [
  {
    title: 'Tra cứu đơn hàng',
    path: '/',
    icon: <Iconify width={16} icon="eva:search-fill" />,
  },
  {
    title: 'Giá vàng - Bạc',
    path: '/',
    icon: <Iconify width={16} icon="solar:chart-square-outline" />,
  },
  {
    title: 'Cửa hàng',
    path: '/',
    icon: <Iconify width={16} icon="solar:point-on-map-bold" />,
  },
  {
    title: 'Liên hệ',
    path: paths.components,
    icon: <Iconify width={16} icon="solar:user-id-bold" />,
  },
  {
    title: 'Tin tức',
    path: paths.components,
    icon: <Iconify width={16} icon="solar:notes-bold-duotone" />,
  },
];
