import React from 'react';
import { Box, BoxProps, Center, Text } from '@chakra-ui/react';
import { StyledText } from '@shared';

type HomeContactSectionProps = BoxProps;

export const HomeContactSection = ({ ...props }: HomeContactSectionProps) => {
  return (
    <Box py="5%" borderTop="1px" borderColor="blacks.100" {...props}>
      <Center flexDirection="column">
        <StyledText as="h2" fontSize="6xl" fontFamily="belleza" zIndex={200}>
          contact
        </StyledText>
        <Text>danimmayfield@gmail.com</Text>
      </Center>
    </Box>
  );
};
