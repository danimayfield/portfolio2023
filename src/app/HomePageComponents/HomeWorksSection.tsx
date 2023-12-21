'use client';
import { useState } from 'react';
import {
  Box,
  BoxProps,
  Divider,
  Flex,
  FlexProps,
  HStack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Project, Projects, projectTeasers } from './constants';
import {
  Container,
  MotionBox,
  MotionText,
  StyledCircle,
  StyledText,
} from '@shared';

type HomeWorksSectionProps = BoxProps;

type ProjectItemProps = FlexProps & { project: Project; index: number };

const ProjectItem = ({ project, index, ...props }: ProjectItemProps) => {
  const isLargerThanTablet =
    typeof window !== 'undefined' ? window.outerWidth > 768 : true;
  const [isHovered, setIsHovered] = useState(false);
  const { name, skills, color } = project;

  const isSmallerImage = name === Projects.Booker;

  if (!isLargerThanTablet) {
    return (
      <>
        <Flex
          bg="blacks.50"
          w="100%"
          h="32"
          alignContent="center"
          justifyContent="space-between"
          cursor="pointer"
          {...props}
        >
          <Flex alignItems="center" flex="1">
            <Box borderTop="1px" borderColor="blacks.400" w="20" flex="1" />

            <Box color="blacks.500" flex="1" pl="5">
              0{index + 1}
            </Box>
            <Box flex="4">
              <Text color="blacks.700" fontWeight="semibold">
                {name}
              </Text>
              <Text fontSize="2xs" color="blacks.500">
                {skills.join(', ')}
              </Text>
            </Box>
          </Flex>
          <Flex alignItems="center" justifyContent="flex-end" mr="5%">
            <Box position="relative" zIndex={50}>
              <Text
                color="blacks.800"
                px="3"
                position="relative"
                bg={color}
                borderRadius="full"
                py="2"
                zIndex={50}
              >
                View
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Divider borderColor="blacks.100" zIndex={1} />
      </>
    );
  }
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
                width={isSmallerImage ? 370 : 300}
                height={isSmallerImage ? 370 : 300}
                style={{ zIndex: 30, position: 'relative', maxWidth: 'unset' }}
              />
              <StyledCircle
                color={color}
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
                bgColor={color}
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
    <Box mb="12" {...props}>
      <Container>
        <StyledText
          as="h2"
          fontSize="6xl"
          fontFamily="belleza"
          textAlign="right"
        >
          works
        </StyledText>
      </Container>
      {projectTeasers.map((p, i) => (
        <NextLink key={p.id} href={p.route}>
          <ProjectItem project={p} index={i} />
        </NextLink>
      ))}
    </Box>
  );
};
