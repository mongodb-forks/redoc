/// <reference types="@emotion/react/types/css-prop" />
import * as React from 'react';

import { getLuminance, lighten, darken } from 'polished';
import styled from '../../styled-components';
import { MenuItemLabel } from '../SideMenu/styled.elements';

import { default as emotionStyled } from '@emotion/styled';
import { css } from '@emotion/react';

export const SearchWrap = emotionStyled('div')`
  padding: 5px 0;
`;

// const SearchInputClass = (props) => {
//   return (
//     <input
//       className='search-input'
//       css={css`
//         width: calc(100% - ${props?.theme?.spacing?.unit * 8}px);
//         margin: 0 ${props?.theme?.spacing?.unit * 4}px;
//         padding: 5px ${props?.theme?.spacing?.unit * 2}px 5px
//           ${props?.theme?.spacing?.unit * 4}px;
//         font-family: ${props?.theme?.typography?.fontFamily};
//         color: ${props?.theme?.sidebar?.textColor};
//       `}
//     />
//   )
// }

// border-bottom: 1px solid
//           ${(getLuminance(props?.theme?.sidebar?.backgroundColor) > 0.5 ? darken : lighten)(
//               0.1,
//               props?.theme?.sidebar?.backgroundColor,
//             )};

// export const SearchInput = emotionStyled(SearchInputClass)`
//   box-sizing: border-box;
//   border: 0;
//   font-weight: bold;
//   font-size: 13px;
//   background-color: transparent;
//   outline: none;
// `;

export const SearchInput = emotionStyled.input<{ theme: ResolvedThemeInterface }>`
  width: calc(100% - ${props => props.theme.spacing.unit * 8}px);
  box-sizing: border-box;
  margin: 0 ${props => props.theme.spacing.unit * 4}px;
  padding: 5px ${props => props.theme.spacing.unit * 2}px 5px
    ${props => props.theme.spacing.unit * 4}px;
  border: 0;
  border-bottom: 1px solid
    ${({ theme }) =>
      (getLuminance(theme.sidebar.backgroundColor) > 0.5 ? darken : lighten)(
        0.1,
        theme.sidebar.backgroundColor,
      )};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: bold;
  font-size: 13px;
  color: ${props => props.theme.sidebar.textColor};
  background-color: transparent;
  outline: none;
`;

// export const SearchInput = emotionStyled.input`
//   width: calc(100% - ${props => {
//     console.log('INSIDE PROPS', props)
//     return 8
//   }}px);
//   box-sizing: border-box;
// `;

// export const SearchInput = styled.input.attrs(() => ({
//   className: 'search-input',
// }))`
//   width: calc(100% - ${props => props.theme.spacing.unit * 8}px);
//   box-sizing: border-box;
//   margin: 0 ${props => props.theme.spacing.unit * 4}px;
//   padding: 5px ${props => props.theme.spacing.unit * 2}px 5px
//     ${props => props.theme.spacing.unit * 4}px;
//   border: 0;
//   border-bottom: 1px solid
//     ${({ theme }) =>
//       (getLuminance(theme.sidebar.backgroundColor) > 0.5 ? darken : lighten)(
//         0.1,
//         theme.sidebar.backgroundColor,
//       )};
//   font-family: ${({ theme }) => theme.typography.fontFamily};
//   font-weight: bold;
//   font-size: 13px;
//   color: ${props => props.theme.sidebar.textColor};
//   background-color: transparent;
//   outline: none;
// `;

const SearchIconSVG = props => {
  console.log('search icon ', props);
  return (
    <svg
      className={props.className}
      version="1.1"
      viewBox="0 0 1000 1000"
      x="0px"
      xmlns="http://www.w3.org/2000/svg"
      y="0px"
      css={css`
        left: ${(props?.theme?.spacing?.unit || 1) * 4}px;

        path {
          fill: ${props?.theme?.sidebar?.textColor || 'black'};
        }
      `}
    >
      <path d="M968.2,849.4L667.3,549c83.9-136.5,66.7-317.4-51.7-435.6C477.1-25,252.5-25,113.9,113.4c-138.5,138.3-138.5,362.6,0,501C219.2,730.1,413.2,743,547.6,666.5l301.9,301.4c43.6,43.6,76.9,14.9,104.2-12.4C981,928.3,1011.8,893,968.2,849.4z M524.5,522c-88.9,88.7-233,88.7-321.8,0c-88.9-88.7-88.9-232.6,0-321.3c88.9-88.7,233-88.7,321.8,0C613.4,289.4,613.4,433.3,524.5,522z" />
    </svg>
  );
};

export const SearchIcon = emotionStyled(SearchIconSVG)`
  position: absolute;
  height: 1.8em;
  width: 0.9em;
`;

SearchIcon.defaultProps = { className: 'search-icon' };

export const SearchResultsBox = styled.div`
  padding: ${props => props.theme.spacing.unit}px 0;
  background-color: ${({ theme }) => darken(0.05, theme.sidebar.backgroundColor)}};
  color: ${props => props.theme.sidebar.textColor};
  min-height: 150px;
  max-height: 250px;
  border-top: ${({ theme }) => darken(0.1, theme.sidebar.backgroundColor)}};
  border-bottom: ${({ theme }) => darken(0.1, theme.sidebar.backgroundColor)}};
  margin-top: 10px;
  line-height: 1.4;
  font-size: 0.9em;
  
  li {
    background-color: inherit;
  }

  ${MenuItemLabel} {
    padding-top: 6px;
    padding-bottom: 6px;

    &:hover,
    &.active {
      background-color: ${({ theme }) => darken(0.1, theme.sidebar.backgroundColor)};
    }

    > svg {
      display: none;
    }
  }
`;

export const ClearIcon = styled.i`
  position: absolute;
  display: inline-block;
  width: ${props => props.theme.spacing.unit * 2}px;
  text-align: center;
  right: ${props => props.theme.spacing.unit * 4}px;
  line-height: 2em;
  vertical-align: middle;
  margin-right: 2px;
  cursor: pointer;
  font-style: normal;
  color: '#666';
`;
