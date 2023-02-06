import { ResolvedThemeInterface } from '../../styled-components';
export declare const OperationBadge: import("styled-components").StyledComponent<"span", ResolvedThemeInterface, {
    className: string;
} & {
    type: string;
}, "className">;
export declare const MenuItemUl: import("styled-components").StyledComponent<"ul", ResolvedThemeInterface, {
    expanded: boolean;
}, never>;
export declare const MenuItemLi: import("styled-components").StyledComponent<"li", ResolvedThemeInterface, {
    depth: number;
}, never>;
export declare const MenuLink: import("styled-components").StyledComponent<"a", ResolvedThemeInterface, {}, never>;
export declare const menuItemDepth: {
    0: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<object, ResolvedThemeInterface>>;
    1: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<object, ResolvedThemeInterface>>;
};
export interface MenuItemLabelType {
    depth: number;
    active: boolean;
    deprecated?: boolean;
    isBackButton?: boolean;
    type?: string;
}
export declare const MenuItemLabel: import("styled-components").StyledComponent<"label", ResolvedThemeInterface, {
    role: "menuitem";
    className: string;
} & MenuItemLabelType, "className" | "role">;
export declare const MenuBreak: import("styled-components").StyledComponent<"hr", ResolvedThemeInterface, {}, never>;
export declare const MenuItemTitle: import("styled-components").StyledComponent<"span", ResolvedThemeInterface, {
    width?: string | undefined;
}, never>;
export declare const RedocAttribution: import("styled-components").StyledComponent<"div", ResolvedThemeInterface, {}, never>;