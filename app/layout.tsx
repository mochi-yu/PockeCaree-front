import { Box, Container, Paper } from '@mui/material';
import type { Metadata } from 'next';
import { Header } from '@/app/(components)/(layout)/header';
import { Footer } from '@/app/(components)/(layout)/footer';
import ThemeRegistry from './theme_registry';

export const metadata: Metadata = {
  title: 'ポケキャリ',
  description: '就活の情報管理を便利にするアプリケーションです。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#009D8A" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <ThemeRegistry options={{ key: 'mui' }}>
          <Box sx={{ bgcolor: '#F4F4F4', minHeight: '100vh' }}>
            <Container maxWidth="xs" sx={{ padding: 0 }}>
              <Paper sx={{ px: 0, bgcolor: 'white', minHeight: '100vh' }}>
                <Header />
                {children}
                <Footer />
              </Paper>
            </Container>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
