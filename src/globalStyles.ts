import { palette } from '@leafygreen-ui/palette';

export const globalStyles = `
  :root {
    --middle-panel-bg-color: unset;
    --sidebar-bg-color: #F9FBFA;
    --right-panel-bg-color: #001E2B;
    --sidebar-text-color: black;
    --text-primary-color: #1C2D38;
    --text-secondary-color: #3e647c;
    --api-header-color: #00684A;

    --resource-version-pill-bg: #E8EDEB;
    --resource-version-pill-color: #001E2B;
    --download-btn-border-color: #000000;

    --colors-primary-main: #001E2B;
    --colors-primary-main-light: #006591;
    --colors-primary-main-dark: #000000;

    --colors-success-main: #1d8127;
    --colors-success-main-light: #86e490;
    --colors-success-main-dark: #0a2e0e;

    --absolute-border-color: none;
    --section-divider-color: rgba(0, 0, 0, 0.2);

    --sidebar-hover: #E8EDEB;
    --sidebar-active-bg: #E3FCF7;
    --sidebar-active-color: #023430;
    --sidebar-hl: #E7EEEC;
    --back-btn-label-color: #5C6C75;

    --underlined-header-color: rgba(38, 50, 56, 0.5);
    --underlined-header-border-color: rgba(38, 50, 56, 0.3);
    --link-blue: #016BF8;
    --schema-lines-color: #001E2B;

    --type-name-color: #1C2D38;
    --type-prefix-color: rgba(28, 45, 56, 0.9);

    --responses-success-color: #00684A;
    --responses-success-bg: #E3FCF7;

    --responses-error-color: #DB3030;
    --responses-error-bg: #FFEAE5;

    --http-get-bg: #E1F7FF;
    --http-get-border: #C3E7FE;
    --http-get-color: #1254B7;

    --http-post-bg: #E3FCF7;
    --http-post-border: #C0FAE6;
    --http-post-color: #00684A;

    --http-patch-bg: #FEF7DB;
    --http-patch-border: #FFEC9E;
    --http-patch-color: #944F01;

    --http-put-bg: #FEF7DB;
    --http-put-border: #FFEC9E;
    --http-put-color: #944F01;

    --http-delete-bg: #FFEAE5;
    --http-delete-border: #FFCDC7;
    --http-delete-color: #970606;

    --gray-pill-bg: #F9FBFA;
    --gray-pill-border: #E8EDEB;
    --gray-pill-color: #1C2D38;

    --blue-pill-bg: #E1F7FF;
    --blue-pill-border: #C3E7FE;
    --blue-pill-color: #016BF8;

    --require-label-color: #DB3030;
    --securities-col-bg: rgb(245, 245, 245);

    --typography-code-color: #1C2D38;
    --typography-code-bg: #F9FBFA;

    --select-btn-color: #001e2b;
    --select-btn-bg: white;
    --select-btn-border: #889397;
    --select-btn-hover-shadow-color: #E8EDEB;
    --select-btn-focus-shadow-color: #0498EC;

    --select-ul-border: #E8EDEB;
    --select-ul-shadow-color: rgba(0,30,43,0.25);
    --select-ul-bg: white;

    --select-disabled-color: #889397;
    --select-enabled-hover-bg: #E8EDEB;

    --select-li-color: #1C2D38;
    --select-li-focus-color: #083C90;
    --select-li-focus-bg: #E1F7FF;
    --select-li-before-focus-bg: #016BF8;

    --html-select-bg: white;
    --html-select-color: #263238;
    --html-select-border: rgba(38, 50, 56, 0.5);

    --arrow-icon: initial;

    --one-of-btn-bg: white;
    --one-of-btn-color: #001E2B;

    --one-of-btn-bg-active: #001E2B;
    --one-of-btn-color-active: white;

    --button-color: ${palette.gray.dark1};
    --button-color-on-hover: ${palette.black};
    --button-bg-on-hover: ${palette.gray.light2};
  }

  .dark-theme {
    --middle-panel-bg-color: #001E2B;
    --sidebar-bg-color: #112733;
    --right-panel-bg-color: #001E2B;
    --sidebar-text-color: #E8EDEB;
    --text-primary-color: #E8EDEB;
    --text-secondary-color: #f7f7f7;
    --api-header-color: #E8EDEB;

    --resource-version-pill-bg: #1C2D38;
    --resource-version-pill-color: #E8EDEB;
    --download-btn-border-color: #5C6C75;

    --colors-primary-main: #E8EDEB;
    --colors-primary-main-light: #afc0b9;
    --colors-primary-main-dark: #fff;

    --colors-success-main: #71F6BA;
    --colors-success-main-light: #00684A;
    --colors-success-main-dark: #023430;

    --absolute-border-color: #3D4F58;
    --section-divider-color: rgba(232, 237, 235, 0.2);

    --sidebar-hover: #1C2D38;
    --sidebar-active-bg: #023430;
    --sidebar-active-color: #E3FCF7;
    --sidebar-hl: #3D4F58;
    --back-btn-label-color: #889397;

    --underlined-header-color: #C1C7C6;
    --underlined-header-border-color: #C1C7C6;
    --link-blue: #0498EC;
    --schema-lines-color: #889397;

    --type-name-color: #E8EDEB;
    --type-prefix-color: rgba(232,237,235,0.9);

    --responses-success-color: #C0FAE6;
    --responses-success-bg: #023430;

    --responses-error-color: #FFCDC7;
    --responses-error-bg: #5B0000;

    --http-get-bg: #083C90;
    --http-get-border: #1254B7;
    --http-get-color: #C3E7FE;

    --http-post-bg: #023430;
    --http-post-border: #00684A;
    --http-post-color: #00ED64;

    --http-patch-bg: #4C2100;
    --http-patch-border: #944F01;
    --http-patch-color: #FFEC9E;

    --http-put-bg: #4C2100;
    --http-put-border: #944F01;
    --http-put-color: #FFEC9E;

    --http-delete-bg: #5B0000;
    --http-delete-border: #970606;
    --http-delete-color: #FFCDC7;

    --gray-pill-bg: #5c6c75;
    --gray-pill-border: #889397;
    --gray-pill-color: #f9fbfa;

    --blue-pill-bg: #083C90;
    --blue-pill-border: #1254B7;
    --blue-pill-color: #C3E7FE;

    --require-label-color: #FF6960;
    --securities-col-bg: #1C2D38;

    --typography-code-color: #f9fbfa;
    --typography-code-bg: #5c6c75;

    --select-btn-color: #e8edeb;
    --select-btn-bg: #112733;
    --select-btn-border: #889397;
    --select-btn-hover-shadow-color: #3d4f58;
    --select-btn-focus-shadow-color: #0497ec;

    --select-ul-border: #3d4f58;
    --select-ul-shadow-color: rgba(0, 0, 0, 0.15);
    --select-ul-bg: #112733;

    --select-disabled-color: #5c6c75;
    --select-enabled-hover-bg: #3d4f58;

    --select-li-color: #e8edeb;
    --select-li-focus-color: rgb(225, 247, 255);
    --select-li-focus-bg: rgb(12, 38, 87);
    --select-li-before-focus-bg: rgb(1, 107, 248);

    --html-select-bg: #112733;
    --html-select-color: #889397;
    --html-select-border: #889397;

    --arrow-icon: #C1C7C6;

    --one-of-btn-bg: #001E2B;
    --one-of-btn-color: #C1C7C6;

    --one-of-btn-bg-active: #ffffff;
    --one-of-btn-color-active: #001E2B;

    --button-color: ${palette.gray.light1};
    --button-color-on-hover: ${palette.gray.light3};
    --button-bg-on-hover: ${palette.gray.dark2};
  }
`;
