import type { Metadata } from 'next';

import { Stack, Container, Typography } from '@mui/material';

import { NEWS } from 'src/_mock/news';
import { CONFIG } from 'src/global-config';

export const metadata: Metadata = {
  title: `Tin tức | ${CONFIG.appName}`,
  description: 'Vàng bạc Tài Lộc',
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const news = NEWS.find((n) => n.slug === slug);

  if (!news || !news.content) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography>Không có nội dung chi tiết</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 8 }}>
      <Stack spacing={4}>
        {/* Breadcrumb */}
        <Typography sx={{ color: '#8c0302', fontWeight: 600 }}>
          Trang chủ / Tin tức / {news.title}
        </Typography>

        {/* Title */}
        <Typography variant="h4" fontWeight={700}>
          {news.title}
        </Typography>

        {/* Content */}
        <Stack spacing={4}>{news.content}</Stack>
      </Stack>
    </Container>
  );
}
