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
            pr: 12,
            clipPath: 'polygon(0 0, 100% 0, calc(100% - 32px) 100%, 0 100%)',
          }}
        >
          Tổng hợp thị trường bạc tuần qua
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
            Giá bạc trong nước
          </Box>

          <Typography style={{ marginBottom: 0 }}>
            Giá bạc thỏi Phú Quý kết thúc tuần vừa qua quanh mức:
          </Typography>
          <Typography style={{ marginTop: 0, paddingLeft: 20 }}>
            - <strong>62,1 triệu đồng/kg</strong> – mua vào;
          </Typography>

          <Typography style={{ marginTop: 0, paddingLeft: 20 }}>
            - <strong>64 triệu đồng/kg</strong> – bán ra.
          </Typography>

          <Typography paragraph>
            Tăng <strong>6,05%</strong> so với tuần trước đó.
          </Typography>

          <Typography paragraph>
            Giá bạc trong nước tiếp tục tăng mạnh theo đà tăng của giá bạc quốc tế.
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
            Biểu đồ giá bạc trong nước
          </Box>

          <Box
            component="img"
            src="/assets/background/chart-silver.jpg"
            sx={{
              width: '100%',
              border: '1px solid #ddd',
            }}
          />
        </Grid>
      </Grid>

      {/* ===== TABLE ===== */}
      <Typography variant="h6" fontWeight={700} sx={{ mt: 4 }}>
        Tổng hợp giá bạc quốc tế
      </Typography>

      <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse' }}>
        <Box component="thead">
          <Box component="tr" sx={{ bgcolor: '#021f61', color: '#fff' }}>
            <Box component="th" sx={thStyle}>
              Sản phẩm
            </Box>
            <Box component="th" sx={thStyle}>
              Giá đóng cửa tuần
            </Box>
            <Box component="th" sx={thStyle}>
              Thay đổi tuần (%)
            </Box>
            <Box component="th" sx={thStyle}>
              Thay đổi năm (%)
            </Box>
          </Box>
        </Box>

        <Box component="tbody">
          <Box component="tr">
            <Box component="td" sx={tdStyle}>
              Bạc giao ngay
            </Box>
            <Box component="td" sx={tdStyle}>
              61,92 USD/Oz
            </Box>
            <Box component="td" sx={{ ...tdStyle, color: 'green' }}>
              +6,23%
            </Box>
            <Box component="td" sx={{ ...tdStyle, color: 'green' }}>
              +114,33%
            </Box>
          </Box>

          <Box component="tr">
            <Box component="td" sx={tdStyle}>
              Bạc Comex giao tháng 02/2026
            </Box>
            <Box component="td" sx={tdStyle}>
              60,005 USD/Oz
            </Box>
            <Box component="td" sx={{ ...tdStyle, color: 'green' }}>
              +5,00%
            </Box>
            <Box component="td" sx={{ ...tdStyle, color: 'green' }}>
              +112,06%
            </Box>
          </Box>

          <Box component="tr">
            <Box component="td" sx={tdStyle}>
              Bạc Thượng Hải giao tháng 02/2026
            </Box>
            <Box component="td" sx={tdStyle}>
              14892 CNY/Kg
            </Box>
            <Box component="td" sx={{ ...tdStyle, color: 'green' }}>
              +8,80%
            </Box>
            <Box component="td" sx={{ ...tdStyle, color: 'green' }}>
              +98,43%
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ===== REVIEW ===== */}
      <Typography variant="h6" fontWeight={700} sx={{ mt: 4 }}>
        Nhận định
      </Typography>
      <Typography paragraph>
        Giá bạc quốc tế tuần qua tiếp tục bật tăng mạnh mẽ đặc biệt giá bạc tại Trung Quốc khi 
        lực mua đến từ đà bổ sung tồn kho tại Thượng Hải. Bên cạnh đó, giá bạc tiếp tục tăng 
        mạnh nhờ đà suy yếu của đồng đô la và căng thẳng địa chính trị toàn cầu. Nhu cầu đầu tư 
        bạc tiếp tục gia tăng khi dòn vốn lớn đang đổ vào các các quỹ ETF bạc trên toàn cầu.
      </Typography>
    </>
  );
}
