import { palette } from '@leafygreen-ui/palette';
import styled, { css } from '../../styled-components';
import { ArrowSvg } from './ArrowSvg';
import { ArrowIconProps } from './types';

const transitionDuration = {
  faster: 100,
  default: 150,
  slower: 300,
} as const;

export const ArrowIcon = styled(ArrowSvg)<{ open: boolean }>`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  top: 50%;
  -webkit-transform: ${(props: ArrowIconProps) =>
    props.open ? `translateY(-50%) rotate(180deg)` : `translateY(-50%)`};
  -ms-transform: ${(props: ArrowIconProps) =>
    props.open ? `translateY(-50%) rotate(180deg)` : `translateY(-50%)`};
  transform: ${(props: ArrowIconProps) =>
    props.open ? `translateY(-50%) rotate(180deg)` : `translateY(-50%)`};
  right: 8px;
  margin: auto;
  text-align: center;
`;

export const StyledWrapper = styled.div`
  font-family: 'Euclid Circular A', Akzidenz, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 13px;

  width: 90%;
  margin: 8px 5% 8px 5%;
  position: relative;
`;

export const StyledSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > label + button,
  > p + button {
    margin-top: 3px;
  }
`;

export const StyledButton = styled.button.attrs({
  'aria-labelledby': 'View a different version of documentation.',
})`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 36px;
  margin: 8px 0;

  background-color: var(--select-btn-bg);
  color: var(--select-btn-color);
  border: 1px solid transparent;
  border-radius: 6px;
  border-color: ${palette.gray.base};

  &:hover,
  &:active {
    box-shadow: 0 0 0 3px var(--select-btn-hover-shadow-color);
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px var(--select-btn-focus-shadow-color);
    border-color: white;
  }
`;

export const StyledLabel = styled.label`
  pointer-events: none;
  line-height: 20px;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const StyledDescription = styled.p`
  margin: 0;
`;

export const StyledMenuList = styled.ul`
  position: relative;
  text-align: left;
  width: 100%;
  border-radius: 12px;
  line-height: 16px;
  list-style: none;
  margin: 0;
  padding: 8px 0px;
  box-shadow: 0 4px 7px 0 var(--select-ul-shadow-color);
  border: 1px solid var(--select-ul-border);
  overflow: auto;
  max-height: 274px;
`;

export const StyledDisplay = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 16px;
  gap: 6px;
  padding: 0 4px 0 12px;
`;

export const StyledSelected = styled.div`
  display: flex;
`;

export const disabledOptionStyle = css`
  cursor: not-allowed;
  color: var(--select-disabled-color);
`;

export const enabledOptionStyle = css`
  &:hover {
    background-color: var(--select-enabled-hover-bg);
  }
`;

export const StyledLi = styled.li.attrs<{
  selected: boolean;
  disabled?: boolean;
  focused?: boolean;
}>(({ selected }) => ({
  role: 'option',
  'aria-selected': selected,
  tabIndex: '0',
}))<{ selected: boolean; disabled?: boolean; focused?: boolean }>`
  display: flex;
  width: 100%;
  outline: none;
  overflow-wrap: anywhere;
  transition: background-color ${transitionDuration.default}ms ease-in-out;
  position: relative;
  padding: 8px 12px;
  cursor: pointer;
  color: var(--select-li-color);
  ${props =>
    props.focused &&
    `color: var(--select-li-focus-color);
    background-color: var(--select-li-focus-bg);`}
  font-weight: ${props => (props.selected ? `bold` : `normal`)};
  &:before {
    content: '';
    position: absolute;
    transform: scaleY(0.3);
    top: 7px;
    bottom: 7px;
    left: 0;
    right: 0;
    width: 4px;
    border-radius: 0px 4px 4px 0px;
    opacity: 0;
    transition: all ${transitionDuration.default}ms ease-in-out;
    ${props =>
      props.focused &&
      `
      opacity: 1;
      transform: scaleY(1);
      background-color: var(--select-li-before-focus-bg);
      `}
  }
  ${props => (props.disabled ? disabledOptionStyle : enabledOptionStyle)}
`;

export const StyledOptionText = styled.span`
  display: flex;
  align-items: center;
`;

export const openDropdownStyle = css`
  position: absolute;
  top: 70px;
  left: 1px;
  display: block;
  width: 100%;
  pointer-events: initial;
  z-index: 2;
  background-color: var(--select-ul-bg);
`;

export const StyledDropdown = styled.div.attrs<{ open: boolean }>({
  role: 'listbox',
  'aria-labelledby': 'View a different version of documentation.',
  tabIndex: '0',
})<{ open: boolean }>`
  ${props => (props.open ? openDropdownStyle : `display: none;`)}
`;

export const StyledPlaceholder = styled.span`
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;
