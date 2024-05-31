import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript, Flex } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { theme } from '../theme';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Notifications />
          <Flex
            style={{
              width: '100vw',
              minHeight: 'fit-content',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Flex
              direction="column"
              align="center"
              gap="lg"
              w="100%"
              style={{ minHeight: '100vh' }}
              justify="center"
              py="md"
            >
              {children}
            </Flex>
          </Flex>
        </MantineProvider>
      </body>
    </html>
  );
}
