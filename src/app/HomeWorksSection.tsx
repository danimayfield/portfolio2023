import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { StyledText } from '@shared';

type HomeWorksSectionProps = BoxProps;

export const HomeWorksSection = ({ ...props }: HomeWorksSectionProps) => {
  return (
    <Box {...props}>
      <StyledText as="h2" fontSize="6xl" fontFamily="belleza" zIndex={200}>
        works
      </StyledText>
    </Box>
  );
};
