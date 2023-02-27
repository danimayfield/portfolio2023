'use client';

import '@fontsource/belleza';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import React, { PropsWithChildren } from 'react';
import theme from '@theme';

type ProvidersProps = PropsWithChildren;

export function Providers({ children }: ProvidersProps) {
  return (
    <CacheProvider>
      <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
    </CacheProvider>
  );
}
