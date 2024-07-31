import * as React from 'react';
import { ToggleButton, IconContainer, Placeholder } from './styled.elements';
import { SunSvg } from './SunSvg';
import { MoonSvg } from './MoonSvg';

interface DarkModeToggleState {
  darkMode: boolean;
  isMounted: boolean;
}

export const DARK_THEME_CLASSNAME = 'dark-theme';
export const LIGHT_THEME_CLASSNAME = 'light-theme';
export const SYSTEM_THEME_CLASSNAME = 'system';

function changeClass(darkMode: 'dark-theme' | 'light-theme') {
  const docClassList =
    typeof window !== 'undefined' && window?.document?.documentElement?.classList;
  if (!docClassList) return;
  docClassList.add(darkMode);
  const removeClassnames = new Set([
    LIGHT_THEME_CLASSNAME,
    DARK_THEME_CLASSNAME,
    SYSTEM_THEME_CLASSNAME,
  ]);
  removeClassnames.delete(darkMode);
  removeClassnames.forEach(className => {
    if (className !== darkMode) docClassList.remove(className);
  });

  const localStorageDarkMode = JSON.parse(localStorage.getItem('mongodb-docs') ?? '{}');
  localStorage.setItem(
    'mongodb-docs',
    JSON.stringify({ ...localStorageDarkMode, theme: darkMode }),
  );
}

export class DarkModeToggle extends React.Component<Record<string, never>, DarkModeToggleState> {
  constructor(props) {
    super(props);
    this.state = { darkMode: false, isMounted: false };

    this.onToggleDarkMode = this.onToggleDarkMode.bind(this);
  }

  componentDidMount() {
    let initialDarkMode = false;
    if (typeof window !== 'undefined') {
      const localStorageDarkMode = JSON.parse(localStorage?.getItem('mongodb-docs') ?? '{}')?.[
        'theme'
      ];
      initialDarkMode = localStorageDarkMode === 'dark-theme';
    }
    changeClass(initialDarkMode ? 'dark-theme' : 'light-theme');

    this.setState({ darkMode: initialDarkMode, isMounted: true });
  }

  onToggleDarkMode() {
    changeClass(this.state.darkMode ? 'light-theme' : 'dark-theme');
    this.setState({ darkMode: !this.state.darkMode });
  }

  render() {
    if (!this.state.isMounted) return <Placeholder />;

    return (
      <ToggleButton onClick={this.onToggleDarkMode}>
        <IconContainer>{this.state.darkMode ? <MoonSvg /> : <SunSvg />}</IconContainer>
      </ToggleButton>
    );
  }
}
