import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { drukTrial, neueHaasDisplay } from '@/components/fonts';
import '../public/global.css';

export const metadata = {
  title: 'Calimero',
  description: 'Calimero! The nextjs app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${neueHaasDisplay.className} ${drukTrial.className}`}>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
