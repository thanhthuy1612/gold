'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { NEWS, IMAGES } from 'src/_mock/news';

import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Button,
  Pagination,
} from '@mui/material';

const PER_PAGE = 4;
const GAP = 24;
const BIG_H = 400;
const ROW_H = (BIG_H - GAP) / 2;

export default function NewsListPage() {
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(NEWS.length / PER_PAGE);

  const pageData = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return NEWS.slice(start, start + PER_PAGE);
  }, [page]);

  const IMAGES_PER_PAGE = 2;

  const imageData = useMemo(() => {
    const start = (page - 1) * IMAGES_PER_PAGE;
    return IMAGES.slice(start, start + IMAGES_PER_PAGE);
  }, [page]);

  return (
    <Container sx={{ py: 6 }}>
      {/* Breadcrumb */}
      <Typography sx={{ mb: 3, color: '#8c0302', fontWeight: 600 }}>
        Trang chủ / Tin tức
      </Typography>

      <Grid container spacing={3}>
        {/*Left: */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Stack spacing={3}>
            {imageData.map((item) => (
              <Box
                key={item.id}
                component="img"
                src={item.image}
                // alt={item.title}
                sx={{
                  width: 'auto',
                  height: BIG_H,
                  borderRadius: 1.5,
                  boxShadow: 2,
                }}
              />
            ))}
          </Stack>
        </Grid>

        {/*Right:*/}
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack spacing={3}>
            {pageData.map((item) => (
              <Grid key={item.id} container spacing={2} sx={{ height: ROW_H }}>
                {/* image small */}
                <Grid size={6}>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: '100%',
                      height: '100%',

                      borderRadius: 1,
                    }}
                  />
                </Grid>

                {/* content */}
                <Grid size={6}>
                  <Stack spacing={1}>
                    <Typography
                      variant="subtitle1"
                      fontWeight={700}
                      sx={{ color: '#8c0302' }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {item.desc}
                    </Typography>

                    <Button
                      component={Link}
                      href={`/tin-tuc/${item.slug}`}
                      size="small"
                      sx={{
                        alignSelf: 'flex-start',
                        bgcolor: '#8c0302',
                        color: '#f0b05c',
                        px: 2,
                        py: 0.5,
                        borderRadius: '16px',
                        fontSize: 12,
                        textTransform: 'none',
                        '&:hover': {
                          bgcolor: '#a40404',
                        },
                      }}
                    >
                      Xem thêm
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            ))}
          </Stack>
        </Grid>
      </Grid>

      {/*Pagination*/}
      <Stack alignItems="center" sx={{ mt: 4 }}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={(_, value) => setPage(value)}
          hidePrevButton
          hideNextButton
          sx={{
            '& .MuiPaginationItem-root': {
              mx: 0.5,
              borderRadius: '50%',
              minWidth: 32,
              height: 32,
              border: '1px solid #8c0302',
              color: '#8c0302',
            },
            '& .MuiPaginationItem-root.Mui-selected': {
              bgcolor: '#8c0302',
              color: '#fff',
              '&:hover': { bgcolor: '#a40404' },
            },
          }}
        />
      </Stack>
    </Container>
  );
}
