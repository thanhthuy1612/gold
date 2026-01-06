import { Box, Card, Stack, Skeleton } from '@mui/material';

export function ProductItemSkeleton() {
  return (
    <Card sx={{ border: '2px solid #98130f' }}>
      {/* IMAGE */}
      <Box sx={{ p: 1, height: 150 }}>
        <Skeleton width="100%" height="100%" />
      </Box>

      {/* TITLE */}
      <Stack spacing={1.5} sx={{ p: 3 }}>
        <Skeleton height={28} />
        <Skeleton height={28} width="80%" />
      </Stack>

      {/* PRICE */}
      <Box sx={{ p: 3, borderTop: '2px solid #98130f' }}>
        <Skeleton height={24} width="70%" />
        <Skeleton height={24} width="70%" />
      </Box>
    </Card>
  );
}
