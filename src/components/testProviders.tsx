import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import defaultTheme, { resolveTheme } from '../theme';

export default class TestThemeProvider extends React.Component {
  render() {
    return (
      <EmotionThemeProvider theme={resolveTheme(defaultTheme)}>
        <ThemeProvider theme={resolveTheme(defaultTheme)}>
          {React.Children.only(this.props.children as any)}
        </ThemeProvider>
      </EmotionThemeProvider>
    );
  }
}

export function withTheme(children) {
  return <TestThemeProvider>{children}</TestThemeProvider>;
}
