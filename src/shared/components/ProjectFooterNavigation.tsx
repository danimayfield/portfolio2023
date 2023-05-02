import { useState } from 'react';
import { Flex, Text, useTheme } from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';
import { MotionBox } from './motion-chakra';
import { StyledCircle } from './StyledCircle';
import { Projects } from '@app/HomePageComponents';
import { projectTeasersData } from '@app/HomePageComponents';

type ProjectFooterNavigationProps = {
  prevProjectId?: Projects;
  nextProjectId: Projects;
  nextColorScheme?: string;
  prevColorScheme?: string;
};

export const ProjectFooterNavigation = ({
  prevProjectId,
  nextProjectId,
  nextColorScheme = 'sky',
  prevColorScheme = 'mint',
}: ProjectFooterNavigationProps) => {
  const [isHovered, setIsHovered] = useState<Projects | null>(null);
  const { colors } = useTheme();

  const prevProject = prevProjectId
    ? projectTeasersData[prevProjectId]
    : undefined;
  const nextProject = projectTeasersData[nextProjectId];

  const isNextProjectHovered = isHovered === nextProjectId;
  const isPrevProjectHovered = isHovered === prevProjectId;

  return (
    <Flex
      w="full"
      justifyContent={prevProject ? 'space-between' : 'flex-end'}
      bg="blacks.50"
      py="14"
      alignItems="center"
    >
      {prevProject && (
        <NextLink
          href={prevProject.route}
          onMouseEnter={() => setIsHovered(prevProjectId ?? null)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <Flex flexDir="row-reverse" position="relative">
            {/* Hover animation: */}
            <MotionBox
              animate={{
                translateX: isPrevProjectHovered ? 250 : undefined,
                scale: isPrevProjectHovered ? 1.2 : undefined,
              }}
              whileTap={{
                scale: 1,
              }}
              ml="25%"
              position="relative"
              zIndex={20}
            >
              <Text color={colors[prevColorScheme][800]} fontWeight="bold">
                Go back:
              </Text>
              <Text color="blacks.700" fontWeight="semibold">
                {prevProject.name}
              </Text>
              <Text fontSize="2xs" color="blacks.500">
                {prevProject.skills.join(', ')}
              </Text>
            </MotionBox>
            {isPrevProjectHovered && (
              <MotionBox
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{ duration: 0.3 }}
                zIndex={10}
                top={-20}
                left={0}
                position="absolute"
                maxW="2xs"
              >
                <Image
                  src={prevProject.imageSrc}
                  alt={prevProject.alt}
                  width={300}
                  height={300}
                  style={{ zIndex: 30, position: 'relative' }}
                />
                <StyledCircle
                  color={colors[prevColorScheme][400]}
                  w="48"
                  h="48"
                  position="absolute"
                  top="5%"
                  right="10%"
                  zIndex={1}
                />
              </MotionBox>
            )}
          </Flex>
        </NextLink>
      )}
      <NextLink
        href={nextProject.route}
        onMouseEnter={() => setIsHovered(nextProjectId)}
        onMouseLeave={() => setIsHovered(null)}
      >
        <Flex flexDir="row" position="relative">
          {/* Hover animation: */}
          <MotionBox
            animate={{
              translateX: isNextProjectHovered ? -250 : undefined,
              scale: isNextProjectHovered ? 1.2 : undefined,
            }}
            whileTap={{
              scale: 1,
            }}
            mr="25%"
            position="relative"
            zIndex={20}
          >
            {/* Bounce animation to entice user to click */}
            <MotionBox
              animate={{ scale: 1.1 }}
              transition={{
                duration: 0.3,
                ease: 'backInOut',
                scale: {
                  repeat: Infinity,
                  repeatDelay: 2,
                  type: 'spring',
                  damping: 5,
                  stiffness: 150,
                  restDelta: 0.001,
                },
              }}
            >
              <Text color={colors[nextColorScheme][800]} fontWeight="bold">
                Go to next:
              </Text>
              <Text color="blacks.700" fontWeight="semibold">
                {nextProject.name}
              </Text>
              <Text fontSize="2xs" color="blacks.500">
                {nextProject.skills.join(', ')}
              </Text>
            </MotionBox>
          </MotionBox>
          {isNextProjectHovered && (
            <MotionBox
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 0.3 }}
              zIndex={10}
              top={-20}
              right={0}
              position="absolute"
              maxW="2xs"
            >
              <Image
                src={nextProject.imageSrc}
                alt={nextProject.alt}
                width={300}
                height={300}
                style={{ zIndex: 30, position: 'relative' }}
              />
              <StyledCircle
                color={colors[nextColorScheme][400]}
                w="48"
                h="48"
                position="absolute"
                top="5%"
                right="10%"
                zIndex={1}
              />
            </MotionBox>
          )}
        </Flex>
      </NextLink>
    </Flex>
  );
};
