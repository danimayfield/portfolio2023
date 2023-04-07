import { Box, Center, Image, useTheme } from '@chakra-ui/react';
import { useScroll, useTransform } from 'framer-motion';
import { projectData, Projects } from '@app/HomePageComponents';
import { HeroColors } from '@shared/components/styled';
import { MotionBox, TitleHeading } from '@shared';
import FeaturedMockUp from '@shared/assets/1and1/mobile1.png';

export const Goals1And1Page = () => {
  const data = projectData[Projects.G1AND1];
  const { colors } = useTheme();
  const { scrollYProgress } = useScroll();
  const xPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, 250, 450]);
  const { name, description, favourite, skills } = data;
  return (
    <HeroColors color1={colors.sky[400]} color3={colors.gray[200]}>
      <Box zIndex={10} mt="20%" ml="15%">
        <Center>
          <TitleHeading as="h1">{name} app</TitleHeading>
        </Center>
      </Box>
      <MotionBox style={{ translateX: xPosAnim }}>
        <Image
          src={FeaturedMockUp.src}
          alt="Mobile mock up of the 1and1 app home screen"
          w="40%"
          zIndex={20}
          position="relative"
        />
      </MotionBox>
    </HeroColors>
  );
};
