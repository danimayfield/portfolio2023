'use client';

import { Box, BoxProps, Center, HStack, Link, Text } from '@chakra-ui/react';
import { Container, StyledText, TitleHeading } from '@shared/components';
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
            a passionate full stack developer based in ontario, canada.
          </StyledText>
        </Box>
      </Center>
      <Container>
        <HStack spacing="4" mt={{ base: '35%', xl: '20%', '2xl': '15%' }}>
          <Link
            href="https://drive.google.com/file/d/1dkOUlRqb4oYCYrdxhR2o8Vc9uDiwrh2X/view?usp=sharing"
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
      </Container>
    </HeroColors>
  );
};
