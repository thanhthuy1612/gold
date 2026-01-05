import { Box, Stack, Container, Typography } from '@mui/material';
import Image from 'next/image';
const contentStyle = {
  fontSize: 16,
  lineHeight: 1.7,
  textAlign: 'justify',
};

export default function DisclaimerSection() {
  return (
    <Box
      sx={{
        bgcolor: '#921b17',
        color: 'rgba(255,255,255,0.9)',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            width: 'fit-content',
            maxWidth: 900,
            mx: 'auto',
          }}
        >
          {/* HEADER */}
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{ mb: 2 }}
          >
            <Image
              src="/assets/background/footer-icon.jpg"
              alt=""
              width={96}
              height={96}
            />

            <Typography
              sx={{
                fontSize: 30,
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.85)',
                whiteSpace: 'nowrap',
              }}
            >
              Điều khoản sử dụng và miễn trừ trách nhiệm
            </Typography>
          </Stack>

          {/* CONTENT */}
          <Stack spacing={2}>
            <Typography sx={contentStyle}>
              Báo cáo phân tích thị trường vàng này được thực hiện và phát hành độc quyền bởi Tập đoàn
              Vàng bạc Đá quý Phú Quý. Mọi quyền sở hữu trí tuệ liên quan đến nội dung báo cáo, bao gồm
              nhưng không giới hạn dữ liệu, biểu đồ, nhận định và phân tích, đều thuộc về Tập đoàn
              Vàng bạc Đá quý Phú Quý.
            </Typography>

            <Typography sx={contentStyle}>
              <strong>
                Nghiêm cấm mọi hành vi sao chép, phân phối, tái bản, sử dụng vì mục đích thương mại
                hoặc bất kỳ hình thức sử dụng nào khác
              </strong>{' '}
              mà không có sự đồng ý bằng văn bản của Tập đoàn Vàng bạc Đá quý Phú Quý.
            </Typography>

            <Typography sx={contentStyle}>
              Các dữ liệu và thông tin được sử dụng trong báo cáo này được thu thập từ các nguồn đáng
              tin cậy tại thời điểm thực hiện. Tuy nhiên, chúng tôi không đảm bảo tính chính xác,
              đầy đủ và kịp thời của các thông tin này.
            </Typography>

            <Typography sx={contentStyle}>
              Báo cáo phân tích thị trường vàng này chỉ mang tính chất tham khảo.
              <strong>
                {' '}
                Đây không phải là khuyến nghị đầu tư hay khuyến nghị mua, bán hoặc nắm giữ bất kỳ
                loại tài sản nào.
              </strong>
            </Typography>

            <Typography sx={contentStyle}>
              Việc đưa ra quyết định đầu tư là trách nhiệm cá nhân của mỗi nhà đầu tư. Nhà đầu tư cần
              tự đánh giá và cân nhắc rủi ro trước khi đưa ra quyết định.
            </Typography>

            <Typography sx={{ ... contentStyle, fontWeight: 600 }}>
              Bằng việc truy cập và sử dụng báo cáo này, Quý vị xác nhận đã đọc, hiểu và đồng ý tuân
              thủ các Điều khoản sử dụng và Tuyên bố miễn trừ trách nhiệm này.
            </Typography>

            <Box
              sx={{
                width: '100%',
                height: '1px',
                bgcolor: '#fff',
                maxWidth: 800,
                mt: 3,
                mx: 'auto',
              }}
            />
          </Stack>
        </Box>
      </Container>
    </Box>
    
  );
}
