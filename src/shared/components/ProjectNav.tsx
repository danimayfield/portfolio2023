'use client';
import { Icon, VStack } from '@chakra-ui/react';
import { HiHome, HiArrowSmLeft } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import NextLink from 'next/link';
import { MotionBox } from './motion-chakra';
import routes from '@app/routes';

export const ProjectNav = () => {
  const router = useRouter();

  return (
    <VStack
      spacing="1"
      position="sticky"
      zIndex={30}
      top="6"
      left="6"
      px="1.5"
      pt="2"
      w="min-content"
      borderRadius="full"
      bg="rgba(113, 128, 150, 0.6)"
    >
      <NextLink href={routes.home}>
        <MotionBox
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 1,
          }}
        >
          <Icon as={HiHome} color="white" w="7" h="7" />
        </MotionBox>
      </NextLink>
      <MotionBox
        whileHover={{
          scale: 1.2,
          cursor: 'pointer',
        }}
        whileTap={{
          scale: 1,
        }}
        onClick={() => router.back()}
      >
        <Icon as={HiArrowSmLeft} color="white" w="7" h="7" />
      </MotionBox>
    </VStack>
  );
};
