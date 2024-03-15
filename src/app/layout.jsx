import { Inter } from 'next/font/google';

import { businessInfoApi } from '@/api';
import { Footer, Header } from '@/components';
import { ErrorBoundary } from '@/components/ui';
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
          'light relative flex min-h-svh flex-col items-center overflow-x-clip bg-main font-app [--header-h:calc(theme(spacing.sm)*2+theme(spacing.10))]',
          font.variable,
        )}
        id='top'
      >
        <Header />

<ErrorBoundary.Provider>

<ErrorBoundary>
          {children}
</ErrorBoundary>
</ErrorBoundary.Provider>

        <Footer />
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
    icons: data.logo?.data.src,
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
