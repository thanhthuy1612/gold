import { NEWS } from 'src/_mock/news';
import { Container, Typography, Box } from '@mui/material';

export default function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const news = NEWS.find((n) => n.slug === params.slug);

  if (!news || !news.content) {
    return (
      <Container sx={{ py: 6 }}>
        <Typography>Không có nội dung chi tiết</Typography>
      </Container>
    );
  }

  return (
    <>
      <Container sx={{ py: 6 }}>
        {/* Breadcrumb */}
        <Typography sx={{ mb: 3, color: '#8c0302', fontWeight: 600 }}>
          Trang chủ / Tin tức / {news.title}
        </Typography>

        <Typography variant="h4" fontWeight={700} sx={{ mb: 4 }}>
          {news.title}
        </Typography>

        {news.content}
      </Container>
    </>
  );
}
