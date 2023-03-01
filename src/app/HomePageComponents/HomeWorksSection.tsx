import React from 'react';
import { Box, BoxProps, Flex, HStack, Text } from '@chakra-ui/react';
import { StyledText } from '@shared';

type HomeWorksSectionProps = BoxProps;

const ProjectItem = () => (
  <Flex
    bg="blacks.50"
    w="100%"
    h="20"
    alignContent="center"
    justifyContent="space-between"
  >
    <HStack alignItems="center" spacing="5">
      <Box borderTop="1px" w="20" />
      <Text>01</Text>
      <Text>Animal Health Link</Text>
    </HStack>
    <Flex alignItems="center" mr="5%">
      <Text>View</Text>
    </Flex>
  </Flex>
);

export const HomeWorksSection = ({ ...props }: HomeWorksSectionProps) => {
  return (
    <Box {...props}>
      <StyledText
        as="h2"
        fontSize="6xl"
        fontFamily="belleza"
        zIndex={200}
        textAlign="right"
        mr="5%"
      >
        works
      </StyledText>
      <ProjectItem />
    </Box>
  );
};
