import { Box, Grid, Typography } from '@mui/material';

const thStyle = {
  p: 1,
  border: '1px solid #ccc',
  fontWeight: 600,
};

const tdStyle = {
  p: 1,
  border: '1px solid #ccc',
};

export default function WeeklyEconomicData() {
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
        Dữ liệu kinh tế tuần này
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
        {/* TABLE */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse' }}>
            <Box component="thead">
              <Box component="tr" sx={{ bgcolor: '#00f5f5' }}>
                <Box component="th" sx={thStyle}>Ngày</Box>
                <Box component="th" sx={thStyle}>Sự kiện</Box>
                <Box component="th" sx={thStyle}>Quốc gia</Box>
                <Box component="th" sx={thStyle}>Dữ liệu kỳ trước</Box>
              </Box>
            </Box>

            <Box component="tbody">
              <Box component="tr">
                <Box component="td" sx={tdStyle}>16/12/2025</Box>
                <Box component="td" sx={tdStyle}>Thu nhập trung bình theo giờ (MoM)</Box>
                <Box component="td" sx={tdStyle}>Mỹ</Box>
                <Box component="td" sx={tdStyle}>0,2%</Box>
              </Box>
              <Box component="tr">
                <Box component="td" sx={tdStyle}>16/12/2025</Box>
                <Box component="td" sx={tdStyle}>Bảng lương phi nông nghiệp</Box>
                <Box component="td" sx={tdStyle}>Mỹ</Box>
                <Box component="td" sx={tdStyle}>119 nghìn việc làm</Box>
              </Box>
              <Box component="tr">
                <Box component="td" sx={tdStyle}>17/12/2025</Box>
                <Box component="td" sx={tdStyle}>CPI tháng 11 (YoY)</Box>
                <Box component="td" sx={tdStyle}>Anh</Box>
                <Box component="td" sx={tdStyle}>3,6%</Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* IMPACT */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              border: '1px solid #ccc',
              p: 2,
              height: '100%',
            }}
          >
            <Typography fontWeight={700} gutterBottom>
              Ảnh hưởng đến giá vàng
            </Typography>

            <Typography paragraph>
              Trong tuần này, thị trường sẽ tập trung vào các dữ liệu về thị trường lao động
              và lạm phát Mỹ. Đây sẽ là căn cứ để Fed có thể đưa ra chính sách tiền tệ rõ
              ràng hơn trong năm 2026.
            </Typography>

            <Typography paragraph>
              Sau cuộc họp vào tháng 12 vừa qua, các chuyên gia của FOMC vẫn được
              đánh giá là thận trọng. Tuy nhiên, việc duy trì lãi suất trong dài hạn
              sẽ là yếu tố hỗ trợ giá vàng.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
