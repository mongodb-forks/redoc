import type { HTTPBadgeColors } from '../theme';
/**
 * Uses theming options to return appropriate styling for badges. Some badges may not
 * currently have custom styling.
 *
 * @param badgeColors
 * @param colorTheme
 * @returns string
 */
export declare function getBadgeStyles(badgeColors: HTTPBadgeColors | string, colorTheme: string): string;
