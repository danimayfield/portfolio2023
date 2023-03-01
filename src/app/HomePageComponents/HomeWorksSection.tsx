import React from 'react';
import { Box, BoxProps, Divider, Flex, HStack, Text } from '@chakra-ui/react';
import { Project, projects } from './constants';
import { StyledText } from '@shared';

type HomeWorksSectionProps = BoxProps;

type ProjectItemProps = { project: Project; index: number };

const ProjectItem = ({ project, index }: ProjectItemProps) => {
  const { name } = project;
  return (
    <>
      <Flex
        bg="blacks.50"
        w="100%"
        h="20"
        alignContent="center"
        justifyContent="space-between"
      >
        <HStack alignItems="center" spacing="5">
          <Box borderTop="1px" borderColor="blacks.400" w="20" />
          <Text color="blacks.500">0{index + 1}</Text>
          <Text color="blacks.700" fontWeight="semibold">
            {name}
          </Text>
        </HStack>
        <Flex alignItems="center" mr="5%">
          <Text>View</Text>
        </Flex>
      </Flex>
      <Divider borderColor="blacks.100" />
    </>
  );
};

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
      {projects.map((p, i) => (
        <ProjectItem key={p.name} project={p} index={i} />
      ))}
    </Box>
  );
};
