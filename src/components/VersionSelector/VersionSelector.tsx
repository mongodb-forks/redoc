import * as React from 'react';
import {
  ArrowIcon,
  StyledWrapper,
  StyledButtonWrapper,
  StyledButton,
  StyledLabel,
  StyledDescription,
  StyledMenuList,
  StyledDisplay,
  StyledDropdown,
} from './styled.elements';
import { Option } from './Option';
import { VersionSelectorProps } from './types';
import { useOutsideClick } from './use-outside-click';

/**
 * Version Selector Dropdown component based structurally and stylistically off LG Select
 */
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
    <StyledWrapper ref={menuListRef}>
      <StyledButtonWrapper>
        <StyledLabel>Version Selector: v{active.api_version}</StyledLabel>
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

      <StyledDropdown open={open}>
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
