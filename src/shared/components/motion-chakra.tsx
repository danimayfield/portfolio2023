/**
 * Chakra UI components that have been enhanced with Framer Motion.
 */
import { Box, Text, TextProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { BoxProps } from '@chakra-ui/react';
import { StyledCircle, StyledCircleProps } from './StyledCircle';

export type MotionBoxProps = Omit<BoxProps, 'transition'>;
export const MotionBox = motion<MotionBoxProps>(Box);

export type MotionTextProps = Omit<TextProps, 'transition'>;
export const MotionText = motion<MotionTextProps>(Text);

export type MotionStyledCircleProps = Omit<StyledCircleProps, 'transition'>;
export const MotionStyledCircle = motion<MotionStyledCircleProps>(StyledCircle);
