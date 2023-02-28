import React, { PropsWithChildren } from 'react';
import { Text, TextProps } from '@chakra-ui/react';

type StyledTextProps = TextProps & PropsWithChildren;

export const StyledText = ({ children, ...props }: StyledTextProps) => {
  return (
    <Text
      fontFamily="belleza"
      letterSpacing={4}
      color="blacks.700"
      zIndex={100}
      {...props}
    >
      {children}
    </Text>
  );
};
