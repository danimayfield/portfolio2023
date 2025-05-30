'use client';
import React from 'react';
import { Box, Flex, Image, useTheme, Text, Link, Icon } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';
import {
  Container,
  HeroColors,
  MotionBox,
  ProjectFooterNavigation,
  ProjectNav,
  StyledText,
  TitleHeading,
} from '@shared';
import { ContactSection, projectData, Projects } from '@app/HomePageComponents';
import FeaturedMockUp from '@shared/assets/whereabouts/collage1.png';
import FeaturedMockUp2 from '@shared/assets/whereabouts/tablet2.png';

export const WhereaboutsPage = () => {
  const data = projectData[Projects.Whereabouts];
  const { colors } = useTheme();
  const { scrollYProgress } = useScroll();
  const isLargerThanMobile = useMediaQuery({ minWidth: '480px' });
  const xPosAnimLarge = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35],
    [300, 200, 0]
  );
  const xPosAnimSmall = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35],
    [60, 20, 0]
  );
  const opacityAnim = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25],
    [0, 0.5, 1]
  );
  const opacityAnimSmall = useTransform(
    scrollYProgress,
    [0, 0.04, 0.1],
    [0, 0.5, 1]
  );
  const xPosAnim2Large = useTransform(
    scrollYProgress,
    [0.4, 0.6, 0.7],
    [-350, 80, 160]
  );
  const xPosAnim2Small = useTransform(
    scrollYProgress,
    [0.3, 0.45, 0.6],
    [30, 0, -20]
  );
  const opacityAnim2 = useTransform(
    scrollYProgress,
    [0.45, 0.48, 0.55],
    [0, 0.5, 1]
  );
  const { name, description, subtitle, favourite, skills, link, challenges } =
    data;
  return (
    <Box>
      <HeroColors
        color1={colors.orange[100]}
        color2={colors.sky[100]}
        color3={colors.mint[400]}
      >
        <ProjectNav />
        <Container>
          <Box mt="20%" mb="6">
            <TitleHeading
              as="h1"
              textAlign="center"
              mb="2"
              fontSize={{ base: '5xl', sm: '7xl', md: '8xl' }}
            >
              {name}
            </TitleHeading>
            <StyledText textAlign="center">{subtitle}</StyledText>
          </Box>
          <Flex flexDir={{ sm: 'row', base: 'column' }}>
            <MotionBox
              style={{
                translateX: isLargerThanMobile ? xPosAnimLarge : xPosAnimSmall,
              }}
            >
              <Image
                src={FeaturedMockUp.src}
                alt="Desktop and laptop mock up of Whereabouts"
                w={{ sm: '95%', base: '90%' }}
              />
            </MotionBox>
            <Box mt={{ sm: '25%', base: '10%' }}>
              <motion.div
                style={{
                  opacity: isLargerThanMobile ? opacityAnim : opacityAnimSmall,
                }}
              >
                <Box mb="16">
                  <StyledText as="h2" fontSize="6xl" textAlign="right" mb="1">
                    about
                  </StyledText>
                  <Text
                    maxW="lg"
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
                <Text maxW="lg" ml="auto" textAlign="right" lineHeight="taller">
                  {skills.join('  |  ')}
                </Text>
              </motion.div>
            </Box>
          </Flex>
          <Box mt="16">
            <Flex flexDir={{ sm: 'row', base: 'column-reverse' }}>
              <motion.div style={{ opacity: opacityAnim2 }}>
                <Box mt={{ sm: '0', base: '10%' }}>
                  <StyledText
                    as="h2"
                    fontSize="6xl"
                    fontFamily="belleza"
                    mb="1"
                  >
                    challenges
                  </StyledText>
                  <Text maxW="md" mb="16" lineHeight="taller">
                    {challenges}
                  </Text>
                  <StyledText
                    as="h2"
                    fontSize="6xl"
                    fontFamily="belleza"
                    mb="1"
                  >
                    favorite part
                  </StyledText>
                  <Text maxW="md" mb="16" lineHeight="taller">
                    {favourite}
                  </Text>
                  <Link
                    href={link}
                    _hover={{
                      textDecoration: 'none',
                      color: 'sky.600',
                      transition: 'ease',
                      transitionDuration: '200ms',
                      transitionProperty: 'color',
                    }}
                    target="_blank"
                  >
                    <Text
                      fontFamily="belleza"
                      fontSize="6xl"
                      mb="1"
                      display="inline"
                    >
                      try it
                    </Text>
                    <Icon
                      as={HiExternalLink}
                      display="inline"
                      ml="2"
                      w="10"
                      h="10"
                    />
                  </Link>
                </Box>
              </motion.div>
              <MotionBox
                style={{
                  translateX: isLargerThanMobile
                    ? xPosAnim2Large
                    : xPosAnim2Small,
                  flex: 1,
                }}
              >
                <Image
                  src={FeaturedMockUp2.src}
                  alt="Tablet mockup of Whereabouts"
                  w={FeaturedMockUp2.width * 0.8}
                  borderRadius="3xl"
                  marginRight={isLargerThanMobile ? '32' : undefined}
                />
              </MotionBox>
            </Flex>
          </Box>
        </Container>
      </HeroColors>
      <ProjectFooterNavigation
        prevProjectId={Projects.Booker}
        nextProjectId={Projects.Seven}
        nextColorScheme="red"
        prevColorScheme="purple"
      />
      <ContactSection />
    </Box>
  );
};
