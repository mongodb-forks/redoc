import * as React from 'react';
import { StyledLi, StyledOptionText, StyledPlaceholder } from './styled.elements';
import Checkmark from './CheckmarkSvg';
import { OptionProps } from './types';

export const Option = ({ option, value, selected, onClick, focused }: OptionProps) => {
  return (
    <StyledLi
      onClick={() => onClick(value)}
      selected={selected}
      focused={focused}
      id={`option-${value}`}
    >
      {selected ? <Checkmark /> : <StyledPlaceholder />}
      <StyledOptionText>{option}</StyledOptionText>
    </StyledLi>
  );
};
