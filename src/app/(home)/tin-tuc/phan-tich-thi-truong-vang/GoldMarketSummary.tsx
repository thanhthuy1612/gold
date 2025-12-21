import { Box, Grid, Typography } from '@mui/material';

const thStyle = {
  p: 1,
  border: '1px solid #ccc',
  fontWeight: 700,
};

const tdStyle = {
  p: 1,
  border: '1px solid #ccc',
};

export default function GoldMarketSummary() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <Box sx={{ display: 'flex', alignItems: 'stretch', }}>
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
            pr: 12,
            clipPath:
              'polygon(0 0, 100% 0, calc(100% - 32px) 100%, 0 100%)',
          }}
        >
          Tổng hợp thị trường vàng tuần qua
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

      {/* ===== TOP CONTENT ===== */}
      <Grid container spacing={3}>
        {/* LEFT */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              bgcolor: '#eee',
              px: 2,
              py: 1,
              fontWeight: 700,
              mb: 2,
              border: '1px solid #000',
              borderRadius: 1,
              textAlign: 'center',
            }}
          >
            Giá vàng trong nước
          </Box>

          <Typography paragraph>
            Giá vàng SJC tại Phú Quý bật tăng trong tuần vừa qua, giao dịch
            trên mức <strong>153 triệu/lượng</strong> - mua vào, <strong>156 triệu/lượng</strong> - bán ra.
          </Typography>

          <Typography paragraph>
            Giá vàng trong nước tuần vừa qua tăng nhẹ cùng giá vàng quốc tế.
          </Typography>
        </Grid>

        {/* RIGHT */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            sx={{
              bgcolor: '#eee',
              px: 2,
              py: 1,
              fontWeight: 700,
              mb: 2,
              border: '1px solid #000',
              borderRadius: 1,
              textAlign: 'center',
            }}
          >
            Biểu đồ giá vàng SJC tại Phú Quý
          </Box>

          <Box
            component="img"
            src="/assets/background/chart-sjc.jpg"
            sx={{
              width: '100%',
              border: '1px solid #ddd',
            }}
          />
        </Grid>
      </Grid>

      {/* ===== TABLE ===== */}
      <Typography variant="h6" fontWeight={700} sx={{ mt: 4, }}>
        Giá vàng quốc tế
      </Typography>

      <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse' }}>
        <Box component="thead">
          <Box component="tr" sx={{ bgcolor: '#8c0302', color: '#fff' }}>
            <Box component="th" sx={thStyle}>Sản phẩm</Box>
            <Box component="th" sx={thStyle}>Giá đóng cửa tuần</Box>
            <Box component="th" sx={thStyle}>Thay đổi tuần (%)</Box>
            <Box component="th" sx={thStyle}>Thay đổi năm (%)</Box>
          </Box>
        </Box>

        <Box component="tbody">
          <Box component="tr">
            <Box component="td" sx={tdStyle}>Vàng giao ngay</Box>
            <Box component="td" sx={tdStyle}>4299 USD/Ounce</Box>
            <Box component="td" sx={{ ...tdStyle, color: 'green' }}>+2,43%</Box>
            <Box component="td" sx={{ ...tdStyle, color: 'green' }}>+63,84%</Box>
          </Box>

          <Box component="tr">
            <Box component="td" sx={tdStyle}>Vàng Comex giao tháng 02/2026</Box>
            <Box component="td" sx={tdStyle}>4328 USD/Ounce</Box>
            <Box component="td" sx={{ ...tdStyle, color: 'green' }}>+2,01%</Box>
            <Box component="td" sx={{ ...tdStyle, color: 'green' }}>+63,89%</Box>
          </Box>

          <Box component="tr">
            <Box component="td" sx={tdStyle}>Vàng Thượng Hải giao tháng 02/2026</Box>
            <Box component="td" sx={tdStyle}>970 CNY/Gram</Box>
            <Box component="td" sx={{ ...tdStyle, color: 'green' }}>+1,00%</Box>
            <Box component="td" sx={{ ...tdStyle, color: 'green' }}>+56,36%</Box>
          </Box>
        </Box>
      </Box>

      {/* ===== REVIEW ===== */}
      <Typography variant="h6" fontWeight={700} sx={{ mt: 4 }}>
        Đánh giá
      </Typography>

      <Typography paragraph>
        Giá vàng trong tuần vừa qua bật tăng mạnh mẽ nhờ đà suy yếu của USD.
        Bên cạnh đó, căng thẳng địa chính trị leo thang tiếp tục hỗ trợ giá vàng.
      </Typography>
    </>
  );
}
