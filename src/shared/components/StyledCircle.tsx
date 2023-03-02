import React from 'react';
import { Box, BoxProps, ColorProps } from '@chakra-ui/react';

export type StyledCircleProps = BoxProps & {
  color: ColorProps['color'];
  bgColor?: ColorProps['color'];
};

export const StyledCircle = ({
  color,
  bgColor = 'white',
  ...props
}: StyledCircleProps) => {
  return (
    <Box
      w="xl"
      h="xl"
      bgColor={color}
      borderRadius="full"
      border="0px"
      boxShadow={`-35px 55px 140px ${color},
        0 0 130px ${color},
        0 0 120px ${color},
        0 0 110px ${color},
        0 0 100px ${color},
        0 0 90px ${color},
        0 0 80px ${color},
        0 0 70px ${color},
        0 0 60px ${color},
        0 0 50px ${color},
        0 0 40px ${color},
        0 0 30px ${color},
        0 0 20px ${color},
        0 0 10px ${bgColor};`}
      zIndex={2}
      {...props}
    />
  );
};
