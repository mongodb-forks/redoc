import * as React from 'react';
import { MenuItemLabel, MenuItemLi, MenuItemTitle, MenuItemUl, MenuLink } from './styled.elements';

interface SideMenuBackButtonProps {
  backNavigationPath?: string;
}

export const SideMenuBackButton = ({ backNavigationPath }: SideMenuBackButtonProps) => {
  if (!backNavigationPath) return null;

  const depth = 1;
  return (
    <MenuItemUl expanded={true}>
      <MenuItemLi depth={depth}>
        <MenuLink href={backNavigationPath}>
          <MenuItemLabel depth={depth} active={false} isBackButton={true}>
            <MenuItemTitle>&#8592; Hello world</MenuItemTitle>
          </MenuItemLabel>
        </MenuLink>
      </MenuItemLi>
    </MenuItemUl>
  );
};
