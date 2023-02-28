'use client';

import React from 'react';
import { Box, Center, Text, useTheme } from '@chakra-ui/react';
import { StyledCircle, TitleHeading } from '@shared/components';

export const HomePage = () => {
  const { colors } = useTheme();
  return (
    <Box position="relative" overflowX="clip" bg="white">
      <StyledCircle
        color={colors.pink[400]}
        position="absolute"
        top={-40}
        left={-40}
      />
      <StyledCircle
        color={colors.mint[400]}
        position="absolute"
        top={-5}
        right={-250}
        w="2xl"
        h="2xl"
      />
      <StyledCircle
        color={colors.sky[400]}
        position="absolute"
        top={550}
        left={40}
        w="md"
        h="md"
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
