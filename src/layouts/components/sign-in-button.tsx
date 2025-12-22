import type { ButtonProps } from '@mui/material';

import { Button, Typography } from '@mui/material';

import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function SignInButton({ sx, ...other }: ButtonProps) {
  return (
    <Button
      variant="text"
      component={RouterLink}
      href={CONFIG.auth.redirectPath}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', ...sx }}
      {...other}
    >
      <Iconify width={16} icon="solar:user-rounded-bold" className="icon" />
      <Typography variant="subtitle2" className="text">
        Đăng nhập
      </Typography>
    </Button>
  );
}
