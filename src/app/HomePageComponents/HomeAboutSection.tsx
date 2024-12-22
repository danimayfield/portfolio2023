import { Box, BoxProps, Text, useTheme } from '@chakra-ui/react';
import { MotionBox, StyledCircle, StyledText } from '@shared';

type HomeAboutSectionProps = BoxProps;

export const HomeAboutSection = ({ ...props }: HomeAboutSectionProps) => {
  const { colors } = useTheme();
  return (
    <Box position="relative" overflow="hidden">
      <Box position="absolute" top="30%" left="0" w="100%">
        <MotionBox
          position="relative"
          animate={{ scale: 1.3 }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 1,
            duration: 1,
            ease: 'easeInOut',
          }}
        >
          <StyledCircle color={colors.orange[100]} w="3xs" h="3xs" />
        </MotionBox>
      </Box>

      <Box
        mx={{ md: '20%', base: '10%' }}
        zIndex={20}
        position="relative"
        {...props}
      >
        <StyledText as="h2" fontSize="6xl" fontFamily="belleza">
          hi, i&apos;m dani
        </StyledText>
        <Text maxW="lg" mx="auto" mt="10" lineHeight="tall">
          A full stack developer with a passion for learning and growth.
          I&apos;ve launched multiple web and mobile based products for start-up
          businesses using{' '}
          <Text as="span" fontWeight="bold">
            typescript, react, react-native, nextJS, apollo, graphQL and more
          </Text>
          .
        </Text>
        <Text maxW="lg" mx="auto" mt="2" lineHeight="tall">
          I believe that in this ever-changing industry, you can never stop
          pushing yourself to acquire new skills and knowledge. When I&apos;m
          not coding, I love to indulge in a good book and a cup of tea, and I
          have a keen eye for style and aesthetics. For me, bringing ideas to
          life through clean and accessible code is a deeply satisfying
          experience. I&apos;m a strong believer in collaboration and working
          with others to create products that I&apos;m proud of.
        </Text>
      </Box>
    </Box>
  );
};
