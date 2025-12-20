'use client';
import { useParams } from 'next/navigation';
import { NEWS } from 'src/_mock/news';

import { Box, Container, Typography, Stack } from '@mui/material';

export default function NewsDetailPage() {
  const { slug } = useParams();
  const news = NEWS.find((n) => n.slug === slug);

  if (!news) {
    return (
      <Container sx={{ py: 6 }}>
        <Typography>Không tìm thấy bài viết</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 6 }}>
      <Typography sx={{ mb: 2, color: '#8c0302' }}>
        Trang chủ / Tin tức / {news.title}
      </Typography>

      <Stack spacing={3}>
        <Typography variant="h4" fontWeight={700}>
          {news.title}
        </Typography>

        <Box
          component="img"
          src={news.image}
          alt={news.title}
          sx={{ width: '100%', borderRadius: 2 }}
        />

        <Typography>{news.content}</Typography>
      </Stack>
    </Container>
  );
}
