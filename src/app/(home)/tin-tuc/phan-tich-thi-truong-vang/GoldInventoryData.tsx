import { Box, Grid, Typography } from '@mui/material';

export default function GoldInventoryData() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <Box
        sx={{
          bgcolor: '#8c0302',
          color: '#fff',
          px: 3,
          py: 1,
          fontWeight: 700,
          width: 'fit-content',
          position: 'relative',
          mb: 3,
          mt: 5,
        }}
      >
        Dữ liệu về vàng
        <Box
          sx={{
            position: 'absolute',
            right: -24,
            top: 0,
            width: 0,
            height: 0,
            borderTop: '24px solid transparent',
            borderBottom: '24px solid transparent',
            borderLeft: '24px solid #8c0302',
          }}
        />
      </Box>

      {/* ===== TOP CHARTS ===== */}
      <Grid container spacing={3}>
        {/* LEFT */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              bgcolor: '#eee',
              px: 2,
              py: 1,
              fontWeight: 600,
              mb: 2,
              borderRadius: 1,
              textAlign: 'center',
            }}
          >
            Tồn kho vàng Thượng Hải
          </Box>

          <Box
            component="img"
            src="/assets/background/chart-shanghai.jpg"
            sx={{ width: '100%'}}
          />
        </Grid>

        {/* RIGHT */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              bgcolor: '#eee',
              px: 2,
              py: 1,
              fontWeight: 600,
              mb: 2,
              borderRadius: 1,
              textAlign: 'center',
            }}
          >
            Tồn kho vàng Comex và trạng thái đầu tư của quỹ đầu cơ
          </Box>

          <Box
            component="img"
            src="/assets/background/chart-comex.jpg"
            sx={{ width: '100%'}}
          />
        </Grid>
      </Grid>

      {/* ===== DESCRIPTION ===== */}
      <Typography paragraph sx={{ mt: 3 }}>
        Tồn kho vàng tại Thượng Hải tăng nhẹ trong tuần vừa qua. Ngược lại, tồn kho
        vàng tại Comex có xu hướng giảm thứ 10 liên tiếp, mức giảm mạnh hơn 10 tấn
        so với tuần trước đó.
      </Typography>

      <Typography paragraph>
        Thị trường vàng tiếp tục cho thấy nhu cầu mạnh mẽ của vàng vật chất khối
        lượng lớn, đồng thời áp lực chốt lời từ các quỹ đầu cơ dịch chuyển dòng tiền
        sang các tài sản khác.
      </Typography>
    </>
  );
}
