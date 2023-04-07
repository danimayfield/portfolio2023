import { Center, Text, useTheme } from '@chakra-ui/react';
import { HeroColors } from '@shared/components/styled';

export const Goals1And1Page = () => {
  const { colors } = useTheme();
  return (
    <HeroColors color1={colors.sky[400]} color3={colors.gray[200]}>
      <Center>
        <Text zIndex={400} fontSize="3xl">
          1AND1
        </Text>
      </Center>
    </HeroColors>
  );
};
