import { Box, Grid, Typography } from '@mui/material';

export default function TechnicalAnalysis() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <Box sx={{ display: 'flex', alignItems: 'stretch', mb: 3 }}>
        {/* BOX TRÁI */}
        <Box
          sx={{
            bgcolor: '#8c0302',
            color: '#f5d36a',
            fontWeight: 700,
            px: 4,
            py: 1.5,
            lineHeight: 1.2,
            pr: 8,
            clipPath:
              'polygon(0 0, 100% 0, calc(100% - 32px) 100%, 0 100%)',
          }}
        >
          Phân tích kỹ thuật
        </Box>

        {/* BOX PHẢI */}
        <Box
          sx={{
            marginLeft: '-24px',
            width: 48,
            bgcolor: '#8c0302',
            clipPath:
              'polygon(32px 0, 100% 0, calc(100% - 32px) 100%, 0 100%)',
          }}
        />
      </Box>

      <Grid container spacing={3}>
        {/* CHART */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Box
            component="img"
            src="/assets/background/chart-technical-large.jpg"
            sx={{
              width: '100%',
              border: '1px solid #ddd',
            }}
          />
        </Grid>

        {/* SIDE INFO */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Grid container>
            {/* SUPPORT */}
            <Grid size={{ xs: 6 }}>
              <Box
                sx={{
                  border: '1px solid #ccc',
                  p: 2,
                  height: '100%',
                }}
              >
                <Typography fontWeight={700} mb={1}>
                  Vùng hỗ trợ
                </Typography>
                <Typography variant="body2">4100 USD/ounce</Typography>
                <Typography variant="body2">4250 USD/ounce</Typography>
              </Box>
            </Grid>

            {/* RESISTANCE */}
            <Grid size={{ xs: 6 }}>
              <Box
                sx={{
                  border: '1px solid #ccc',
                  p: 2,
                  height: '100%',
                }}
              >
                <Typography fontWeight={700} mb={1}>
                  Vùng kháng cự
                </Typography>
                <Typography variant="body2">4500 USD/ounce</Typography>
                <Typography variant="body2">4400 USD/ounce</Typography>
              </Box>
            </Grid>

            {/* ANALYSIS */}
            <Grid size={{ xs: 12 }}>
              <Box
                sx={{
                  p: 2,
                }}
              >
                <Typography fontWeight={700} mb={1}>
                  Nhận định:
                </Typography>
                <Typography variant="body2" lineHeight={1.6}>
                  Giá vàng Comex bật tăng trong tuần qua, vượt qua vùng kháng cự 4300
                  USD và hướng đến thử thách vùng kháng cự 4400 USD. Nếu USD tiếp tục
                  suy yếu trong tuần này, cùng với dữ liệu lạm phát của Mỹ gia tăng,
                  giá vàng có thể thử thách vùng đỉnh được xác lập trong tháng 10 vừa
                  qua.
                  <br />
                  <br />
                  Để đà tăng được bền vững, giá vàng cần xác nhận lực mua tại các vùng
                  hỗ trợ. Giá có thể biến động mạnh trong tuần này trước các dữ liệu
                  lao động và lạm phát của Mỹ.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
