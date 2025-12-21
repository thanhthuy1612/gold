import { Box, Stack, Container, Typography } from '@mui/material';

export default function DisclaimerSection() {
  return (
    <Box
      sx={{
        mt: 8,
        bgcolor: '#8c0302',
        color: '#fff',
        py: 5,
      }}
    >
      {/* INNER CONTAINER */}
      <Container maxWidth="lg">
        {/* HEADER */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 4 }}
        >
          {/* ICON */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src="/assets/background/footer-icon.jpg"
              sx={{ width: 48, height: 48 }} // ← Tăng từ 24x24 lên 48x48
            />
          </Box>

          {/* TITLE */}
          <Typography variant="h6" fontWeight={700} sx={{ textTransform: 'uppercase' }}>
            Điều khoản sử dụng và miễn trừ trách nhiệm
          </Typography>
        </Stack>

        {/* CONTENT */}
        <Stack spacing={2}>
          <Typography variant="body2">
            Báo cáo phân tích thị trường vàng này được thực hiện và phát hành độc quyền bởi Tập đoàn
            Vàng bạc Đá quý Phú Quý. Mọi quyền sở hữu trí tuệ liên quan đến nội dung báo cáo, bao
            gồm nhưng không giới hạn dữ liệu, biểu đồ, nhận định và phân tích, đều thuộc về Tập đoàn
            Vàng bạc Đá quý Phú Quý.
          </Typography>

          <Typography variant="body2">
            <strong>
              Nghiêm cấm mọi hành vi sao chép, phân phối, tái bản, sử dụng vì mục đích thương mại
              hoặc bất kỳ hình thức sử dụng nào khác
            </strong>{' '}
            mà không có sự đồng ý bằng văn bản của Tập đoàn Vàng bạc Đá quý Phú Quý.
          </Typography>

          <Typography variant="body2">
            Các dữ liệu và thông tin được sử dụng trong báo cáo này được thu thập từ các nguồn đáng
            tin cậy tại thời điểm thực hiện. Tuy nhiên, chúng tôi không đảm bảo tính chính xác, đầy
            đủ và kịp thời của các thông tin này.
          </Typography>

          <Typography variant="body2">
            Báo cáo phân tích thị trường vàng này chỉ mang tính chất tham khảo.
            <strong>
              {' '}
              Đây không phải là khuyến nghị đầu tư hay khuyến nghị mua, bán hoặc nắm giữ bất kỳ loại
              tài sản nào.
            </strong>
          </Typography>

          <Typography variant="body2">
            Việc đưa ra quyết định đầu tư là trách nhiệm cá nhân của mỗi nhà đầu tư. Nhà đầu tư cần
            tự đánh giá và cân nhắc rủi ro trước khi đưa ra quyết định.
          </Typography>

          <Typography variant="body2">
            <strong>
              Bằng việc truy cập và sử dụng báo cáo này, Quý vị xác nhận đã đọc, hiểu và đồng ý tuân
              thủ các Điều khoản sử dụng và Tuyên bố miễn trừ trách nhiệm này.
            </strong>
          </Typography>
        </Stack>
        {/* WHITE DIVIDER */}
        <Box
          sx={{
            mt: 4,
            mx: 'auto',
            width: '100%',
            maxWidth: 600,
            height: 1,
            color: '#fff',
          }}
        />
      </Container>
    </Box>
  );
}
