'use client';

import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Box,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { Home, Apartment, CalendarMonth, Newspaper } from '@mui/icons-material';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Footer() {
  const pathname = usePathname();

  const footerButtonsList = [
    { label: 'トップ', icon: <Home />, link_to: '/' },
    { label: '企業一覧', icon: <Apartment />, link_to: '/company' },
    { label: 'スケジュール', icon: <CalendarMonth />, link_to: '/schedule' },
    { label: 'ニュース', icon: <Newspaper />, link_to: '/news' },
  ];

  const footerButtons = footerButtonsList.map((elm) => {
    return (
      <BottomNavigationAction
        key={elm.label}
        value={elm.link_to}
        label={
          <Typography fontSize={14} marginX={'-10px'}>
            {elm.label}
          </Typography>
        }
        icon={elm.icon}
        LinkComponent={Link}
        href={elm.link_to}
      />
    );
  });

  return (
    <Box sx={{ pb: 10 }}>
      <Stack justifyContent="center" alignItems="center">
        <Container sx={{ position: 'fixed', bottom: 0 }} maxWidth="xs">
          <Paper sx={{ px: 0 }}>
            <BottomNavigation
              showLabels
              value={pathname}
              children={footerButtons}
              sx={{ bgcolor: '#CDE8E1' }}
            />
          </Paper>
        </Container>
      </Stack>
    </Box>
  );
}
