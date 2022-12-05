import * as React from 'react';
import {
  MenuItemLabel,
  MenuItemLi,
  MenuItemTitle,
  MenuItemUl,
  MenuLink,
  MenuBreak,
} from './styled.elements';

interface SideMenuBackButtonProps {
  backNavigationPath: string;
}

export const SideMenuBackButton = ({ backNavigationPath }: SideMenuBackButtonProps) => {
  // Depth of menu item can dictate the styling of the component
  const depth = 1;

  return (
    <>
      <MenuItemUl expanded={true}>
        <MenuItemLi depth={depth}>
          <MenuLink href={backNavigationPath}>
            <MenuItemLabel depth={depth} active={false} isBackButton={true}>
              <MenuItemTitle>&#8592; Hello world</MenuItemTitle>
            </MenuItemLabel>
          </MenuLink>
        </MenuItemLi>
      </MenuItemUl>
      <MenuBreak />
    </>
  );
};
