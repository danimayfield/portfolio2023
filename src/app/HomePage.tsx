'use client';

import React from 'react';
import { Box } from '@chakra-ui/react';
import {
  HomeContentSection,
  HomeHeroSection,
  HomeAboutSection,
  HomeWorksSection,
  ContactSection,
} from './HomePageComponents';

export const HomePage = () => {
  return (
    <Box as="main" bg="white">
      <HomeHeroSection />
      <HomeContentSection mt="8%" mb="20%" />
      <HomeAboutSection mb="20%" id="about" />
      <HomeWorksSection id="works" />
      <ContactSection id="contact" />
    </Box>
  );
};
