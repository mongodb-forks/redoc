import * as React from 'react';
import {
  MenuItemLabel,
  MenuItemTitle,
  MenuItemUl,
  MenuLink,
  MenuBreak,
  MenuItemBackButtonLi,
  MenuItemBackButtonContainer,
} from './styled.elements';
import { DarkModeToggle } from '../DarkModeToggle/DarkModeToggle';

interface SideMenuBackButtonProps {
  backNavigationPath?: string;
  siteTitle?: string;
}

const DEFAULT_NAVIGATION_PATH = 'https://mongodb.com/docs/';

export const SideMenuBackButton = ({ backNavigationPath, siteTitle }: SideMenuBackButtonProps) => {
  // Depth of menu item can dictate the styling of the component
  const depth = 1;
  const href = backNavigationPath ?? DEFAULT_NAVIGATION_PATH;
  const text = `Back to ${siteTitle ?? ''} Docs`;

  return (
    <>
      <MenuItemUl expanded={true}>
        <MenuItemBackButtonLi>
          <MenuItemBackButtonContainer>
            <MenuLink href={href}>
              <MenuItemLabel depth={depth} active={false} isBackButton={true}>
                <MenuItemTitle>&#8592; {text}</MenuItemTitle>
              </MenuItemLabel>
            </MenuLink>
          </MenuItemBackButtonContainer>
          <DarkModeToggle />
        </MenuItemBackButtonLi>
      </MenuItemUl>
      <MenuBreak />
    </>
  );
};
