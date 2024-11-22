/**
 * Mainly copied from Snooty locale.js and other snooty utils
 * Nov 14, 2024
 */
/**
 * Key used to access browser storage for user's preferred locale
 */
export declare const STORAGE_KEY_PREF_LOCALE = "preferredLocale";
export declare const AVAILABLE_LANGUAGES: ({
    language: string;
    localeCode: string;
    fontFamily?: undefined;
} | {
    language: string;
    localeCode: string;
    fontFamily: string;
})[];
/**
 * Returns the locale code based on the current location pathname of the page.
 * @returns {string}
 */
export declare const getCurrLocale: () => string;
/**
 * Returns the pathname with its locale code prepended. Leading slashes are preserved, if they exist.
 * @param {string} pathname - Path name or slug of the page
 * @param {string?} localeCode - Optional locale code. By default, the code is determined based on the current location of the page
 * @returns {string}
 */
export declare const localizePath: (pathname: string | undefined, localeCode?: string | undefined) => string;
export declare const onSelectLocale: (locale: any) => void;
