/**
 * Mainly copied from Snooty locale.js and other snooty utils
 * Nov 14, 2024
 */

/**
 * Key used to access browser storage for user's preferred locale
 */
export const STORAGE_KEY_PREF_LOCALE = 'preferredLocale';

// Update this as more languages are introduced
export const AVAILABLE_LANGUAGES = [
  { language: 'English', localeCode: 'en-us' },
  { language: '简体中文', localeCode: 'zh-cn', fontFamily: 'Noto Sans SC' },
  { language: '한국어', localeCode: 'ko-kr', fontFamily: 'Noto Sans KR' },
  { language: 'Português', localeCode: 'pt-br' },
  { language: '日本語', localeCode: 'ja-jp', fontFamily: 'Noto Sans JP' },
];

const isBrowser = typeof window !== 'undefined';

const setLocalValue = (key: string, value: any) => {
  try {
    if (isBrowser) {
      const prevState = JSON.parse(window.localStorage.getItem('mongodb-docs') ?? '');
      localStorage.setItem('mongodb-docs', JSON.stringify({ ...prevState, [key]: value }));
    }
  } catch {
    console.error('Error setting localStorage value');
  }
};

const validateLocaleCode = potentialCode =>
  // Include hidden languages in validation to ensure current locale of hidden sites can still be captured correctly
  !!AVAILABLE_LANGUAGES.find(({ localeCode }) => potentialCode === localeCode);

const removeLeadingSlash = (filePath: string) => filePath.replace(/^\/+/, '');

// Remove duplicate slashes in path string
const normalizePath = (path: string) => path.replace(/\/+/g, `/`);

/**
 * Strips the first locale code found in the slug. This function should be used to determine the original un-localized path of a page.
 * This assumes that the locale code is the first part of the URL slug. For example: "/zh-cn/docs/foo".
 * @param {string} slug
 * @returns {string}
 */
const stripLocale = slug => {
  // Smartling has extensive replace logic for URLs and slugs that follow the pattern of "https://www.mongodb.com/docs". However,
  // there are instances where we can't rely on them for certain components
  if (!slug) {
    return '';
  }

  // Normalize the slug in case any malformed slugs appear like: "//zh-cn/docs"
  const slugWithSlash = slug.startsWith('/') ? slug : `/${slug}`;
  const normalizedSlug = normalizePath(slugWithSlash);
  const firstPathSlug = normalizedSlug.split('/', 2)[1];

  // Replace from the original slug to maintain original form
  const res = validateLocaleCode(firstPathSlug)
    ? normalizePath(slug.replace(firstPathSlug, ''))
    : slug;
  if (res.startsWith('/') && !slug.startsWith('/')) {
    return removeLeadingSlash(res);
  } else if (!res.startsWith('/') && slug.startsWith('/')) {
    return `/${res}`;
  } else {
    return res;
  }
};

/**
 * Returns the locale code based on the current location pathname of the page.
 * @returns {string}
 */
export const getCurrLocale = () => {
  const defaultLang = 'en-us';

  if (!isBrowser) {
    return defaultLang;
  }

  // This currently needs to be client-side because the source page doesn't know about locale at
  // build time. Smartling's GDN handles localization
  // Example on https://www.mongodb.com/zh-cn/docs/manual/introduction:
  // expected pathname - /zh-cn/docs/manual/introduction; expected locale - "zh-cn"
  const pathname = window.location.pathname;
  const expectedDocsPrefixes = ['docs', 'docs-qa'];
  const firstPathSlug = pathname.split('/', 2)[1];
  if (expectedDocsPrefixes.includes(firstPathSlug)) {
    return defaultLang;
  }

  const slugMatchesCode = validateLocaleCode(firstPathSlug);
  return slugMatchesCode ? firstPathSlug : defaultLang;
};

/**
 * Returns the pathname with its locale code prepended. Leading slashes are preserved, if they exist.
 * @param {string} pathname - Path name or slug of the page
 * @param {string?} localeCode - Optional locale code. By default, the code is determined based on the current location of the page
 * @returns {string}
 */
export const localizePath = (pathname: string | undefined, localeCode?: string) => {
  if (!pathname) {
    return '';
  }

  const unlocalizedPath = stripLocale(pathname);
  const code = localeCode && validateLocaleCode(localeCode) ? localeCode : getCurrLocale();
  const languagePrefix = code === 'en-us' ? '' : `${code}/`;
  let newPath = languagePrefix + unlocalizedPath;
  if (pathname.startsWith('/')) {
    newPath = `/${newPath}`;
  }
  return normalizePath(newPath);
};

export const onSelectLocale = locale => {
  const location = window.location;
  setLocalValue(STORAGE_KEY_PREF_LOCALE, locale);
  const localizedPath = localizePath(location.pathname, locale);
  window.location.href = localizedPath;
};
