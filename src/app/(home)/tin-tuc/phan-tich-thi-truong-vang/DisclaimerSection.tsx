import { Box, Typography } from '@mui/material';

export default function DisclaimerSection() {
  return (
    <Box
      sx={{
        mt: 6,
        bgcolor: '#8c0302',
        color: '#fff',
        px: { xs: 2, md: 4 },
        py: 4,
      }}
    >
      {/* TITLE */}
      <Typography
        variant="h6"
        fontWeight={700}
        align="center"
        gutterBottom
        sx={{ textTransform: 'uppercase' }}
      >
        Điều khoản sử dụng và miễn trừ trách nhiệm
      </Typography>

      {/* CONTENT */}
      <Typography variant="body2" paragraph>
        Báo cáo phân tích thị trường vàng này được thực hiện và phát hành độc quyền
        bởi Tập đoàn Vàng bạc Đá quý Phú Quý. Mọi quyền sở hữu trí tuệ liên quan đến
        nội dung báo cáo, bao gồm nhưng không giới hạn dữ liệu, biểu đồ, nhận định
        và phân tích, đều thuộc về Tập đoàn Vàng bạc Đá quý Phú Quý.
      </Typography>

      <Typography variant="body2" paragraph>
        Nghiêm cấm mọi hành vi sao chép, phân phối, tái bản, sử dụng vì mục đích
        thương mại hoặc bất kỳ hình thức sử dụng nào khác mà không có sự đồng ý
        bằng văn bản của Tập đoàn Vàng bạc Đá quý Phú Quý.
      </Typography>

      <Typography variant="body2" paragraph>
        Các dữ liệu và thông tin được sử dụng trong báo cáo này được thu thập từ
        các nguồn đáng tin cậy vào thời điểm thực hiện. Tuy nhiên, chúng tôi không
        đảm bảo tính chính xác, đầy đủ và kịp thời của các thông tin này.
      </Typography>

      <Typography variant="body2" paragraph>
        Báo cáo phân tích thị trường vàng này chỉ mang tính chất tham khảo và cung
        cấp thông tin tại thời điểm phát hành. Đây không phải là khuyến nghị đầu tư
        hay khuyến nghị bất kỳ loại hình đầu tư nào.
      </Typography>

      <Typography variant="body2" paragraph>
        Việc đưa ra quyết định đầu tư là trách nhiệm cá nhân của mỗi nhà đầu tư.
        Nhà đầu tư cần tự đánh giá, nghiên cứu kỹ lưỡng và cân nhắc các yếu tố rủi ro
        trước khi đưa ra quyết định đầu tư.
      </Typography>

      <Typography variant="body2">
        Bằng việc truy cập và sử dụng báo cáo này, Quý vị xác nhận đã đọc, hiểu và
        đồng ý tuân thủ các Điều khoản sử dụng và Tuyên bố miễn trừ trách nhiệm này.
      </Typography>
    </Box>
  );
}
