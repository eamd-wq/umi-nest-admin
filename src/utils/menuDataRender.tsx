import * as AntdIcons from '@ant-design/icons';
import { MenuDataItem } from '@ant-design/pro-components';
import React from 'react';
const allIcons: { [key: string]: any } = AntdIcons;
// 从接口获取菜单时icon为string类型
const fixMenuItemIcon = (menus: MenuDataItem[]): MenuDataItem[] => {
  menus.forEach((item) => {
    if (item.icon && typeof item.icon === 'string') {
      const [, value] = item.icon.split(':');
      if (allIcons[value]) {
        item.icon = React.createElement(allIcons[value]);
      } else {
        item.icon = '';
      }
    }
    // if (item.children && item.children.length > 0) {
    //   item.children = fixMenuItemIcon(item.children);
    // }
  });

  return menus;
};

export default fixMenuItemIcon;
