'use client';
import React, { useState } from 'react';
import {
  Box,
  BoxProps,
  Divider,
  Flex,
  FlexProps,
  HStack,
  Image,
  Text,
  useTheme,
} from '@chakra-ui/react';
import NextLink from 'next/link';
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
      ? colors.mint[400]
      : index === 2
      ? colors.pink[300]
      : colors.sky[400];

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
        <Flex alignItems="center" justifyContent="flex-end" mr="5%">
          {isHovered && (
            <MotionBox
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1, translateX: 20 }}
              transition={{ duration: 0.3 }}
              zIndex={20}
              position="relative"
              maxW="xs"
            >
              <Image
                src={project.imageSrc}
                alt={project.alt}
                zIndex={30}
                position="relative"
                w="full"
                h="full"
              />
              <StyledCircle
                color={circleColor}
                w="56"
                h="56"
                position="absolute"
                top="5%"
                right="10%"
                zIndex={1}
              />
            </MotionBox>
          )}
          <MotionBox
            animate={{
              translateX: isHovered ? -90 : undefined,
            }}
            position="relative"
            zIndex={50}
          >
            <Text color="blacks.800" px="5" position="relative" zIndex={50}>
              View
            </Text>
            {isHovered && (
              <MotionBox
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                bgColor="gray.200"
                w="110%"
                h="9"
                borderRadius="full"
                position="absolute"
                top="-1.5"
                left="-1"
                zIndex={40}
              />
            )}
          </MotionBox>
        </Flex>
      </Flex>
      <Divider borderColor="blacks.100" zIndex={1} />
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
        textAlign="right"
        mr="5%"
      >
        works
      </StyledText>
      {projects.map((p, i) => (
        <NextLink key={p.id} href={p.route}>
          <ProjectItem project={p} index={i} />
        </NextLink>
      ))}
    </Box>
  );
};
