import * as React from 'react';
import {
  ArrowIcon,
  StyledWrapper,
  StyledSelectWrapper,
  StyledButton,
  StyledLabel,
  StyledDescription,
  StyledMenuList,
  StyledDisplay,
  StyledDropdown,
  StyledSelected,
} from './styled.elements';
import { Option } from './Option';
import { VersionSelectorProps } from './types';
import { useOutsideClick } from './use-outside-click';

/**
 * Version Selector Dropdown component based structurally and stylistically off LG Select
 */
const VersionSelectorComponent = ({
  resourceVersions,
  active,
  description,
  rootUrl,
}: VersionSelectorProps): JSX.Element => {
  const reversedResourceVersions = resourceVersions.slice().reverse();
  const initialSelectedIdx = reversedResourceVersions.indexOf(active.resourceVersion);
  const [open, setOpen] = React.useState<boolean>(false);
  const [focusedIdx, setFocusedIdx] = React.useState<number>(initialSelectedIdx);
  const [selectedIdx, setSelectedIdx] = React.useState<number>(initialSelectedIdx);

  const menuListRef = React.useRef(null);

  const options = reversedResourceVersions.map((option, i) => {
    return (
      <Option
        key={`option-${i}`}
        selected={i === selectedIdx}
        value={option}
        option={`${option}${i === 0 ? ' (latest)' : ''}`}
        onClick={() => handleClick(i, option)}
        focused={i === focusedIdx}
      />
    );
  });

  useOutsideClick(menuListRef, () => {
    if (open) setOpen(false);
    setFocusedIdx(0);
  });

  const handleClick = React.useCallback(
    (idx: number, resourceVersion: string) => {
      console.log('handleClick ', idx, resourceVersion);
      if (idx === selectedIdx) return setOpen(false);

      // navigate to resource version spec
      let selectedResourceVersionUrl = `${rootUrl}/${resourceVersion}`;
      const anchorTagIdx = window.location.href.indexOf('#tag');
      if (anchorTagIdx > -1) {
        selectedResourceVersionUrl += window.location.href.slice(anchorTagIdx);
      }
      console.log(selectedResourceVersionUrl);
      // window.location.href = selectedResourceVersionUrl;
      setFocusedIdx(idx);
      setSelectedIdx(idx);
      return setOpen(false);
    },
    [selectedIdx, rootUrl],
  );

  const handleFocusChange = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const { key, shiftKey } = event;
      console.log(key, shiftKey);
      console.log('focusedIdx before ', focusedIdx);

      if (key === 'ArrowDown' || (key === 'Tab' && !shiftKey)) {
        // if we go down when we are already past the end, don't do anything
        if (focusedIdx === reversedResourceVersions.length - 1) return;

        if (focusedIdx === -1) {
          // when first entering the dropdown via the down arrow key or tab,
          // we want to open the modal
          setOpen(true);
        } else if (focusedIdx === reversedResourceVersions.length - 1) {
          // if we are at the last element of the dropdown, and attempt to go
          // down again, we want to close the dropdown
          return setOpen(false);
        }
        console.log('after ', reversedResourceVersions[focusedIdx + 1]);
        setFocusedIdx(focusedIdx + 1);
      } else if (key === 'ArrowUp' || (key === 'Tab' && shiftKey)) {
        // if we go down when we are already past the end, don't do anything
        if (focusedIdx === 0) return setOpen(false);

        if (focusedIdx === reversedResourceVersions.length) {
          // in this scenario, we are entering the dropdown from below
          // we open the dropdown and start from the bottom
          setOpen(true);
        }
        // else if (focusedIdx === 0) {
        //   // if we reach the first element in the drop down, and we attempt to go up again,
        //   // we want to close the dropdown
        //   setOpen(false);
        // }

        setFocusedIdx(focusedIdx - 1);
      }
    },
    [focusedIdx, reversedResourceVersions],
  );

  return (
    <StyledWrapper onKeyDown={handleFocusChange} ref={menuListRef}>
      <StyledSelectWrapper>
        <StyledLabel>Resource Version:</StyledLabel>
        {description && <StyledDescription>{description}</StyledDescription>}
        <StyledButton onClick={() => setOpen(!open)}>
          <StyledDisplay>
            <StyledSelected>{reversedResourceVersions[selectedIdx]}</StyledSelected>
            <ArrowIcon open={open} />
          </StyledDisplay>
        </StyledButton>
      </StyledSelectWrapper>

      <StyledDropdown open={open}>
        <div>
          <StyledMenuList>{options}</StyledMenuList>
        </div>
      </StyledDropdown>
    </StyledWrapper>
  );
};

export const VersionSelector = React.memo<VersionSelectorProps>(VersionSelectorComponent);
