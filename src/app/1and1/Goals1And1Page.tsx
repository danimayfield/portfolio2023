import { Box, Flex, Icon, Image, Link, Text, useTheme } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import { projectData, Projects } from '@app/HomePageComponents';
import { HeroColors } from '@shared/components/styled';
import { Container, MotionBox, StyledText, TitleHeading } from '@shared';
import FeaturedMockUp from '@shared/assets/1and1/mobile1.png';
import MockUp2 from '@shared/assets/1and1/mobile2.png';
import { HomeNav } from '@shared/components/HomeNav';

export const Goals1And1Page = () => {
  const data = projectData[Projects.G1AND1];
  const { colors } = useTheme();
  const { scrollYProgress } = useScroll();
  const xPosAnim = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35],
    [300, 200, 0]
  );
  const opacityAnim = useTransform(
    scrollYProgress,
    [0, 0.2, 0.35],
    [0, 0.5, 1]
  );
  const xPosAnim2 = useTransform(
    scrollYProgress,
    [0.4, 0.6, 1],
    [-300, -50, 200]
  );
  const opacityAnim2 = useTransform(
    scrollYProgress,
    [0.4, 0.65, 1],
    [0, 0.5, 1]
  );

  const { name, description, favourite, skills, link } = data;
  return (
    <Box>
      <HomeNav />
      <Box overflowX="clip">
        <HeroColors color1={colors.sky[400]} color3={colors.gray[200]}>
          <Container>
            <Box mt="20%" mb="6">
              <TitleHeading as="h1" textAlign="center" mb="2">
                {name} app
              </TitleHeading>
              <StyledText textAlign="center">
                a one-of-a-kind mental health and wellness app
              </StyledText>
            </Box>
            <Flex>
              <MotionBox style={{ translateX: xPosAnim }}>
                <Image
                  src={FeaturedMockUp.src}
                  alt="Mobile mock up of the 1and1 app home screen"
                  w="80%"
                />
              </MotionBox>
              <Box mt="25%">
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
        <Container mt="16">
          <Flex>
            <motion.div style={{ opacity: opacityAnim2 }}>
              <Box>
                <StyledText as="h2" fontSize="6xl" fontFamily="belleza" mb="1">
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
            <MotionBox style={{ translateX: xPosAnim2 }}>
              <Image
                src={MockUp2.src}
                alt="Mobile mock up of the 1and1 app calendar screen"
                w="50%"
              />
            </MotionBox>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
