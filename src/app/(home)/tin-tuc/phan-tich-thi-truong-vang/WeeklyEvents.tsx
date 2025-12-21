import { Box, Grid, Typography } from '@mui/material';

export default function WeeklyEvents() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <Box sx={{ display: 'flex', alignItems: 'stretch',  }}>
        {/* BOX TRÁI */}
        <Box
          sx={{
            width: 450,
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
          Sự kiện tuần qua
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
        {/* LEFT CONTENT */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography fontWeight={700} gutterBottom>
            Thị trường vàng trong nước
          </Typography>
          <Typography>- Giá vàng SJC trong nước tăng lên mức <strong>153 triệu/lượng</strong> cùng đà tăng của vàng thế giới.</Typography>
          <Typography>- Giá vàng đang có tín hiệu thách thức lại vùng đỉnh cũ đã xác lập trong tháng 10 vừa qua.</Typography>

          <Typography fontWeight={700} mt={2} gutterBottom>
            Dữ liệu kinh tế tuần qua
          </Typography>
          <Typography>- Fed cắt giảm lãi suất giữa bất đồng nội bộ - Báo Tuổi Trẻ.</Typography>
          <Typography>- Lạm phát Trung Quốc lên cao nhất gần 2 năm - Báo VNExpress.</Typography>

          <Typography fontWeight={700} mt={2} gutterBottom>
            Điểm tin thương mại
          </Typography>
          <Typography>- Căng thẳng thương mại hạ nhiệt, công nghiệp bán dẫn khởi sắc - Báo Mới.</Typography>
          <Typography>- Quỹ ETF vàng SPDR tăng khối lượng dự trữ lên hơn <strong>2,53 tấn</strong> so với tuần trước - Phú Quý tổng hợp.</Typography>

        </Grid>

        {/* RIGHT MAP */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src="/assets/background/world-map.jpg"
            sx={{
              width: '100%',
            }}
          />
          <Typography fontWeight={700} mt={2} gutterBottom>
            Căng thẳng địa chính trị
          </Typography>
          <Typography>- Mỹ ban hành loạt trừng phạt với Venezuela - Báo VNExpress.</Typography>
          <Typography>- Mỹ điều máy bay ném bom B-52H tập trận chung với Nhật Bản - Báo VNExpress.</Typography>
          <Typography>- Ông Zelensky: Ukraine sẽ từ bỏ tham vọng gia nhập NATO - Báo VNExpress.</Typography>
        </Grid>
      </Grid>
    </>
  );
}
