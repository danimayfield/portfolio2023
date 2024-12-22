import { Box, BoxProps, useTheme, Portal } from '@chakra-ui/react';
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
    <Box overflow="hidden" w="100%" {...props}>
      {/* Portal the cirlces to the top of the DOM so they're unrestricted */}
      <Portal>
        <Box position="absolute" top="0" left="0" overflow="hidden" w="100%">
          <MotionBox
            position="relative"
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
            position="relative"
            top={-500}
            left="70%"
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
            position="relative"
            top={-600}
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
        </Box>
      </Portal>
      {children}
    </Box>
  );
}
