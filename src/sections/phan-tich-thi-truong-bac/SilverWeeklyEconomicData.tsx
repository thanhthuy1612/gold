import { Box, Grid, Typography } from '@mui/material';

const thStyle = {
  p: 1,
  border: '1px solid #999',
  fontWeight: 700,
  fontSize: 16,
  textAlign: 'center',
  borderTop: 0,
  '&:first-child': {
    borderLeft: 'none', // Không có border trái cho phần tử đầu tiên
  },
  '&:last-child': {
    borderRight: 'none', // Không có border phải cho phần tử cuối cùng
  },
};

const tdStyle = {
  p: 1,
  border: '1px solid #999',
  fontSize: 16,
  '&:first-child': {
    borderLeft: 'none', // Không có border trái
  },
  '&:last-child': {
    borderRight: 'none', // Không có border phải
  },
};

export default function WeeklyEconomicData() {
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
          Sự kiện tuần tới
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

      <Grid container spacing={2}>
        {/* ===== TABLE ===== */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            sx={{
              border: '1px solid',
              borderRadius: 1,
              overflow: 'hidden',
            }}
          >
            {/* Table title */}
            <Box sx={{ bgcolor: '#19f0f0' }}>
              <Box
                sx={{
                  bgcolor: '#eee',
                  textAlign: 'center',
                  fontWeight: 700,
                  border: '1px solid #000',
                  borderRadius: 1,
                  py: 1,
                }}
              >
                Dữ liệu kinh tế
              </Box>
            </Box>

            <Box
              component="table"
              sx={{ width: '100%', borderCollapse: 'collapse', borderRadius: 1 }}
            >
              <Box component="thead">
                <Box component="tr" sx={{ bgcolor: '#19f0f0' }}>
                  <Box component="th" sx={thStyle}>
                    Ngày
                  </Box>
                  <Box component="th" sx={thStyle}>
                    Sự kiện
                  </Box>
                  <Box component="th" sx={thStyle}>
                    Quốc gia
                  </Box>
                  <Box component="th" sx={thStyle}>
                    Dữ liệu kỳ trước
                  </Box>
                </Box>
              </Box>

              <Box component="tbody">
                {/* ===== 16/12/2025 (rowSpan = 3) ===== */}
                <Box component="tr">
                  <Box component="td" sx={tdStyle} rowSpan={3}>
                    16/12/2025
                  </Box>
                  <Box component="td" sx={tdStyle}>
                    Thu nhập trung bình theo giờ tháng 11 (MoM)
                  </Box>
                  <Box component="td" sx={tdStyle} align="center">
                    Mỹ
                  </Box>
                  <Box component="td" sx={tdStyle} align="right" fontWeight={700}>
                    0,2%
                  </Box>
                </Box>

                <Box component="tr">
                  <Box component="td" sx={tdStyle}>
                    Bảng lương phi nông nghiệp tháng 11
                  </Box>
                  <Box component="td" sx={tdStyle} align="center">
                    Mỹ
                  </Box>
                  <Box component="td" sx={tdStyle} align="right" fontWeight={700}>
                    119 nghìn việc làm
                  </Box>
                </Box>

                <Box component="tr">
                  <Box component="td" sx={tdStyle}>
                    Tỷ lệ thất nghiệp tháng 11
                  </Box>
                  <Box component="td" sx={tdStyle} align="center">
                    Mỹ
                  </Box>
                  <Box component="td" sx={tdStyle} align="right" fontWeight={700}>
                    4,4%
                  </Box>
                </Box>

                {/* ===== 17/12/2025 (rowSpan = 1) ===== */}
                <Box component="tr">
                  <Box component="td" sx={tdStyle}>
                    17/12/2025
                  </Box>
                  <Box component="td" sx={tdStyle}>
                    CPI tháng 11 (YoY)
                  </Box>
                  <Box component="td" sx={tdStyle} align="center">
                    Anh
                  </Box>
                  <Box component="td" sx={tdStyle} align="right" fontWeight={700}>
                    3,6%
                  </Box>
                </Box>

                {/* ===== 18/12/2025 (rowSpan = 2) ===== */}
                <Box component="tr">
                  <Box component="td" sx={tdStyle} rowSpan={2}>
                    18/12/2025
                  </Box>
                  <Box component="td" sx={tdStyle}>
                    Quyết định lãi suất
                  </Box>
                  <Box component="td" sx={tdStyle} align="center">
                    Anh
                  </Box>
                  <Box component="td" sx={tdStyle} align="right" fontWeight={700}>
                    4,00%
                  </Box>
                </Box>

                <Box component="tr">
                  <Box component="td" sx={tdStyle}>
                    CPI tháng 11 (YoY)
                  </Box>
                  <Box component="td" sx={tdStyle} align="center">
                    Mỹ
                  </Box>
                  <Box component="td" sx={tdStyle} align="right" fontWeight={700}>
                    3,0%
                  </Box>
                </Box>

                {/* ===== 19/12/2025 (rowSpan = 2) ===== */}
                <Box component="tr">
                  <Box component="td" sx={{ ...tdStyle, borderBottom: 'none' }} rowSpan={2}>
                    19/12/2025
                  </Box>
                  <Box component="td" sx={tdStyle}>
                    Quyết định lãi suất
                  </Box>
                  <Box component="td" sx={tdStyle} align="center">
                    Nhật Bản
                  </Box>
                  <Box component="td" sx={tdStyle} align="right" fontWeight={700}>
                    0,50%
                  </Box>
                </Box>

                <Box component="tr">
                  <Box component="td" sx={{ ...tdStyle, borderBottom: 'none' }}>
                    PCE tháng 10 (YoY)
                  </Box>
                  <Box component="td" sx={{ ...tdStyle, borderBottom: 'none' }} align="center">
                    Mỹ
                  </Box>
                  <Box
                    component="td"
                    sx={{ ...tdStyle, borderBottom: 'none' }}
                    align="right"
                    fontWeight={700}
                  >
                    2,8%
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* ===== IMPACT ===== */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              height: '100%',
            }}
          >
            <Box
              sx={{
                bgcolor: '#eee',
                border: '1px solid #000',
                borderRadius: 1,
                textAlign: 'center',
                fontWeight: 700,
                px: 2,
                py: 1,
              }}
            >
              Ảnh hưởng đến giá bạc
            </Box>

            <Box sx={{ p: 2 }}>
              <Typography fontSize={16} paragraph>
                Trong tuần này, thị trường sẽ tập trung vào các dữ liệu về thị trường lao động và
                lạm phát tại Mỹ. Đây sẽ là căn cứ để Fed có thể đưa ra chính sách tiền tệ rõ ràng
                hơn trong năm 2026.
              </Typography>

              <Typography fontSize={16} paragraph>
                Sau cuộc họp vào tháng 12 vừa qua, các thành viên FOMC vẫn duy trì quan điểm thận
                trọng. Nếu dữ liệu lao động và lạm phát tiếp tục cho thấy kinh tế ổn định, Fed có
                thể trì hoãn hỗ trợ cho đà tăng của kim loại quý. Ngược lại, đà tăng USD có thể giới
                hạn đà tăng của vàng do chi phí vốn neo cao.
              </Typography>

              <Typography fontSize={16}>
                Bên cạnh đó, việc quyết định lãi suất của BoE và BoJ có thể tác động đến sức mạnh
                của đô la trong tuần này.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
