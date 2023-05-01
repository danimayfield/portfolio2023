import { useState } from 'react';
import { Box, Flex, Text, useTheme } from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';
import { MotionBox } from './motion-chakra';
import { Projects } from '@app/HomePageComponents';
import { projectTeasersData } from '@app/HomePageComponents';
import { StyledCircle } from './StyledCircle';

type ProjectFooterNavigationProps = {
  prevProjectId?: Projects;
  nextProjectId: Projects;
};

export const ProjectFooterNavigation = ({
  prevProjectId,
  nextProjectId,
}: ProjectFooterNavigationProps) => {
  const [showTeaserImage, setShowTeaserImage] = useState<Projects | null>(null);
  const { colors } = useTheme();

  const prevProject = prevProjectId
    ? projectTeasersData[prevProjectId]
    : undefined;
  const nextProject = projectTeasersData[nextProjectId];

  return (
    <Flex
      w="full"
      justifyContent={prevProject ? 'space-between' : 'flex-end'}
      bg="blacks.50"
      py="14"
      alignItems="center"
    >
      {prevProject && <div>prev: {prevProject.name}</div>}
      {!prevProject && (
        <Box
          borderTop="1px"
          borderColor="blacks.400"
          w="full"
          flex="1"
          mr="10"
        />
      )}
      <NextLink href={nextProject.route}>
        <Flex flexDir="row" position="relative">
          <MotionBox
            whileHover={{
              translateX: -200,
              scale: 1.2,
            }}
            onHoverStart={() => setShowTeaserImage(nextProjectId)}
            onHoverEnd={() => setShowTeaserImage(null)}
            mr="25%"
            position="relative"
            zIndex={10}
          >
            <Text color="blacks.700" fontWeight="bold">
              Next:
            </Text>
            <Text color="blacks.700" fontWeight="semibold">
              {nextProject.name}
            </Text>
            <Text fontSize="2xs" color="blacks.500">
              {nextProject.skills.join(', ')}
            </Text>
          </MotionBox>
          {showTeaserImage === nextProjectId && (
            <MotionBox
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                translateX: -20,
              }}
              transition={{ duration: 0.3 }}
              zIndex={20}
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
                color={colors.sky[400]}
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
