'use client';

import React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import { StyledCircle, TitleHeading } from '@shared/components';

export const HomePage = () => {
  return (
    <Box position="relative" overflowX="clip">
      <StyledCircle color="#E9B7CE" position="absolute" top={-40} left={-40} />
      <StyledCircle
        color="#caefd7"
        position="absolute"
        top={-5}
        right={-250}
        w="4xl"
        h="4xl"
      />
      <StyledCircle
        color="#d3f3f1"
        position="absolute"
        top={550}
        left={40}
        w="xl"
        h="xl"
      />
      <Center>
        <Box zIndex={100} mt="20%" ml="15%">
          <TitleHeading as="h1">DANI</TitleHeading>
          <TitleHeading as="h1">MAYFIELD</TitleHeading>
          <Text zIndex={100} fontFamily="belleza" color="blacks.700" mt="2">
            FRONT END DEVELOPER
          </Text>
        </Box>
      </Center>
    </Box>
  );
};
