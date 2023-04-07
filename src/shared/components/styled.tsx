import { Box, BoxProps, useTheme } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { MotionBox } from './motion-chakra';
import { StyledCircle } from './StyledCircle';

type HeroColorsProps = BoxProps &
  PropsWithChildren & {
    color1?: string;
    color2?: string;
    color3?: string;
  };

export function HeroColors({
  color1,
  color2,
  color3,
  children,
  ...props
}: HeroColorsProps) {
  const { colors } = useTheme();
  return (
    <Box position="relative" overflowX="clip" px="4" {...props}>
      <MotionBox
        position="absolute"
        top={-40}
        left={-40}
        animate={{ scale: 1.4 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 2,
          duration: 6,
        }}
      >
        <StyledCircle color={color1 ?? colors.pink[400]} />
      </MotionBox>
      <MotionBox
        position="absolute"
        top={-5}
        right={-250}
        w="2xl"
        h="2xl"
        animate={{ scale: 1.4 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 2,
          duration: 4,
        }}
      >
        <StyledCircle color={color2 ?? colors.mint[400]} />
      </MotionBox>
      <MotionBox
        position="absolute"
        top={550}
        left={40}
        w="md"
        h="md"
        animate={{ scale: 1.2 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 1,
          duration: 2,
        }}
      >
        <StyledCircle color={color3 ?? colors.sky[400]} />
      </MotionBox>
      {children}
    </Box>
  );
}
