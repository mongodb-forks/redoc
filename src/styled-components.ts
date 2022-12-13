import * as styledComponents from 'styled-components';
import { css, keyframes, Global } from '@emotion/react';
import emotionStyled from '@emotion/styled';

import type { ResolvedThemeInterface } from './theme';

export type { ResolvedThemeInterface };

// const { css as emotionCss } = emotion;
const styled = emotionStyled;

const {
  // default: styled,
  css: styledCss,
  createGlobalStyle,
  // keyframes,
  ThemeProvider,
} = styledComponents as unknown as styledComponents.ThemedStyledComponentsModule<ResolvedThemeInterface>;

export const media = {
  lessThan(breakpoint, print?: boolean, extra?: string) {
    return (...args) => styledCss`
      @media ${print ? 'print, ' : ''} screen and (max-width: ${props =>
      props.theme.breakpoints[breakpoint]}) ${extra || ''} {
        ${(css as any)(...args)};
      }
    `;
  },

  greaterThan(breakpoint) {
    return (...args) => styledCss`
      @media (min-width: ${props => props.theme.breakpoints[breakpoint]}) {
        ${(css as any)(...args)};
      }
    `;
  },

  between(firstBreakpoint, secondBreakpoint) {
    return (...args) => styledCss`
      @media (min-width: ${props =>
        props.theme.breakpoints[firstBreakpoint]}) and (max-width: ${props =>
      props.theme.breakpoints[secondBreakpoint]}) {
        ${(css as any)(...args)};
      }
    `;
  },
};

export { css, createGlobalStyle, Global, keyframes, ThemeProvider };
export default styled;

export function extensionsHook(styledName: string) {
  return props => {
    if (!props.theme.extensionsHook) {
      return;
    }
    return props.theme.extensionsHook(styledName, props);
  };
}
