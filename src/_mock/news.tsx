import type { ReactNode } from 'react';

import GoldMarketSummary from 'src/sections/phan-tich-thi-truong-vang/GoldMarketSummary';
import GoldInventoryData from 'src/sections/phan-tich-thi-truong-vang/GoldInventoryData';
import GoldWeeklyEvents from 'src/sections/phan-tich-thi-truong-vang/GoldWeeklyEvents';
import GoldWeeklyEconomicData from 'src/sections/phan-tich-thi-truong-vang/GoldWeeklyEconomicData';
import GoldTechnicalAnalysis from 'src/sections/phan-tich-thi-truong-vang/GoldTechnicalAnalysis';
import SilverMarketSummary from 'src/sections/phan-tich-thi-truong-bac/SilverMarketSummary';
import SilverInventoryData from 'src/sections/phan-tich-thi-truong-bac/SilverInventoryData';
import SilverTechnicalAnalysis from 'src/sections/phan-tich-thi-truong-bac/SilverTechnicalAnalysis';
import SilverWeeklyEconomicData from 'src/sections/phan-tich-thi-truong-bac/SilverWeeklyEconomicData';
import SilverWeeklyEvents from 'src/sections/phan-tich-thi-truong-bac/SilverWeeklyEvents';

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
  disclaimerType?: DisclaimerType;
};

export enum DisclaimerType {
  GOLD = 'gold',
  SILVER = 'silver',
}

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
        <GoldWeeklyEvents />
        <GoldWeeklyEconomicData />
        <GoldInventoryData />
        <GoldTechnicalAnalysis />
      </>
    ),
    disclaimerType: DisclaimerType.GOLD,
  },
  {
    id: 3,
    title: 'Phân tích thị trường bạc',
    desc: 'Giá vàng Bạc thỏi Phú Quý kết thúc tuần vừa qua quanh mức: 62,1 triệu đồng/ Kg - Mua vào và 64 triều đồng/ Kg - Bán ra. Tăng 6.05% so với tuần trước đó. Giá bạc trong nước tiếp ...',
    image: '/assets/background/news-3.jpg',
    slug: 'phan-tich-thi-truong-bac',
    content: (
      <>
        <SilverMarketSummary />
        <SilverWeeklyEvents />
        <SilverInventoryData />
        <SilverWeeklyEconomicData />
        <SilverTechnicalAnalysis />
      </>
    ),
    disclaimerType: DisclaimerType.SILVER,
  },
  {
    id: 4,
    title: 'Giá Bạc thế giới vượt mức 63,49$',
    desc: 'Giá vàng SJC tại Phú Quý bật tăng trong tuần qua, giao dịch trên mức 153 triệu/lượng mua vào, 156 triệu/lượng bán ra.\n Giá vàng trong nước tăng nhẹ cùng với giá ...',
    image: '/assets/background/news-4.jpg',
    slug: 'gia-bac-vuot-muc',
    content: '',
  },
];
