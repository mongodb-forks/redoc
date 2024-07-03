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

export interface RedocProps {
  store: AppStore;
}

export const DARK_THEME_CLASSNAME = 'dark-theme';
export const LIGHT_THEME_CLASSNAME = 'light-theme';
export const SYSTEM_THEME_CLASSNAME = 'system';

function changeClass(darkMode: 'dark-theme' | 'light-theme') {
  console.log('window ', typeof window);
  const docClassList =
    typeof window !== 'undefined' && window?.document?.documentElement?.classList;
  console.log('doc class list ', docClassList);
  if (!docClassList) return;
  docClassList.add(darkMode);
  const removeClassnames = new Set([
    LIGHT_THEME_CLASSNAME,
    DARK_THEME_CLASSNAME,
    SYSTEM_THEME_CLASSNAME,
  ]);
  removeClassnames.delete(darkMode);
  // if (darkMode === 'system') {
  //   const themeClass = darkPref ? DARK_THEME_CLASSNAME : LIGHT_THEME_CLASSNAME;
  //   docClassList.add(themeClass);
  //   removeClassnames.delete(themeClass);
  // }
  removeClassnames.forEach(className => {
    if (className !== darkMode) docClassList.remove(className);
  });

  const localStorageDarkMode = JSON.parse(localStorage.getItem('mongodb-docs') ?? '{}');
  console.log('change local ', darkMode);
  console.log('to this ', JSON.stringify({ ...localStorageDarkMode, theme: darkMode }));
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
    console.log('constructor ', initialDarkMode);
    this.state = { darkMode: initialDarkMode };
    console.log('made to be initialDark ', initialDarkMode);
    changeClass(initialDarkMode ? 'dark-theme' : 'light-theme');

    this.onToggleDarkMode = this.onToggleDarkMode.bind(this);
  }

  static propTypes = {
    store: PropTypes.instanceOf(AppStore).isRequired,
  };

  componentDidMount() {
    this.props.store.onDidMount();
    // const localStorageDarkMode = JSON.parse(localStorage.getItem('mongodb-docs') ?? '{}')?.["theme"];
    // this.setState({ darkMode: localStorageDarkMode === 'dark-theme' });
  }

  componentWillUnmount() {
    this.props.store.dispose();
  }

  onToggleDarkMode(darkMode: boolean) {
    // console.log('is it checked?? ', e.target.checked)
    // console.log('in toggle ', typeof window)
    // console.log(e)
    // console.log('toggle to ', e.target.checked)
    // const darkMode = e.target.checked;
    this.setState({ darkMode });
    // const localStorageDarkMode = JSON.parse(localStorage.getItem('mongodb-docs') ?? '{}');
    // localStorage.setItem('mongodb-docs', JSON.stringify({ ...localStorageDarkMode, theme: darkMode ? 'dark-theme': 'light-theme' }))
    changeClass(darkMode ? 'dark-theme' : 'light-theme');
  }

  render() {
    const {
      store: { spec, menu, options, search, marker },
    } = this.props;
    const store = this.props.store;
    // const theme = this.state.darkMode ? options.darkTheme : options.theme;
    console.log('in render ', this.state.darkMode);
    // const themeClass = this.state.darkMode ? 'dark-theme': '';

    return (
      <ThemeProvider theme={options.theme}>
        <StoreProvider value={store}>
          <OptionsProvider value={options}>
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
                  <button onClick={() => this.onToggleDarkMode(false)}>Light</button>
                  <button onClick={() => this.onToggleDarkMode(true)}>Dark</button>
                </DarkModeSwitchContainer>
                {/* <input type="checkbox" onChange={this.onToggleDarkMode} checked={this.state.darkMode} id="darkMode" />
                <label htmlFor="darkMode">Dark Mode</label> */}
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
              <BackgroundStub />
            </RedocWrap>
            <UnifiedFooter hideLocale={true} />
          </OptionsProvider>
        </StoreProvider>
      </ThemeProvider>
    );
  }
}
