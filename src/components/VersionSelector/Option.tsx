import * as React from 'react';
import { StyledLi, StyledOptionText } from './styled.elements';
import Checkmark from './CheckmarkSvg';
import styled from '../../styled-components';

interface OptionProps {
  option: string;
  selected: boolean;
  onClick: () => void;
}

const StyledPlaceholder = styled.span`
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;

export const Option = ({ option, selected, onClick }: OptionProps) => {
  const KEY_ENTER = 'ENTER';
  const KEY_SPACE = 'SPACE';

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === KEY_ENTER || event.key === KEY_SPACE) {
      onClick();
    }
  };

  return (
    <StyledLi onClick={onClick} onKeyPress={handleKeyPress} selected={selected}>
      {selected ? <Checkmark /> : <StyledPlaceholder />}
      <StyledOptionText>{option}</StyledOptionText>
    </StyledLi>
  );
};
