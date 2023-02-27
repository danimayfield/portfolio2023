import { extendBaseTheme } from '@chakra-ui/react';
import { foundations } from './foundations';
import { semanticTokens } from './semantic-tokens';
import { styles } from './styles';
import type { ThemeConfig, ThemeDirection } from './theme.types';

const direction: ThemeDirection = 'ltr';

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'light',
  cssVarPrefix: 'chakra',
};

export const theme = extendBaseTheme({
  semanticTokens,
  direction,
  ...foundations,
  styles,
  config,
});

export type Theme = typeof theme;

export * from './theme.types';
export * from './utils/is-chakra-theme';

export default theme;

export const baseTheme = {
  semanticTokens,
  direction,
  components: {},
  ...foundations,
  styles,
  config,
};
