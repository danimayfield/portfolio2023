import { Box, BoxProps } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

type ContainerProps = PropsWithChildren & BoxProps;

export const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <Box px="5%" w="full" zIndex={20} position="relative" {...props}>
      {children}
    </Box>
  );
};
