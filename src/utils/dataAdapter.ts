import { MenuDataItem } from '@ant-design/pro-components';

export const menusDataAdapter = (menus: API.AccountMenus[]): MenuDataItem[] => {
  if (!menus.length) {
    return [];
  }
  return menus
    .map((i) => ({
      children: menusDataAdapter(i.children || []),
      path: i.path,
      name: i.name,
      icon: i.meta.icon,
      hideInMenu: i.meta.show === 0,
      target: i.meta.isExt ? '_blank' : '',
      orderNo: i.meta.orderNo || 0,
    }))
    .sort((a, b) => a.orderNo - b.orderNo);
};
