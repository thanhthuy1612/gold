import Image from 'next/image';

import { Box, Stack, Container, Typography } from '@mui/material';

const contentStyle = {
  fontSize: 16,
  lineHeight: 1.7,
  textAlign: 'justify',
};

type DisclaimerSectionProps = {
  type: 'gold' | 'silver';
};


const DISCLAIMER_CONFIG = {
  gold: {
    bg: '#921b17',
    title: 'Báo cáo phân tích thị trường vàng',
    textColor: 'rgba(255,255,255,0.9)',
    icon: '/assets/background/footer-icon-gold.jpg'
  },
  silver: {
    bg: '#021f61',
    title: 'Báo cáo phân tích thị trường bạc',
    textColor: 'rgba(255,255,255,0.9)',
    icon: '/assets/background/footer-icon-silver.jpg'
  },
};


export default function DisclaimerSection({ type }: DisclaimerSectionProps) {
  const config = DISCLAIMER_CONFIG[type];
  return (
    <Box
      sx={{
        bgcolor: config.bg,
        color: config.textColor,
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
              src= {config.icon}
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
              {config.title} này được thực hiện và phát hành độc quyền bởi Tập đoàn
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
              đầy đủ và kịp thời của các thông tin này. Dữ liệu thị trường có thể thay đổi nhanh chóng
              và không lường trước được.
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
              tự đánh giá và nghiên cứu kĩ lưỡng và cân nhắc các yếu tố rủi ro trước khi đưa ra quyết 
              định đầu tư của . Tập đoàn vàng bạc đá quý Phú Quý không chịu trách nhiệm về bất kỳ tổn thất 
              hay thiệt hại nào phát sinh từ việc sử dụng hoặc dựa vào các thông tin trong báo cáo này
              để đưa ra quyết định đầu tư.
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
