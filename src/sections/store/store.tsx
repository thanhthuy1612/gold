'use client';

// ----------------------------------------------------------------------

import { Card, Grid, Stack, useTheme, Typography, useMediaQuery } from '@mui/material';

const listFooter = [
  {
    title: 'Chất lượng',
    descrition: 'Gia công & sản xuất miếng bạc đạt chuẩn hàm lượng.',
    img: '/assets/background/1.png',
  },
  {
    title: 'Uy tín',
    descrition: 'Giao dịch & mua bán bạc miếng minh bạch.',
    img: '/assets/background/2.png',
  },
  {
    title: 'Giá trị bền vững',
    descrition: 'Mang lại giá trị tích luỹ, đầu tư an toàn & hiệu quả.',
    img: '/assets/background/3.png',
  },
];
export function Store() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const renderHeader = () => (
    <Stack display="flex" flexDirection="row" gap={2} flexWrap="wrap" alignItems="center">
      <img src="/logo/logo.png" width="100" height="auto" />
      <Typography variant={isSmallScreen ? 'h3' : 'h2'} sx={{ color: '#991113' }}>
        THƯƠNG HIỆU TÀI LỘC
      </Typography>
    </Stack>
  );
  const renderBody = () => (
    <Stack
      display="flex"
      justifyContent="flex-start"
      alignItems="start"
      gap={2}
      sx={{ textAlign: 'justify', mt: 3 }}
    >
      <Typography>
        Công ty <strong>Vàng Bạc Đá Quý Tài Lộc</strong> là thương hiệu uy tín chuyên về{' '}
        <strong>bạc miếng - bạc trang sức - bạc mỹ nghệ</strong>, được xây dựng trên nền tảng kinh
        nghiệm và giá trị vững bền của ngành kim hoàn Việt Nam. Với định hướng tập trung vào thị
        trường bạc đầy tiềm năng, Tài Lộc nhanh chóng trở thành địa chỉ tin cậy cho khách hàng có
        <strong>nhu cầu đầu tư, tích trừ và sở hữu các sản phẩm bạc chất lượng cao.</strong>
      </Typography>
      <Typography>
        Mỗi sản phẩm tại Tài Lộc đều là kết quả của sự kết hợp giừa tay nghề kim hoàn tinh xảo và
        quy trình sản xuất hiện đại, đảm bảo độ chuẩn xác, tính thẩm mỳ và giá trị bền vững theo
        thời gian. Chúng tôi cam kết mang đến cho khách hàng các sản phẩm bạc
        <strong> đẹp - chuẩn - minh bạch</strong>, phù hợp cho cả nhu cầu đầu tư lẫn sử dụng.
      </Typography>
      <Typography>
        Với tầm nhìn trở thành một trong nhừng đơn vị dẫn đầu trong linh vực bạc tại Việt Nam,{' '}
        <strong>Vàng Bạc Đá Quý Tài Lộc</strong> luôn chú trọng nâng cao chất lượng dịch vụ, đầu tư
        trang thiết bị và mở rộng danh mục sản phẩm, nhàm đáp ứng nhu cầu ngày càng cao của khách
        hàng. Mỗi giao dịch tại Tài Lộc đều được thực hiện theo triết lý:{' '}
        <strong>Uy tín - Tận tâm - Giá trị thật.</strong>
      </Typography>
    </Stack>
  );
  const renderFooter = () => (
    <Grid container spacing={3} sx={{ mt: 5 }}>
      {listFooter.map((item) => (
        <Grid size={{ xs: 12, md: 4 }} key={item.title}>
          <Card sx={{ py: 2, px: 5, background: '#991113', width: '100%', height: '100%' }}>
            <img src={item.img} width="20" height="auto" />
            <Typography
              sx={{
                color: 'transparent',
                backgroundImage: 'linear-gradient(180deg, #fcf0ad, #d8a45b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                mt: 0.5,
              }}
              variant="h6"
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                color: 'white',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                whiteSpace: 'normal',
                mt: 1,
              }}
              variant="subtitle2"
            >
              {item.descrition}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
  return (
    <>
      {renderHeader()}
      {renderBody()}
      {renderFooter()}
    </>
  );
}
