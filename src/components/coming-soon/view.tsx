'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { ComingSoonIllustration } from 'src/assets/illustrations';

// ----------------------------------------------------------------------

export function ComingSoonView() {
  return (
    <Container sx={{ textAlign: 'center', py: 5 }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Sắp ra mắt!
      </Typography>

      <Typography sx={{ color: 'text.secondary' }}>
        Chúng tôi hiện đang nỗ lực hoàn thiện trang này!
      </Typography>

      <ComingSoonIllustration sx={{ my: { xs: 5, sm: 10 } }} />
    </Container>
  );
}
