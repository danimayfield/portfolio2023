import React from 'react';
import { Box, Flex, Image, useTheme, Text } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Container,
  HeroColors,
  MotionBox,
  ProjectNav,
  StyledText,
  TitleHeading,
} from '@shared';
import { projectData, Projects } from '@app/HomePageComponents';

export const BookerPage = () => {
  const data = projectData[Projects.Booker];
  const { colors } = useTheme();
  const { scrollYProgress } = useScroll();
  const isLargerThanMobile =
    typeof window !== 'undefined' ? window.outerWidth > 480 : true;
  const xPosAnimLarge = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35],
    [300, 200, 0]
  );
  const xPosAnimSmall = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35],
    [100, 50, 0]
  );
  const opacityAnim = useTransform(
    scrollYProgress,
    [0, 0.2, 0.35],
    [0, 0.5, 1]
  );
  const xPosAnim2Large = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.8],
    [-300, -50, 200]
  );
  const xPosAnim2Small = useTransform(
    scrollYProgress,
    [0.3, 0.45, 0.6],
    [150, 80, 0]
  );
  const opacityAnim2 = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.7],
    [0, 0.5, 1]
  );
  const { name, description, subtitle, favourite, skills, link, challenges } =
    data;
  return (
    <Box>
      <Box pb="12" overflowX="hidden" overflowY="hidden" minH="100vh">
        <HeroColors
          color1={colors.orange[100]}
          color2={colors.gray[100]}
          color3={colors.mint[400]}
        >
          <ProjectNav />
          <Container>
            <Box mt="20%" mb="6">
              <TitleHeading as="h1" textAlign="center" mb="2">
                {name}
              </TitleHeading>
              <StyledText textAlign="center">{subtitle}</StyledText>
            </Box>
            <Flex flexDir={{ sm: 'row', base: 'column' }}>
              <MotionBox
                style={{
                  translateX: isLargerThanMobile
                    ? xPosAnimLarge
                    : xPosAnimSmall,
                }}
              >
                {/* <Image
                  src={FeaturedMockUp.src}
                  alt="Mobile mock up of the 1and1 app home screen"
                  w={{ md: '70%', base: '80%' }}
                /> */}
              </MotionBox>
              <Box mt={{ sm: '25%', base: '10%' }}>
                <motion.div style={{ opacity: opacityAnim }}>
                  <Box mb="16">
                    <StyledText as="h2" fontSize="6xl" textAlign="right" mb="1">
                      about
                    </StyledText>
                    <Text
                      maxW="md"
                      ml="auto"
                      textAlign="right"
                      lineHeight="taller"
                    >
                      {description}
                    </Text>
                  </Box>
                  <StyledText as="h2" fontSize="6xl" textAlign="right" mb="1">
                    tech
                  </StyledText>
                  <Text
                    maxW="md"
                    ml="auto"
                    textAlign="right"
                    lineHeight="taller"
                  >
                    {skills.join('  |  ')}
                  </Text>
                </motion.div>
              </Box>
            </Flex>
          </Container>
        </HeroColors>
      </Box>
    </Box>
  );
};
