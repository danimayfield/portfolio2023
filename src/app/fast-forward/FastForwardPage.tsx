'use client';
import {
  Box,
  Flex,
  Image,
  Text,
  useMediaQuery,
  useTheme,
} from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ContactSection, projectData, Projects } from '@app/HomePageComponents';
import {
  HeroColors,
  ProjectFooterNavigation,
  ProjectNav,
} from '@shared/components';
import { Container, MotionBox, StyledText, TitleHeading } from '@shared';
import FeaturedMockUp from '@shared/assets/fastForward/collage1.png';
import MockUp2 from '@shared/assets/fastForward/laptop1.png';

export const FastForwardPage = () => {
  const data = projectData[Projects.FF];
  const { colors } = useTheme();
  const { scrollYProgress } = useScroll();
  const [isLargerThanMobile] = useMediaQuery('(min-width: 480px)');
  const xPosAnimLarge = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35],
    [300, 200, 0]
  );
  const xPosAnimSmall = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35],
    [80, 40, 0]
  );
  const opacityAnim = useTransform(
    scrollYProgress,
    [0, 0.2, 0.35],
    [0, 0.5, 1]
  );
  const xPosAnim2Large = useTransform(
    scrollYProgress,
    [0.4, 0.6, 1],
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

  const { name, description, subtitle, favourite, skills, challenges } = data;
  return (
    <Box>
      <HeroColors
        color1={colors.mint[300]}
        color2={colors.gray[200]}
        color3={colors.sky[300]}
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
                translateX: isLargerThanMobile ? xPosAnimLarge : xPosAnimSmall,
              }}
              flex="1"
            >
              <Image
                src={FeaturedMockUp.src}
                alt="Laptop mock up of the animal health link triage app"
                w={{ sm: '80%', base: '90%' }}
              />
            </MotionBox>
            <Box mt={{ sm: '20%', base: '10%' }}>
              <motion.div style={{ opacity: opacityAnim, flex: 1 }}>
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
        </Container>
      </HeroColors>
      <Container mt="16">
        <Flex flexDir={{ sm: 'row', base: 'column-reverse' }}>
          <motion.div style={{ opacity: opacityAnim2 }}>
            <Box mt={{ sm: '0', base: '10%' }}>
              <StyledText as="h2" fontSize="6xl" fontFamily="belleza" mb="1">
                challenges
              </StyledText>
              <Text maxW="md" mb="16" lineHeight="taller">
                {challenges}
              </Text>
              <StyledText as="h2" fontSize="6xl" fontFamily="belleza" mb="1">
                favorite part
              </StyledText>
              <Text maxW="md" mb="16" lineHeight="taller">
                {favourite}
              </Text>
            </Box>
          </motion.div>
          <MotionBox
            style={{
              translateX: isLargerThanMobile ? xPosAnim2Large : xPosAnim2Small,
            }}
            flex="1"
          >
            <Image
              src={MockUp2.src}
              alt="Desktop collage mock up of the animal health link app"
              w={{ sm: '80%', base: '90%' }}
            />
          </MotionBox>
        </Flex>
      </Container>
      <ProjectFooterNavigation
        nextProjectId={Projects.Booker}
        prevProjectId={Projects.AHL}
        nextColorScheme="orange"
        prevColorScheme="sky"
      />
      <ContactSection />
    </Box>
  );
};
