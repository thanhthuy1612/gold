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
          Dữ liệu về bạc
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
            Tồn kho bạc Thượng Hải
          </Box>

          <Box component="img" src="/assets/background/chart-silver-shanghai.jpg" sx={{ width: '100%' }} />
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
            Tồn kho bạc Comex và trạng thái đầu tư của quỹ đầu cơ
          </Box>

          <Box component="img" src="/assets/background/chart-silver-comex.jpg" sx={{ width: '100%' }} />
        </Grid>
      </Grid>

      {/* ===== DESCRIPTION ===== */}
      <Typography paragraph sx={{ mt: 3 }}>
        Đà mua bạc bổ sung tồn kho tại Trung Quốc đã hỗ trợ đà tăng mạnh mẽ của giá bạc. Tồn kho 
        bạc tại Thượng Hải tăng hơn 133 tấn trong tuần vừa qua, đây là tuần tăng thứ 2 liên tiếp 
        trong tháng 12. Ngược lại, tồn kho bạc tại Comex tiếp tục giảm trong tuần vừa qua, giảm 
        115 tấn trong tuần, kéo tồn kho bạc về mức thấp nhất kể từ tháng 2 năm nay. Dòng chảy bạc 
        tiếp tục dịch chuyển ra khỏi Mỹ.
      </Typography>
    </>
  );
}
