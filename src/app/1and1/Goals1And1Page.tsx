import { Box, Flex, Icon, Image, Link, Text, useTheme } from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import { ContactSection, projectData, Projects } from '@app/HomePageComponents';
import { HeroColors, ProjectNav } from '@shared/components';
import { Container, MotionBox, StyledText, TitleHeading } from '@shared';
import FeaturedMockUp from '@shared/assets/1and1/mobile1.png';
import MockUp2 from '@shared/assets/1and1/mobile2.png';
import { ProjectFooterNavigation } from '@shared/components/ProjectFooterNavigation';

export const Goals1And1Page = () => {
  const data = projectData[Projects.G1AND1];
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
    [100, 50, 0]
  );
  const opacityAnim = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25],
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

  console.log(isLargerThanMobile);

  const { name, description, subtitle, favourite, skills, link, challenges } =
    data;
  return (
    <Box>
      <HeroColors color1={colors.sky[400]} color3={colors.gray[200]}>
        <ProjectNav />
        <Container>
          <Box mt="20%" mb="6">
            <TitleHeading as="h1" textAlign="center" mb="2">
              {name} app
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
                alt="Mobile mock up of the 1and1 app home screen"
                w={{ md: '70%', base: '80%' }}
              />
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
                <Text maxW="md" ml="auto" textAlign="right" lineHeight="taller">
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
                }}
              >
                <Image
                  src={MockUp2.src}
                  alt="Mobile mock up of the 1and1 app calendar screen"
                  w="50%"
                />
              </MotionBox>
            </Flex>
          </Box>
        </Container>
      </HeroColors>
      <ProjectFooterNavigation nextProjectId={Projects.AHL} />
      <ContactSection />
    </Box>
  );
};
