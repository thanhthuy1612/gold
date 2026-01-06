import { Box, Grid, Typography } from '@mui/material';

export default function GoldInventoryData() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <Box sx={{ display: 'flex', alignItems: 'stretch' }}>
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
            clipPath: 'polygon(0 0, 100% 0, calc(100% - 32px) 100%, 0 100%)',
          }}
        >
          Dữ liệu về vàng
        </Box>

        {/* BOX PHẢI */}
        <Box
          sx={{
            marginLeft: '-24px',
            width: 48,
            bgcolor: '#8c0302',
            clipPath: 'polygon(32px 0, 100% 0, calc(100% - 32px) 100%, 0 100%)',
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
              fontWeight: 700,
              mb: 2,
              border: '1px solid #000',
              borderRadius: 1,
              textAlign: 'center',
            }}
          >
            Tồn kho vàng Thượng Hải
          </Box>

          <Box component="img" src="/assets/background/chart-shanghai.jpg" sx={{ width: '100%' }} />
        </Grid>

        {/* RIGHT */}
        <Grid size={{ xs: 12, md: 6 }}>
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
            Tồn kho vàng Comex và trạng thái đầu tư của quỹ đầu cơ
          </Box>

          <Box component="img" src="/assets/background/chart-comex.webp" sx={{ width: '100%' }} />
        </Grid>
      </Grid>

      {/* ===== DESCRIPTION ===== */}
      <Typography paragraph sx={{ mt: 3 }}>
        Tồn kho vàng tại Thượng Hải tăng nhẹ trong tuần vừa qua. Ngược lại, tồn kho vàng tại Comex
        có tuần giảm thứ 10 liên tiếp, mức giảm mạnh hơn 10 tấn so với tuần trước đó. Thị trường
        vàng tiếp tục cho thấy nhu cầu mạnh mẽ của vàng vật chất khi khối lượng tồn kho của LBMA gia
        tăng trong tháng 11. Điều này cho thấy dòng dịch chuyển vàng đang diễn ra với dòng chảy từ
        Mỹ về châu Âu và các quốc gia châu Á. Nếu tồn kho tại Comex tiếp tục giảm, đây có thể là tín
        hiệu tích cực cho giá vàng khi nhu cầu vẫn ổn định bất chấp đà tăng của giá.
      </Typography>
    </>
  );
}
