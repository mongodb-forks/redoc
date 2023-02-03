import * as React from 'react';
import { palette } from '@leafygreen-ui/palette';
import { transparentize } from 'polished';
import styled, { css } from '../../styled-components';
import { ArrowIconProps, VersionSelectorProps } from './types';
import { useOutsideClick } from './use-outside-click';

const ArrowSvg = ({ className, style }: ArrowIconProps): JSX.Element => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ArrowIcon = styled(ArrowSvg)`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  top: 50%;
  -webkit-transform: ${props =>
    props.open ? `translateY(-50%) rotate(180deg)` : `translateY(-50%)`};
  -ms-transform: ${props => (props.open ? `translateY(-50%) rotate(180deg)` : `translateY(-50%)`)};
  transform: ${props => (props.open ? `translateY(-50%) rotate(180deg)` : `translateY(-50%)`)};
  right: 8px;
  margin: auto;
  text-align: center;
  polyline {
    color: ${props => props.variant === 'dark' && 'white'};
  }
`;

const StyledWrapper = styled.div`
  font-family: 'Euclid Circular A', Akzidenz, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 13px;

  width: 90%;
  margin: 8px 5% 8px 5%;
  position: relative;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > label + button,
  > p + button {
    margin-top: 3px;
  }
`;

const StyledButton = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 36px;
  margin: 8px 0;

  background-color: white;
  color: ${palette.black};
  border: 1px solid transparent;
  border-radius: 6px;
  border-color: ${palette.gray.base};

  &:hover,
  &:active {
    color: ${palette.black};
    background-color: ${palette.white};
    box-shadow: 0 0 0 3px ${palette.gray.light2};
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px ${palette.blue.light1};
    border-color: rgba(255, 255, 255, 0);
  }
`;

const StyledLabel = styled.label`
  pointer-events: none;
  line-height: 20px;
  margin-bottom: 5px;
  font-weight: bold;
`;

const StyledDescription = styled.p`
  margin: 0;
`;

const StyledMenuList = styled.ul`
  position: relative;
  text-align: left;
  width: 100%;
  border-radius: 12px;
  line-height: 16px;
  list-style: none;
  margin: 0;
  padding: 8px 0px;
  overflow: auto;
  box-shadow: 0 4px 7px 0 ${transparentize(0.75, palette.black)};
  border: ${palette.gray.light2};
`;

const StyledDisplay = styled.div`
  display: grid;
  grid-template-columns: 1fr 16px;
  gap: 6px;
  padding: 0 4px 0 12px;
`;

const transitionDuration = {
  faster: 100,
  default: 150,
  slower: 300,
} as const;

interface OptionProps {
  option: string;
  selected: boolean;
  onClick: () => void;
}

const Option = ({ option, selected, onClick }: OptionProps) => {
  return (
    <StyledLi onClick={onClick} selected={selected}>
      <span></span>
      <StyledOptionText>{option}</StyledOptionText>
    </StyledLi>
  );
};

const disabledOptionStyle = css`
  cursor: not-allowed;
  color: ${palette.gray.base};
`;

const enabledOptionStyle = css`
  &:hover {
    background-color: ${palette.gray.light2};
  }

  &:focus-visible {
    color: ${palette.blue.dark2};
    background-color: ${palette.blue.light3};

    &:before {
      opacity: 1;
      transform: scaleY(1);
      background-color: ${palette.blue.base};
    }
  }
`;

const StyledLi = styled.li<{ selected: boolean; disabled?: boolean }>`
  display: flex;
  width: 100%;
  outline: none;
  overflow-wrap: anywhere;
  transition: background-color ${transitionDuration.default}ms ease-in-out;
  position: relative;
  padding: 8px 12px;
  cursor: pointer;
  color: ${palette.gray.dark3};

  background-color: ${props => (props.selected ? palette.gray.light3 : palette.white)};

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
  }

  ${props => (props.disabled ? disabledOptionStyle : enabledOptionStyle)}
`;

/** Make sure you use disabled prop and others for this */
// [css`
//   &:hover {
//     background-color: ${colorSet.background.hovered};
//   }
// `]: !disabled,
// [css`
//   &:focus-visible {
//     color: ${colorSet.text.focused};
//     background-color: ${colorSet.background.focused};

//     &:before {
//       opacity: 1;
//       transform: scaleY(1);
//       background-color: ${colorSet.indicator.focused};
//     }
//   }
// `]: !disabled,
// [css`
//   cursor: not-allowed;
//   color: ${colorSet.text.disabled};
// `]: disabled,

const StyledOptionText = styled.span`
  display: flex;
  align-items: center;
`;

const openDropdownStyle = css`
  position: absolute;
  top: 70px;
  left: 1px;
  display: block;
  width: 100%;
  pointer-events: initial;
  z-index: 2;
  background-color: ${palette.white};
`;

const StyledDropdown = styled.div<{ open: boolean }>`
  ${props => (props.open ? openDropdownStyle : `display: none;`)}
`;

const VersionSelectorComponent = ({
  resource_versions,
  active,
  root_url,
  variant,
  description,
}: VersionSelectorProps): JSX.Element => {
  const initialSelectedIdx = resource_versions.indexOf(active.resource_version);
  const [open, setOpen] = React.useState<boolean>(false);
  const [selectedIdx, setSelectedIdx] = React.useState<number>(initialSelectedIdx);
  const menuListRef = React.useRef(null);
  useOutsideClick(menuListRef, () => {
    if (open) setOpen(false);
  });

  const handleClick = (idx: number) => {
    setSelectedIdx(idx);
    setOpen(false);
  };

  React.useEffect(() => {
    console.log(root_url + '/' + resource_versions[selectedIdx]);
  }, [selectedIdx, resource_versions, root_url]);

  return (
    <StyledWrapper>
      <StyledButtonWrapper>
        <StyledLabel>Version Selector</StyledLabel>
        {description && <StyledDescription>{description}</StyledDescription>}
        <StyledButton onClick={() => setOpen(!open)}>
          <StyledDisplay>
            <div>
              <div>
                <span></span>
                {resource_versions[selectedIdx]}
              </div>
            </div>
            <ArrowIcon open={open} variant={variant} />
          </StyledDisplay>
        </StyledButton>
      </StyledButtonWrapper>

      <StyledDropdown ref={menuListRef} open={open}>
        <div>
          <StyledMenuList>
            {resource_versions.map((option, i) => (
              <Option
                key={`option-${i}`}
                selected={i === selectedIdx}
                option={option}
                onClick={() => handleClick(i)}
              />
            ))}
          </StyledMenuList>
        </div>
      </StyledDropdown>
    </StyledWrapper>
  );
};

export const VersionSelector = React.memo<VersionSelectorProps>(VersionSelectorComponent);
