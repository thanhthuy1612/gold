import type { Metadata } from 'next';

import { Stack, Container, Typography } from '@mui/material';

import { NEWS } from 'src/_mock/news';

import { ComingSoonView } from 'src/components/coming-soon/view';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const news = NEWS.find((n) => n.slug === slug);

  return {
    title: news?.title ?? 'Tin tức',
    description: news?.desc ?? '',
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const news = NEWS.find((n) => n.slug === slug);

  if (!news || !news.content) {
    return (
      <Container sx={{ textAlign: 'center', my: 5 }}>
        <CustomBreadcrumbs
          links={[{ name: 'Trang chủ', href: '/' }, { name: 'Tin tức' }]}
          sx={{ mb: { xs: 3, md: 5 } }}
          slotProps={{
            breadcrumbs: {
              color: '#821818',
            },
            action: {},
            heading: {},
            moreLink: {},
          }}
        />
        <ComingSoonView />
      </Container>
    );
  }

  return (
    <Container sx={{ py: 8 }}>
      <Stack spacing={4}>
        {/* Breadcrumb – chỉ dùng cho màn này */}
        <CustomBreadcrumbs
          links={[
            { name: 'Trang chủ', href: '/' },
            { name: 'Tin tức', href: '/tin-tuc' },
            { name: news.title },
          ]}
          sx={{
            color: '#8c0302',
            fontWeight: 600,
          }}
        />

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
