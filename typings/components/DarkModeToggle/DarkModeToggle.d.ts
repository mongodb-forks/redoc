import * as React from 'react';
interface DarkModeToggleState {
    darkMode: boolean;
    isMounted: boolean;
}
export declare const DARK_THEME_CLASSNAME = "dark-theme";
export declare const LIGHT_THEME_CLASSNAME = "light-theme";
export declare const SYSTEM_THEME_CLASSNAME = "system";
export declare class DarkModeToggle extends React.Component<Record<string, never>, DarkModeToggleState> {
    constructor(props: any);
    componentDidMount(): void;
    onToggleDarkMode(): void;
    render(): JSX.Element;
}
export {};
