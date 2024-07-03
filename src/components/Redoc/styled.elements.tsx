// import { palette } from '@leafygreen-ui/palette';
import styled, { media } from '../../styled-components';

export const DarkModeSwitchContainer = styled.div`
  display: flex;
  margin: 10px auto;
  justify-content: space-between;
  gap: 20px;
`;

export const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  z-index: 99;

  // Overwrite padding to match docs site's padding
  nav > div > div {
    ${media.greaterThan('medium')`
      padding-left: 32px;
      padding-right: 32px;
    `};
  }
`;

export const SideMenuTitle = styled.div`
  font-size: 13px;
  font-weight: bold;
  line-height: 20px;
  margin: 0 16px 24px;
`;

export const RedocWrap = styled.div`
  ${({ theme }) => `
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.fontSize};
  font-weight: ${theme.typography.fontWeightRegular};
  line-height: ${theme.typography.lineHeight};
  color: var(--text-primary-color);
  display: flex;
  position: relative;
  text-align: left;

  -webkit-font-smoothing: ${theme.typography.smoothing};
  font-smoothing: ${theme.typography.smoothing};
  ${(theme.typography.optimizeSpeed && 'text-rendering: optimizeSpeed !important') || ''};

  tap-highlight-color: rgba(0, 0, 0, 0);
  text-size-adjust: 100%;

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
`};
`;

export const ApiContentWrap = styled.div`
  z-index: 1;
  position: relative;
  overflow: hidden;
  width: calc(100% - ${props => props.theme.sidebar.width});
  ${media.lessThan('small', true)`
    width: 100%;
  `};

  contain: layout;
`;

export const BackgroundStub = styled.div`
  background: ${({ theme }) => theme.rightPanel.backgroundColor};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${({ theme }) => {
    if (theme.rightPanel.width.endsWith('%')) {
      const percents = parseInt(theme.rightPanel.width, 10);
      return `calc((100% - ${theme.sidebar.width}) * ${percents / 100})`;
    } else {
      return theme.rightPanel.width;
    }
  }};
  ${media.lessThan('medium', true)`
    display: none;
  `};
`;
