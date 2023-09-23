import * as React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import PeopleIcon from '@mui/icons-material/People';

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const imageURL = 'https://images3.alphacoders.com/812/812062.png';
  return (
    <html lang='en' style={{ height: '100%' }}>
      <body style={{ height: '100%' }}>
        <ThemeRegistry>
          <AppBar position='fixed' sx={{ zIndex: 2000 }}>
            <Toolbar sx={{ backgroundColor: 'background.paper' }}>
              <PeopleIcon
                sx={{ color: '#444', mr: 2, transform: 'translateY(-2px)' }}
              />
              <Typography variant='h6' noWrap component='div' color='black'>
                Rick and Morty Characters
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
            component='main'
            sx={{
              flexGrow: 1,
              mt: ['48px', '56px', '64px'],
              p: 2,
              backgroundImage: `url(${imageURL})`,
              height: '100%',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
