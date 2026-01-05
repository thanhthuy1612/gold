import type { ReactNode } from 'react';

import WeeklyEvents from 'src/sections/phan-tich-thi-truong-vang/WeeklyEvents';
import GoldMarketSummary from 'src/sections/phan-tich-thi-truong-vang/GoldMarketSummary';
import GoldInventoryData from 'src/sections/phan-tich-thi-truong-vang/GoldInventoryData';
import TechnicalAnalysis from 'src/sections/phan-tich-thi-truong-vang/TechnicalAnalysis';
import DisclaimerSection from 'src/layouts/main/DisclaimerSection';
import WeeklyEconomicData from 'src/sections/phan-tich-thi-truong-vang/WeeklyEconomicData';

export type ImagesItem = {
  id: number;
  image: string;
};

export type NewsItem = {
  id: number;
  title: string;
  desc: string;
  image: string;
  slug: string;
  content: ReactNode;
  hasDisclaim?: boolean;
};

export const IMAGES: ImagesItem[] = [
  {
    id: 1,
    image: '/assets/background/webp/info2.webp',
  },
  {
    id: 2,
    image: '/assets/background/info-5.jpg',
  },
  {
    id: 3,
    image: '/assets/background/info-5.jpg',
  },
  {
    id: 4,
    image: '/assets/background/webp/info2.webp',
  },
];

export const NEWS: NewsItem[] = [
  {
    id: 1,
    title: 'Tết rinh lộc vàng - Đón ngàn điều may',
    desc: 'Tết sinh lộc vàng mang niềm tin khởi sắc, mở ra năm mới an khang thịnh vượng. Gia đình sum vầy, kinh doanh hanh thông, tài lộc gõ cửa, đón ngàn điều may, gửi trọn hy vọng ...',
    image: '/assets/background/news-1.jpg',
    slug: 'tet-rinh-loc-vang',
    content: '',
  },
  {
    id: 2,
    title: 'Phân tích thị trường vàng',
    desc: 'Giá vàng SJC tại Phú Quý bật tăng trong tuần qua, giao dịch trên mức 153 triệu/lượng mua vào, 156 triệu/lượng bán ra.\n Giá vàng trong nước tăng nhẹ cùng với giá ...',
    image: '/assets/background/news-2.jpg',
    slug: 'phan-tich-thi-truong-vang',
    content: (
      <>
        <GoldMarketSummary />
        <WeeklyEvents />
        <WeeklyEconomicData />
        <GoldInventoryData />
        <TechnicalAnalysis />
      </>
    ),
    hasDisclaim: true,
  },
  {
    id: 3,
    title: 'Phân tích thị trường bạc',
    desc: 'Giá vàng Bạc thỏi Phú Quý kết thúc tuần vừa qua quanh mức: 62,1 triệu đồng/ Kg - Mua vào và 64 triều đồng/ Kg - Bán ra. Tăng 6.05% so với tuần trước đó. Giá bạc trong nước tiếp ...',
    image: '/assets/background/news-3.jpg',
    slug: 'phan-tich-thi-truong-bac',
    content: '',
  },
  {
    id: 4,
    title: 'Giá Bạc thế giới vượt mức 63,49$',
    desc: 'Giá vàng SJC tại Phú Quý bật tăng trong tuần qua, giao dịch trên mức 153 triệu/lượng mua vào, 156 triệu/lượng bán ra.\n Giá vàng trong nước tăng nhẹ cùng với giá ...',
    image: '/assets/background/news-4.jpg',
    slug: 'gia-bac-vuot-muc',
    content: '',
  },
  {
    id: 5,
    title: 'Phân tích thị trường vàng',
    desc: 'Cập nhật xu hướng giá vàng mới nhất...',
    image: '/assets/background/news-1.jpg',
    slug: 'phan-tich-thi-truong-vang',
    content: '',
  },
  {
    id: 6,
    title: 'Phân tích thị trường bạc',
    desc: 'Nhận định biến động giá bạc...',
    image: '/assets/background/news-2.jpg',
    slug: 'phan-tich-thi-truong-bac',
    content: '',
  },
];
