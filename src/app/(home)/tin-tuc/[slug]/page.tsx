import { NEWS } from 'src/_mock/news';
import { Container, Typography, Stack } from '@mui/material';

export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const news = NEWS.find((n) => n.slug === params.slug);

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
