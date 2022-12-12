import { ResolvedThemeInterface } from './src/styled-components';

declare module '@emotion/react' {
  export interface Theme extends ResolvedThemeInterface {}
}
