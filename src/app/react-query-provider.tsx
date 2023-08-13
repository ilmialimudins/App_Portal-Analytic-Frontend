'use client';

import React from 'react';
import { useHydrateAtoms } from 'jotai/react/utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClientAtom } from 'jotai-tanstack-query';

import { DevTools } from 'jotai-devtools';
import { Provider } from 'jotai';

const HydrateAtoms = ({
  children,
  client,
}: {
  client: QueryClient;
  children: JSX.Element;
}): JSX.Element => {
  useHydrateAtoms([[queryClientAtom, client]]);
  return children;
};

const QueryProviders = ({ children }: { children: JSX.Element }) => {
  const [client] = React.useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } }),
  );

  return (
    <QueryClientProvider client={client}>
      {/* Warning: Put provider in root layout might cause performance issue since all atoms were shared globally, so wisely seperate store provider*/}
      <Provider>
        <DevTools />

        <HydrateAtoms client={client}>{children}</HydrateAtoms>
      </Provider>
      ;
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};

export default QueryProviders;
