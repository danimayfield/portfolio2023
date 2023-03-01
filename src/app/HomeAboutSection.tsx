import React from 'react';
import { Box, BoxProps, Text } from '@chakra-ui/react';
import { StyledText } from '@shared';

type HomeAboutSectionProps = BoxProps;

export const HomeAboutSection = ({ ...props }: HomeAboutSectionProps) => {
  return (
    <Box mx="20%" {...props}>
      <StyledText as="h2" fontSize="6xl" fontFamily="belleza" zIndex={200}>
        hi, i&apos;m dani
      </StyledText>
      <Text mx="15%" mt="10" lineHeight="">
        A web developer with a passion for learning and growth. I believe that
        in this ever-changing industry, you can never stop pushing yourself to
        acquire new skills and knowledge. When I&apos;m not coding, I love to
        indulge in a good book and a cup of tea, and I have a keen eye for style
        and aesthetics. For me, bringing ideas to life through clean and
        accessible code is a deeply satisfying experience. I&apos;m a strong
        believer in collaboration and working with others to create products
        that I&apos;m proud of.
      </Text>
    </Box>
  );
};
