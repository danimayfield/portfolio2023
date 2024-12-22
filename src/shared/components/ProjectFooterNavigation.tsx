import { useState } from 'react';
import { Box, Flex, Text, useMediaQuery, useTheme } from '@chakra-ui/react';
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

  const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');
  const isNextProjectHovered = isHovered === nextProjectId;
  const isPrevProjectHovered = isHovered === prevProjectId;
  const prevCircleShade = prevColorScheme === 'orange' ? 100 : 400;
  const nextCircleShade = nextColorScheme === 'orange' ? 100 : 400;

  return (
    <Box w="full" overflowX="hidden" py="32">
      <Flex
        w="full"
        justifyContent={{
          base: prevProject ? 'space-between' : 'center',
          md: prevProject ? 'space-between' : 'flex-end',
        }}
        bg="blacks.50"
        py="14"
        px="6"
        alignItems="center"
      >
        {prevProject && (
          <NextLink
            href={prevProject.route}
            onMouseEnter={() =>
              isLargerThanTablet && setIsHovered(prevProjectId ?? null)
            }
            onMouseLeave={() => isLargerThanTablet && setIsHovered(null)}
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
                position="relative"
                zIndex={20}
              >
                <Text color={colors[prevColorScheme][800]} fontWeight="bold">
                  Go back:
                </Text>
                <Text color="blacks.700" fontWeight="semibold">
                  {prevProject.name}
                </Text>
                {isLargerThanTablet && (
                  <Text fontSize="2xs" maxW="sm" color="blacks.500">
                    {prevProject.skills.join(', ')}
                  </Text>
                )}
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
                    width={280}
                    height={280}
                    style={{
                      zIndex: 30,
                      position: 'relative',
                      maxWidth:
                        nextProjectId === Projects.Booker ? 'unset' : undefined,
                    }}
                  />
                  <StyledCircle
                    color={colors[prevColorScheme][prevCircleShade]}
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
          onMouseEnter={() => isLargerThanTablet && setIsHovered(nextProjectId)}
          onMouseLeave={() => isLargerThanTablet && setIsHovered(null)}
        >
          <Flex
            flexDir="row"
            position="relative"
            pl={!prevProject && !isLargerThanTablet ? '8%' : undefined}
          >
            {/* Hover animation: */}
            <MotionBox
              animate={{
                translateX: isNextProjectHovered ? -200 : undefined,
                scale: isNextProjectHovered ? 1.2 : undefined,
              }}
              whileTap={{
                scale: 1,
              }}
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
                {isLargerThanTablet && (
                  <Text
                    fontSize="2xs"
                    maxW={isLargerThanTablet ? 'sm' : 'xs'}
                    color="blacks.500"
                  >
                    {nextProject.skills.join(', ')}
                  </Text>
                )}
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
                  width={280}
                  height={280}
                  style={{
                    zIndex: 30,
                    position: 'relative',
                    maxWidth:
                      nextProjectId === Projects.Booker ? 'unset' : undefined,
                  }}
                />
                <StyledCircle
                  color={colors[nextColorScheme][nextCircleShade]}
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
    </Box>
  );
};
