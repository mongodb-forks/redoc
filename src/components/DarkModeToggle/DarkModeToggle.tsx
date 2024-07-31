import * as React from 'react';
import { ToggleButton, IconContainer } from './styled.elements';
import { SunSvg } from './SunSvg';
import { MoonSvg } from './MoonSvg';

interface DarkModeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}

const DarkModeToggleComponent = ({ darkMode, onToggle }: DarkModeToggleProps) => {
  return (
    <ToggleButton onClick={onToggle}>
      <IconContainer>{darkMode ? <MoonSvg /> : <SunSvg />}</IconContainer>
    </ToggleButton>
  );
};

export const DarkModeToggle = React.memo<DarkModeToggleProps>(DarkModeToggleComponent);
