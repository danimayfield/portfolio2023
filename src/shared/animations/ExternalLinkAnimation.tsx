import React, { PropsWithChildren, useState } from 'react';
import { useTheme } from '@chakra-ui/react';
import { MotionBox } from '@shared/components';

type ExternalLinkAnimationProps = PropsWithChildren & {
  linkColor?: string;
};

export const ExternalLinkAnimation = ({
  linkColor,
  children,
}: ExternalLinkAnimationProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { colors } = useTheme();
  return (
    <MotionBox
      animate={{
        scale: isHovered ? 1.2 : undefined,
        color: isHovered ? linkColor ?? colors.sky[600] : undefined,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </MotionBox>
  );
};
