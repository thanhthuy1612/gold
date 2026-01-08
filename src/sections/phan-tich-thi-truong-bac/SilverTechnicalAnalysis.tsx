import { Box, Grid, Typography } from '@mui/material';

export default function TechnicalAnalysis() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <Box sx={{ display: 'flex', alignItems: 'stretch' }}>
        {/* BOX TRÁI */}
        <Box
          sx={{
            width: 450,
            bgcolor: '#021f61',
            color: '#fff',
            fontWeight: 700,
            px: 4,
            py: 1.5,
            lineHeight: 1.2,
            pr: 8,
            clipPath: 'polygon(0 0, 100% 0, calc(100% - 32px) 100%, 0 100%)',
          }}
        >
          Phân tích kỹ thuật
        </Box>

        {/* BOX PHẢI */}
        <Box
          sx={{
            marginLeft: '-24px',
            width: 48,
            bgcolor: '#021f61',
            clipPath: 'polygon(32px 0, 100% 0, calc(100% - 32px) 100%, 0 100%)',
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
                  p: 1,
                  height: '100%',
                }}
              >
                <Typography fontWeight={700}>Vùng hỗ trợ</Typography>
                <Typography variant="body2">60 USD/ounce</Typography>
                <Typography variant="body2">58 USD/ounce</Typography>
              </Box>
            </Grid>

            {/* RESISTANCE */}
            <Grid size={{ xs: 6 }}>
              <Box
                sx={{
                  border: '1px solid #ccc',
                  p: 1,
                  height: '100%',
                }}
              >
                <Typography fontWeight={700}>Vùng kháng cự</Typography>
                <Typography variant="body2">65 USD/ounce</Typography>
                <Typography variant="body2">70 USD/ounce</Typography>
              </Box>
            </Grid>

            {/* ANALYSIS */}
            <Grid size={{ xs: 12 }}>
              <Box
                sx={{
                  p: 2,
                }}
              >
                <Typography fontWeight={700} fontSize={16} mb={1}>
                  Nhận định:
                </Typography>
                <Typography variant="body2" fontSize={16} lineHeight={1.6}>
                  Giá bạc tại Comex tiếp tục đà tăng mạnh mẽ do áp lực mua từ các quỹ quốc tế và dòng
                  tiền đẩy vào các quỹ ETF. Việc rút ròng bạc ra khỏi các kho của Comex đang khiến giá
                  bạc nổi dài đà tăng. Giá bạc có được lực mua mạnh mẽ sau khi về các vùng hỗ trợ.
                  <br />
                  <br />
                  Trong tuần này, nếu các dữ liệu ủng hộ cho việc Fed nới lỏng chính sách tiền tệ trong 
                  năm 2026, giá bạc có thể tiếp tục thách thức các vùng kháng cự trên mức 63 USD.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
