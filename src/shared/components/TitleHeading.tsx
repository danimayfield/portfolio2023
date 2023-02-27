import { Heading, HeadingProps } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

type TitleHeadingProps = HeadingProps & PropsWithChildren;

export const TitleHeading = ({ children, ...props }: TitleHeadingProps) => {
  return (
    <Heading
      size="4xl"
      fontFamily="belleza"
      color="blacks.800"
      letterSpacing={5}
      fontWeight="medium"
      zIndex={100}
      {...props}
    >
      {children}
    </Heading>
  );
};