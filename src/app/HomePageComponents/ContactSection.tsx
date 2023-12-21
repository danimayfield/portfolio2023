import { Box, BoxProps, Center, Link, Text } from '@chakra-ui/react';
import { StyledText } from '@shared';
import { ExternalLinkAnimation } from '@shared/animations/ExternalLinkAnimation';

type ContactSectionProps = BoxProps;

export const ContactSection = ({ ...props }: ContactSectionProps) => {
  const emailAddress = 'danimmayfield@gmail.com';
  return (
    <Box pb="5%" {...props}>
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
