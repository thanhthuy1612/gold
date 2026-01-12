import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

import type { NavMainProps } from './main/nav/types';

// ----------------------------------------------------------------------

export const navData: NavMainProps['data'] = [
  {
    title: 'Tra cứu đơn hàng',
    path: paths.lookUpOrders,
    icon: <Iconify width={16} icon="eva:search-fill" />,
  },
  {
    title: 'Giá vàng - Bạc',
    path: paths.price,
    icon: <Iconify width={16} icon="solar:chart-square-outline" />,
  },
  {
    title: 'Cửa hàng',
    path: paths.store,
    icon: <Iconify width={16} icon="solar:point-on-map-bold" />,
  },
  {
    title: 'Tin tức',
    path: paths.news,
    icon: <Iconify width={16} icon="solar:notebook-bold-duotone" />,
  },
  {
    title: 'Liên hệ',
    path: 'https://zalo.me/g/acdmkl802',
    icon: <Iconify width={16} icon="solar:phone-bold" />,
  },
];
