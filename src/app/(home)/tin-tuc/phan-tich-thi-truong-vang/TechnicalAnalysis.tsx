import { Box, Grid, Typography } from '@mui/material';

export default function TechnicalAnalysis() {
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
        Phân tích kỹ thuật
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

      <Grid container spacing={3}>
        {/* CHART */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Box
            component="img"
            src="/assets/background/chart-technical-large.jpg"
            sx={{ width: '100%', border: '1px solid #ddd' }}
          />
        </Grid>

        {/* SIDE INFO */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              border: '1px solid #ccc',
              p: 2,
              mb: 2,
            }}
          >
            <Typography fontWeight={700}>Vùng hỗ trợ</Typography>
            <Typography>4100 USD/Ounce</Typography>
            <Typography>4250 USD/Ounce</Typography>
          </Box>

          <Box
            sx={{
              border: '1px solid #ccc',
              p: 2,
              mb: 2,
            }}
          >
            <Typography fontWeight={700}>Vùng kháng cự</Typography>
            <Typography>4400 USD/Ounce</Typography>
            <Typography>4500 USD/Ounce</Typography>
          </Box>

          <Box sx={{ border: '1px solid #ccc', p: 2 }}>
            <Typography fontWeight={700} gutterBottom>
              Nhận định
            </Typography>
            <Typography variant="body2">
              Giá vàng Comex bật tăng trong tuần qua, vượt qua vùng kháng cự 4300
              USD và hướng đến thử thách vùng kháng cự 4400 USD. Nếu USD tiếp tục
              suy yếu, giá vàng nhiều khả năng sẽ tiếp tục duy trì xu hướng tăng
              trung hạn.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
