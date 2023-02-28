'use client';
import React from 'react';
import {
  Box,
  BoxProps,
  Center,
  HStack,
  Link,
  Text,
  useTheme,
} from '@chakra-ui/react';
import { StyledCircle, TitleHeading } from '@shared/components';

type HomeTopSectionProps = BoxProps;

export const HomeTopSection = ({ ...props }: HomeTopSectionProps) => {
  const { colors } = useTheme();
  return (
    <Box position="relative" overflowX="clip" px="4" {...props}>
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
          <Text
            zIndex={100}
            fontFamily="belleza"
            letterSpacing={4}
            color="blacks.700"
            mt="4"
          >
            A passionate Front End Developer based in Ontario, Canada.
          </Text>
        </Box>
      </Center>

      <HStack spacing="4" mt={{ base: '35%', xl: '20%', '2xl': '15%' }}>
        <Link
          href="https://drive.google.com/file/d/18P5_n8lriWNs98pZEecMXcI6LWsyhheg/view?usp=sharing"
          target="_blank"
          textDecoration="underline"
          zIndex={100}
        >
          Resume
        </Link>
        <Text zIndex={100}> / </Text>
        <Link
          href="https://github.com/danimayfield"
          target="_blank"
          textDecoration="underline"
          zIndex={100}
        >
          GitHub
        </Link>
        <Text zIndex={100}> / </Text>
        <Link
          href="https://www.linkedin.com/in/daniella-mayfield-5a6a99222/"
          target="_blank"
          textDecoration="underline"
          zIndex={100}
        >
          LinkedIn
        </Link>
      </HStack>
    </Box>
  );
};
