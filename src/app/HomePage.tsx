'use client';

import React from 'react';
import { Box } from '@chakra-ui/react';
import { HomeHeroSection } from './HomeHeroSection';
import { HomeContentSection } from './HomeContentSection';
import { HomeAboutSection } from './HomeAboutSection';

export const HomePage = () => {
  return (
    <Box as="main" bg="white">
      <HomeHeroSection />
      <HomeContentSection mt="8%" mb="15%" />
      <HomeAboutSection mb="15%" />
    </Box>
  );
};
