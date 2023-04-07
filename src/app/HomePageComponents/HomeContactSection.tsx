import React, { useState } from 'react';
import { Box, BoxProps, Center, Text, useTheme } from '@chakra-ui/react';
import { MotionBox, StyledText } from '@shared';

type HomeContactSectionProps = BoxProps;

export const HomeContactSection = ({ ...props }: HomeContactSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { colors } = useTheme();
  const emailAddress = 'danimmayfield@gmail.com';
  return (
    <Box py="5%" borderTop="1px" borderColor="blacks.100" {...props}>
      <Center flexDirection="column">
        <StyledText as="h2" fontSize="6xl" fontFamily="belleza" zIndex={200}>
          contact
        </StyledText>
        <MotionBox
          animate={{
            scale: isHovered ? 1.2 : undefined,
            color: isHovered ? colors.sky[600] : undefined,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <a href={`mailto:${emailAddress}`}>
            <Text>{emailAddress}</Text>
          </a>
        </MotionBox>
      </Center>
    </Box>
  );
};
