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
  return (
    <StyledLi onClick={onClick} selected={selected}>
      {selected ? <Checkmark /> : <StyledPlaceholder />}
      <StyledOptionText>{option}</StyledOptionText>
    </StyledLi>
  );
};
