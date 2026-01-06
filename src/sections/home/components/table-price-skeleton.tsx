import { Box, Card, Stack, Skeleton } from '@mui/material';

export function TablePriceSkeleton() {
  return (
    <Card sx={{ p: 3 }}>
      {/* HEADER */}
      <Stack direction="row" spacing={2} alignItems="center" mb={2}>
        <Skeleton width={30} height={30} />
        <Skeleton width={180} height={28} />
      </Stack>

      {/* ROWS */}
      <Stack spacing={1.5}>
        {Array.from({ length: 4 }).map((_, i) => (
          <Box key={i} sx={{ display: 'flex', gap: 2 }}>
            <Skeleton width="40%" height={24} />
            <Skeleton width="30%" height={24} />
            <Skeleton width="30%" height={24} />
          </Box>
        ))}
      </Stack>
    </Card>
  );
}
