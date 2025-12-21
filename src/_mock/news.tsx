import { ReactNode } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import GoldMarketSummary from 'src/app/(home)/tin-tuc/phan-tich-thi-truong-vang/GoldMarketSummary';
import WeeklyEvents from 'src/app/(home)/tin-tuc/phan-tich-thi-truong-vang/WeeklyEvents';
import WeeklyEconomicData from 'src/app/(home)/tin-tuc/phan-tich-thi-truong-vang/WeeklyEconomicData';
import GoldInventoryData from 'src/app/(home)/tin-tuc/phan-tich-thi-truong-vang/GoldInventoryData';
import TechnicalAnalysis from 'src/app/(home)/tin-tuc/phan-tich-thi-truong-vang/TechnicalAnalysis';
import DisclaimerSection from 'src/app/(home)/tin-tuc/phan-tich-thi-truong-vang/DisclaimerSection';
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
};

export const IMAGES: ImagesItem[] = [
    {
        id: 1,
        image: '/assets/background/info1.png',
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
        image: '/assets/background/info1.png',
    },
]

export const NEWS: NewsItem[] = [
    {
        id: 1,
        title: 'Tết rinh lộc vàng - Đón ngàn điều may',
        desc: 'Ưu đãi hấp dẫn dịp tết với nhiều phần quà...',
        image: '/assets/background/news-1.jpg',
        slug: 'tet-rinh-loc-vang',
        content: 'Nội dung chi tiết bài viết Tết rinh lộc vàng...',
    },
    {
        id: 2,
        title: 'Phân tích thị trường vàng',
        desc: 'Cập nhật xu hướng giá vàng mới nhất...',
        image: '/assets/background/news-2.jpg',
        slug: 'phan-tich-thi-truong-vang',
        content: (
            <>
                <GoldMarketSummary />
                <WeeklyEvents />
                <WeeklyEconomicData />
                <GoldInventoryData />
                <TechnicalAnalysis />
                <DisclaimerSection />
            </>
        ),
    },
    {
        id: 3,
        title: 'Phân tích thị trường bạc',
        desc: 'Nhận định biến động giá bạc...',
        image: '/assets/background/news-3.jpg',
        slug: 'phan-tich-thi-truong-bac',
        content: 'Nội dung phân tích thị trường bạc...',
    },
    {
        id: 4,
        title: 'Giá bạc thế giới vượt mức 63,49$',
        desc: 'Giá bạc Phú Quý trong tuần vừa qua ...',
        image: '/assets/background/news-4.jpg',
        slug: 'gia-bac-vuot-muc',
        content: 'Nội dung chi tiết bài viết Tết rinh lộc vàng...',
    },
    {
        id: 5,
        title: 'Phân tích thị trường vàng',
        desc: 'Cập nhật xu hướng giá vàng mới nhất...',
        image: '/assets/background/news-1.jpg',
        slug: 'phan-tich-thi-truong-vang',
        content: 'Nội dung phân tích thị trường vàng chi tiết...',
    },
    {
        id: 6,
        title: 'Phân tích thị trường bạc',
        desc: 'Nhận định biến động giá bạc...',
        image: '/assets/background/news-2.jpg',
        slug: 'phan-tich-thi-truong-bac',
        content: 'Nội dung phân tích thị trường bạc...',
    },
];
