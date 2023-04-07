import { Box, BoxProps, Center, Link, Text } from '@chakra-ui/react';
import { StyledText } from '@shared';
import { ExternalLinkAnimation } from '@shared/animations/ExternalLinkAnimation';

type HomeContactSectionProps = BoxProps;

export const HomeContactSection = ({ ...props }: HomeContactSectionProps) => {
  const emailAddress = 'danimmayfield@gmail.com';
  return (
    <Box py="5%" {...props}>
      <Center flexDirection="column">
        <StyledText as="h2" fontSize="6xl" fontFamily="belleza" zIndex={200}>
          contact
        </StyledText>
        <ExternalLinkAnimation>
          <Link href={`mailto:${emailAddress}`}>
            <Text>{emailAddress}</Text>
          </Link>
        </ExternalLinkAnimation>
      </Center>
    </Box>
  );
};
