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
  RedocWrap,
  SideMenuTitle,
  StyledHeader,
} from './styled.elements';

import { SearchBox } from '../SearchBox/SearchBox';
import { StoreProvider } from '../StoreBuilder';
import { VersionSelector } from '../VersionSelector';
import { createGlobalStyle } from 'styled-components';
import { globalStyles } from '../../globalStyles';
import { AVAILABLE_LANGUAGES, getCurrLocale, onSelectLocale } from '../../utils/locale';

export interface RedocProps {
  store: AppStore;
}

const GlobalCss = createGlobalStyle`${globalStyles}`;

export class Redoc extends React.Component<RedocProps> {
  static propTypes = {
    store: PropTypes.instanceOf(AppStore).isRequired,
  };

  componentDidMount() {
    this.props.store.onDidMount();
  }

  componentWillUnmount() {
    this.props.store.dispose();
  }

  render() {
    const {
      store: { spec, menu, options, search, marker },
    } = this.props;
    const store = this.props.store;

    const enabledLocales = AVAILABLE_LANGUAGES.map(language => language.localeCode);

    return (
      <ThemeProvider theme={options.theme}>
        <StoreProvider value={store}>
          <OptionsProvider value={options}>
            <GlobalCss />
            <StyledHeader>
              <UnifiedNav
                position="relative"
                property={{ name: 'DOCS', searchParams: [] }}
                showLanguageSelector={true}
                onSelectLocale={onSelectLocale}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                locale={getCurrLocale()}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                enabledLocales={enabledLocales}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                darkMode={false}
                className="nav-light"
              />
              <UnifiedNav
                position="relative"
                property={{ name: 'DOCS', searchParams: [] }}
                showLanguageSelector={true}
                onSelectLocale={onSelectLocale}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                locale={getCurrLocale()}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                enabledLocales={enabledLocales}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                darkMode={true}
                className="nav-dark"
              />
            </StyledHeader>
            <RedocWrap className="redoc-wrap">
              <StickyResponsiveSidebar menu={menu} className="menu-content">
                <ApiLogo info={spec.info} />
                <SideMenuBackButton
                  backNavigationPath={options.backNavigationPath}
                  siteTitle={options.siteTitle}
                />
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
