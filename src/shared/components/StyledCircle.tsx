import React from 'react';
import { Box, BoxProps, ColorProps } from '@chakra-ui/react';

type StyledCircleProps = BoxProps & {
  color?: ColorProps;
  bgColor?: ColorProps;
};

export const StyledCircle = ({
  color = 'blue.500',
  bgColor = 'white',
  ...props
}: StyledCircleProps) => {
  return (
    <Box
      w="3xl"
      h="3xl"
      bgColor={color}
      // bg={`radial-gradient(ellipse at center center, ${color} 10%, ${bgColor} 70%, ${bgColor} 100%)`}
      borderRadius="full"
      border={`2px solid ${bgColor}`}
      boxShadow={`inset -35px 55px 100px ${bgColor},
        inset 0 0 90px ${bgColor},
        inset 0 0 80px ${bgColor},
        inset 0 0 70px ${bgColor},
        inset 0 0 60px ${bgColor},
        inset 0 0 50px ${bgColor},
        inset 0 0 40px ${bgColor},
        inset 0 0 30px ${bgColor},
        inset 0 0 20px ${bgColor},
        inset 0 0 10px ${color};`}
      {...props}
    />
  );
};
