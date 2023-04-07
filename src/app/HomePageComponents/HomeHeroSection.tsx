'use client';

import { Box, BoxProps, Center, HStack, Link, Text } from '@chakra-ui/react';
import { StyledText, TitleHeading } from '@shared/components';
import { linkHoverStyle } from '@shared';
import { HeroColors } from '@shared/components/styled';

type HomeHeroSectionProps = BoxProps;

export const HomeHeroSection = ({ ...props }: HomeHeroSectionProps) => {
  return (
    <HeroColors {...props}>
      <Center>
        <Box zIndex={10} mt="20%" ml="15%">
          <TitleHeading as="h1">dani</TitleHeading>
          <TitleHeading as="h1">mayfield</TitleHeading>
          <StyledText mt="4">
            a passionate front end developer based in ontario, canada.
          </StyledText>
        </Box>
      </Center>

      <HStack spacing="4" pl="2" mt={{ base: '35%', xl: '20%', '2xl': '15%' }}>
        <Link
          href="https://drive.google.com/file/d/18P5_n8lriWNs98pZEecMXcI6LWsyhheg/view?usp=sharing"
          target="_blank"
          textDecoration="underline"
          zIndex={10}
          {...linkHoverStyle}
        >
          resume
        </Link>
        <Text zIndex={10}> / </Text>
        <Link
          href="https://github.com/danimayfield"
          target="_blank"
          textDecoration="underline"
          zIndex={10}
          {...linkHoverStyle}
        >
          github
        </Link>
        <Text zIndex={10}> / </Text>
        <Link
          href="https://www.linkedin.com/in/daniella-mayfield-5a6a99222/"
          target="_blank"
          textDecoration="underline"
          zIndex={10}
          {...linkHoverStyle}
        >
          linkedIn
        </Link>
      </HStack>
    </HeroColors>
  );
};
