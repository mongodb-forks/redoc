import * as PropTypes from 'prop-types';
import * as React from 'react';
import { UnifiedFooter, UnifiedNav } from '@mdb/consistent-nav';

import { ThemeProvider } from '../../styled-components';
import { OptionsProvider } from '../OptionsProvider';

import { AppStore } from '../../services';
import { ApiInfo } from '../ApiInfo/';
import { ApiLogo } from '../ApiLogo/ApiLogo';
import { ContentItems } from '../ContentItems/ContentItems';
import { SideMenu, SideMenuBackButton } from '../SideMenu';
import { StickyResponsiveSidebar } from '../StickySidebar/StickyResponsiveSidebar';
import {
  AbsoluteBorder,
  ApiContentWrap,
  BackgroundStub,
  DarkModeSwitchContainer,
  RedocWrap,
  SideMenuTitle,
  StyledHeader,
} from './styled.elements';

import { SearchBox } from '../SearchBox/SearchBox';
import { StoreProvider } from '../StoreBuilder';
import { VersionSelector } from '../VersionSelector';
import { DarkModeToggle } from '../DarkModeToggle/DarkModeToggle';
import { createGlobalStyle } from 'styled-components';
import { IS_BROWSER } from '../../utils';

export interface RedocProps {
  store: AppStore;
}

let globalCss = '';
if (IS_BROWSER) {
  globalCss = require('../../global.css');
  globalCss = (typeof globalCss.toString === 'function' && globalCss.toString()) || '';
  globalCss = globalCss === '[object Object]' ? '' : globalCss;
}

const GlobalCss = createGlobalStyle`${globalCss}`;

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

export class Redoc extends React.Component<RedocProps, { darkMode: boolean }> {
  constructor(props) {
    super(props);
    let initialDarkMode = false;
    if (typeof window !== 'undefined') {
      const localStorageDarkMode = JSON.parse(localStorage?.getItem('mongodb-docs') ?? '{}')?.[
        'theme'
      ];
      initialDarkMode = localStorageDarkMode === 'dark-theme';
    }
    this.state = { darkMode: initialDarkMode };
    changeClass(initialDarkMode ? 'dark-theme' : 'light-theme');

    this.onToggleDarkMode = this.onToggleDarkMode.bind(this);
  }

  static propTypes = {
    store: PropTypes.instanceOf(AppStore).isRequired,
  };

  componentDidMount() {
    this.props.store.onDidMount();
  }

  componentWillUnmount() {
    this.props.store.dispose();
  }

  onToggleDarkMode() {
    changeClass(this.state.darkMode ? 'light-theme' : 'dark-theme');
    this.setState({ darkMode: !this.state.darkMode });
  }

  render() {
    const {
      store: { spec, menu, options, search, marker },
    } = this.props;
    const store = this.props.store;

    return (
      <ThemeProvider theme={options.theme}>
        <StoreProvider value={store}>
          <OptionsProvider value={options}>
            {globalCss && <GlobalCss />}
            <StyledHeader>
              <UnifiedNav position="relative" property={{ name: 'DOCS', searchParams: [] }} />
            </StyledHeader>
            <RedocWrap className="redoc-wrap">
              <StickyResponsiveSidebar menu={menu} className="menu-content">
                <ApiLogo info={spec.info} />
                <SideMenuBackButton
                  backNavigationPath={options.backNavigationPath}
                  siteTitle={options.siteTitle}
                />
                <DarkModeSwitchContainer>
                  <DarkModeToggle darkMode={this.state.darkMode} onToggle={this.onToggleDarkMode} />
                </DarkModeSwitchContainer>
                <SideMenuTitle>
                  {store.spec.info.title}
                  {options.versionData && ` ${options.versionData.active.apiVersion}`}
                </SideMenuTitle>
                {(!options.disableSearch && (
                  <SearchBox
                    search={search!}
                    marker={marker}
                    getItemById={menu.getItemById}
                    onActivate={menu.activateAndScroll}
                  />
                )) ||
                  null}
                {options.versionData && <VersionSelector {...options.versionData} />}
                <SideMenu menu={menu} />
              </StickyResponsiveSidebar>
              <ApiContentWrap className="api-content">
                <ApiInfo
                  store={store}
                  resourceVersion={options.versionData?.active?.resourceVersion}
                />
                <ContentItems items={menu.items as any} />
              </ApiContentWrap>
              <AbsoluteBorder />
              <BackgroundStub />
            </RedocWrap>
            <UnifiedFooter hideLocale={true} />
          </OptionsProvider>
        </StoreProvider>
      </ThemeProvider>
    );
  }
}
