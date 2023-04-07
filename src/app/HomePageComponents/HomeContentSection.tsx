import React from 'react';
import {
  Box,
  BoxProps,
  Center,
  Text,
  useTheme,
  VStack,
} from '@chakra-ui/react';
import { linkHoverStyle, MotionBox, StyledCircle, StyledText } from '@shared';

type HomeContentSectionProp = BoxProps;

export const HomeContentSection = ({ ...props }: HomeContentSectionProp) => {
  const { colors } = useTheme();
  const labels = ['about', 'works', 'contact'];
  return (
    <Box position="relative" overflowX="clip" px="4" pb="10" {...props}>
      <Box
        position="absolute"
        borderTop="1px"
        borderRight="1px"
        w="90%"
        h="sm"
        left={{ base: '30', lg: '65' }}
        zIndex={0}
      />
      <MotionBox
        position="absolute"
        top={85}
        right={-40}
        animate={{ scale: 1.2 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 1,
          duration: 3,
        }}
      >
        <StyledCircle color={colors.purple[400]} w="2xs" h="2xs" />
      </MotionBox>
      <Center pt="8%" mr={{ base: '10', lg: '32' }}>
        <VStack spacing="10">
          {labels.map((label, index) => {
            return (
              <Box
                key={label}
                pl={index === 2 ? { base: '40vw', md: '65vw' } : 0}
                pr={index === 0 ? { base: '40vw', md: '65vw' } : 0}
                cursor="pointer"
                zIndex={20}
              >
                <Text fontSize="xs">0{index + 1}.</Text>
                <StyledText
                  fontSize="5xl"
                  fontFamily="belleza"
                  zIndex={20}
                  {...linkHoverStyle}
                >
                  {label}
                </StyledText>
              </Box>
            );
          })}
        </VStack>
      </Center>
    </Box>
  );
};
