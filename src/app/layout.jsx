import { Inter } from 'next/font/google';

import { businessInfoApi } from '@/api';
import { CookiesConsent, Footer, Header } from '@/components';
import { ErrorBoundary } from '@/components/ui';
import { ToastProvider, ToastViewport } from '@/components/ui/toast';
import '@/styles/globals.css';
import { cn } from '@/utils';

const font = Inter({ subsets: ['latin'], variable: '--font-app' });

const Layout = ({ children }) => {
  return (
    <html
      className='scroll-smooth'
      lang='pt-BR'
    >
      <body
        className={cn(
          'light relative flex min-h-svh flex-col items-center overflow-x-clip bg-main font-app [--header-h:calc(theme(spacing.sm)*2+theme(spacing.14))]',
          font.variable,
        )}
        id='top'
      >
        <ToastProvider>
          <Header />

          <ErrorBoundary.Provider>
            <ErrorBoundary>{children}</ErrorBoundary>
          </ErrorBoundary.Provider>

          <Footer />

          <CookiesConsent />
          <ToastViewport />
        </ToastProvider>
      </body>
    </html>
  );
};

const generateMetadata = async () => {
  const data = (await businessInfoApi.get('?populate=logo')).data;

  return {
    title: {
      default: `${data.name}`,
      template: `${data.name} - %s`,
    },
    icons: {
      icon: '/images/favicon.ico',
      apple: '/images/apple-touch-icon.png'
    },
    manifest: '/images/manifest.json',
    description: data.summary,
    openGraph: {
      title: {
        default: `${data.name}`,
        template: `${data.name} - %s`,
      },
      description: data.summary,
      images: [data.logo?.data],
    },
  };
};

export default Layout;
export { generateMetadata };
