import { Nav, NavUl } from '../components';
import { NavList } from './nav-desktop-list';

import type { NavMainProps } from '../types';

// ----------------------------------------------------------------------

export function NavDesktop({ data, sx, ...other }: NavMainProps) {
  return (
    <Nav
      sx={[
        () => ({
          listStyleType: 'none',
          padding: 0,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <NavUl
        sx={{
          height: 1,
          flexDirection: 'row',
          alignItems: 'center',
          listStyleType: 'none',
          padding: 0,
        }}
      >
        {data.map((list) => (
          <NavList
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': { backgroundColor: '#901011', height: '100%', color: '#d8a45b' },
              '&:active': { backgroundColor: '#901011', height: '100%', color: '#d8a45b' },
            }}
            key={list.title}
            data={list}
          />
        ))}
      </NavUl>
    </Nav>
  );
}
