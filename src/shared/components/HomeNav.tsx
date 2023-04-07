'use client';
import { useState } from 'react';
import { Icon } from '@chakra-ui/react';
import { HiHome } from 'react-icons/hi';
import NextLink from 'next/link';
import { MotionBox } from './motion-chakra';
import routes from '@app/routes';

export const HomeNav = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NextLink href={routes.home}>
      <MotionBox
        position="sticky"
        zIndex={30}
        top="6"
        left="6"
        px="1.5"
        pt="1"
        w="min-content"
        borderRadius="full"
        bg="rgba(113, 128, 150, 0.6)"
        animate={{
          scale: isHovered ? 1.2 : undefined,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Icon as={HiHome} color="white" w="6" h="6" />
      </MotionBox>
    </NextLink>
  );
};
