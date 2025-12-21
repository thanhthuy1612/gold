import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

import { RouterLink } from 'src/routes/components';

import type { BreadcrumbsLinkProps } from './types';

// ----------------------------------------------------------------------

type Props = {
  disabled: boolean;
  activeLast?: boolean;
  link: BreadcrumbsLinkProps;
};

export function BreadcrumbsLink({ link, activeLast, disabled }: Props) {
  const styles = {
    typography: 'h5',
    alignItems: 'center',
    color: '#981113',
    display: 'inline-flex',
    ...(disabled && !activeLast && { cursor: 'default', pointerEvents: 'none', color: '#981113' }),
  };

  const renderContent = (
    <>
      {link.icon && (
        <Box
          component="h4"
          sx={{
            mr: 1,
            display: 'inherit',
            '& svg, & img': {
              width: 20,
              height: 20,
            },
          }}
        >
          {link.icon}
        </Box>
      )}

      <Typography variant="h5" sx={{ color: '#981113' }}>
        {link.name}
      </Typography>
    </>
  );

  if (link.href) {
    return (
      <Link variant="h5" component={RouterLink} href={link.href} sx={styles}>
        {renderContent}
      </Link>
    );
  }

  return <Box sx={styles}> {renderContent} </Box>;
}
