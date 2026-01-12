'use client';

import { useMemo, useState } from 'react';

import { Box, Grid, Link, Stack, Button, Container, Pagination, Typography } from '@mui/material';

import { NEWS, IMAGES } from 'src/_mock/news';

const PER_PAGE = 4;
const GAP = 24;
const BIG_H = 400;
const ROW_H = (BIG_H - GAP) / 2;

export default function NewsClient() {
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(NEWS.length / PER_PAGE);

  const pageData = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return NEWS.slice(start, start + PER_PAGE);
  }, [page]);

  const imageData = useMemo(() => {
    const start = (page - 1) * 2;
    return IMAGES.slice(start, start + 2);
  }, [page]);

  return (
    <Container sx={{ px: '0 !important', pb: 5, pt: 0 }}>
      <Grid container spacing={3}>
        {/* LEFT */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Stack spacing={3}>
            {imageData.map((item) => (
              <Box
                key={item.id}
                component="img"
                src={item.image}
                sx={{
                  height: { md: 'auto', lg: BIG_H },
                  borderRadius: 1.5,
                  boxShadow: 2,
                  objectFit: 'cover',
                }}
              />
            ))}
          </Stack>
        </Grid>

        {/* RIGHT */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack spacing={3}>
            {pageData.map((item) => (
              <Grid key={item.id} container spacing={2} sx={{ height: { xs: 'auto', md: ROW_H } }}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    component="img"
                    src={item.image}
                    sx={{
                      width: '100%',
                      height: { xs: 'auto', md: '100%' },
                      objectFit: 'cover',
                      borderRadius: 1,
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }} sx={{ height: '100%' }}>
                  <Stack spacing={1} height="100%">
                    <Typography
                      fontWeight={700}
                      sx={{
                        color: '#8c0302',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {item.desc}
                    </Typography>

                    {item.content !== '' && (
                      <Stack direction="row" display="flex" alignItems="end" mt="auto">
                        <Button
                          component={Link}
                          href={`/tin-tuc/${item.slug}`}
                          size="small"
                          sx={{
                            alignSelf: { xs: 'center', md: 'flex-start' },
                            bgcolor: '#8c0302',
                            color: '#e8ab6a',
                            borderRadius: '4px',
                            fontSize: 14,
                            textTransform: 'none',
                            px: 1.5,
                            '&:hover': { bgcolor: '#a40404' },
                          }}
                        >
                          Xem thêm
                        </Button>
                      </Stack>
                    )}
                  </Stack>
                </Grid>
              </Grid>
            ))}
          </Stack>
        </Grid>
      </Grid>

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
