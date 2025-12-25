'use client';

import { z as zod } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useBoolean } from 'minimal-shared/hooks';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Typography, useMediaQuery } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

import { usePathname } from 'src/routes/hooks';

import { Iconify } from 'src/components/iconify';
import { Form, Field } from 'src/components/hook-form';

import { useAuthContext } from '../../hooks';
import { getErrorMessage } from '../../utils';
import { FormHead } from '../../components/form-head';

// ----------------------------------------------------------------------

export type SignInSchemaType = zod.infer<typeof SignInSchema>;

export const SignInSchema = zod.object({
  email: zod
    .string()
    .min(1, { message: 'Email là bắt buộc!' })
    .email({ message: 'Địa chỉ email phải là địa chỉ email hợp lệ!' }),
  password: zod
    .string()
    .min(1, { message: 'Mật khẩu là bắt buộc!' })
    .min(8, { message: 'Mật khẩu phải có ít nhất 8 ký tự!' }),
});

// ----------------------------------------------------------------------

export function JwtSignInView() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // const router = useRouter();
  const pathname = usePathname();

  const showPassword = useBoolean();

  const { checkUserSession } = useAuthContext();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const methods = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      // await signInWithPassword({ email: data.email, password: data.password });
      // await checkUserSession?.();
      // if (pathname.includes('/auth/jwt/sign-in/')) {
      //   window.location.reload();
      // }
      // router.refresh();
      // router.push(paths.dashboard.root);
    } catch (error) {
      const feedbackMessage = getErrorMessage(error);
      setErrorMessage(feedbackMessage);
    }
  });

  const renderForm = () => (
    <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
      <Field.Text
        name="email"
        label="Enail"
        placeholder="Enail"
        slotProps={{ inputLabel: { shrink: true } }}
      />

      <Box sx={{ gap: 1.5, display: 'flex', flexDirection: 'column' }}>
        {/* <Link
          component={RouterLink}
          href="#"
          variant="body2"
          color="inherit"
          sx={{ alignSelf: 'flex-end' }}
        >
          Quên mật khẩu?
        </Link> */}

        <Field.Text
          name="password"
          label="Mật khẩu"
          placeholder="8+ ký tự"
          type={showPassword.value ? 'text' : 'password'}
          slotProps={{
            inputLabel: { shrink: true },
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={showPassword.onToggle} edge="end">
                    <Iconify
                      icon={showPassword.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>

      <Button
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        loadingIndicator="Đăng nhập..."
        sx={{
          background: '#970e12',
          '&:hover': { background: '#970e12' },
          '&:active': { background: '#970e12' },
        }}
      >
        <Typography
          sx={{
            color: 'transparent',
            backgroundImage: 'linear-gradient(180deg, #fcf0ad, #d8a45b)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
          variant={isSmallScreen ? 'subtitle2' : 'h6'}
        >
          ĐĂNG NHẬP
        </Typography>
      </Button>
    </Box>
  );

  return (
    <>
      <FormHead title="ĐĂNG NHẬP" />

      {!!errorMessage && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {errorMessage}
        </Alert>
      )}

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm()}
      </Form>
    </>
  );
}
