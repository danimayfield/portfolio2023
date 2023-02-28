'use client';

import React from 'react';
import { Box } from '@chakra-ui/react';
import { HomeTopSection } from './HomeTopSection';
import { HomeMiddleSection } from './HomeMiddleSection';

export const HomePage = () => {
  return (
    <Box as="main" bg="white">
      <HomeTopSection />
      <HomeMiddleSection mt="8%" />
    </Box>
  );
};
