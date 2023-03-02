'use client';
import React, { useState } from 'react';
import {
  Box,
  BoxProps,
  Divider,
  Flex,
  FlexProps,
  HStack,
  Text,
  useTheme,
} from '@chakra-ui/react';
import { Project, projects } from './constants';
import { MotionBox, MotionText, StyledCircle, StyledText } from '@shared';

type HomeWorksSectionProps = BoxProps;

type ProjectItemProps = FlexProps & { project: Project; index: number };

const ProjectItem = ({ project, index, ...props }: ProjectItemProps) => {
  const { colors } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const { name, skills } = project;
  const circleColor =
    index === 0
      ? colors.pink[300]
      : index === 2
      ? colors.sky[400]
      : colors.mint[400];

  return (
    <>
      <Flex
        bg="blacks.50"
        w="100%"
        h="32"
        alignContent="center"
        justifyContent="space-between"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        cursor="pointer"
        {...props}
      >
        <HStack alignItems="center" spacing="5">
          <MotionBox animate={{ scaleX: isHovered ? 1.5 : undefined }}>
            <Box
              borderTop="1px"
              borderColor="blacks.400"
              w="20"
              transition="ease"
              scale={isHovered ? 2.2 : undefined}
            />
          </MotionBox>
          <MotionText
            color="blacks.500"
            animate={{
              scale: isHovered ? 1.3 : undefined,
              translateX: isHovered ? 20 : undefined,
            }}
          >
            0{index + 1}
          </MotionText>
          <MotionBox
            animate={{
              translateX: isHovered ? 60 : undefined,
              scale: isHovered ? 1.2 : undefined,
            }}
          >
            <Text color="blacks.700" fontWeight="semibold">
              {name}
            </Text>
            <Text fontSize="2xs" color="blacks.500">
              {skills.join(', ')}
            </Text>
          </MotionBox>
        </HStack>
        <Flex alignItems="center" mr="5%">
          {isHovered && (
            <MotionBox
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <StyledCircle color={circleColor} w="16" h="16" />
            </MotionBox>
          )}
          <Text ml="5" color="blacks.800" fontSize="sm" zIndex={200}>
            View
          </Text>
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
