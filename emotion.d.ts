import '@emotion/react';
import { ResolvedThemeInterface } from './src/theme';

declare module '@emotion/react' {
  export interface Theme extends ResolvedThemeInterface {}
}
