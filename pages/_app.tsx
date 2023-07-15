import { type ComponentProps, useState } from 'react';

import { type DehydratedState, QueryClient } from '@tanstack/query-core';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import TypesafeI18nProvider from 'components/TypesafeI18nProvider';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/styles.css';
import { type I18nProp } from 'utils/helpers/server/getI18nProps';

export type PageProps = {
  dehydratedState?: DehydratedState;
  i18n?: I18nProp;
  stylesheets?: (ComponentProps<'link'> & { id: string })[];
};

export default function App({ Component, pageProps }: AppProps<PageProps>) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { useErrorBoundary: true, refetchOnWindowFocus: false },
          mutations: {
            useErrorBoundary: true,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <TypesafeI18nProvider i18n={pageProps.i18n}>
          <Head>
            {pageProps.stylesheets?.map((stylesheet) => <link key={stylesheet.id} rel="stylesheet" {...stylesheet} />)}
          </Head>

          <Component {...pageProps} />
        </TypesafeI18nProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
