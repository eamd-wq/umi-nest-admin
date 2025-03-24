// 运行时配置

import Access from '@/components/Access';
import initialState from '@/default/initialState';
import noAuthRouter from '@/default/noAuthRouter';
import defaultRoutes from '@/default/routes';
import { RoutePath } from '@/enums/routePath';
import { Api } from '@/services';
import requestConfig from '@/services/interceptor';
import { menusDataAdapter } from '@/utils/dataAdapter';
import fixMenuItemIcon from '@/utils/menuDataRender';
import { MenuDataItem } from '@ant-design/pro-components';
import { history, Navigate, RuntimeConfig } from '@umijs/max';
import { lazy } from 'react';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<InitialStateType> {
  const token = localStorage.getItem('x-token');

  if (token) {
    // 用户信息
    const { data: userInfo } = await Api.account.accountProfile();

    // 菜单权限
    const { data } = await Api.account.accountMenu();

    const menus: API.AccountMenus[] = [
      {
        path: RoutePath.MAIN,
        meta: {
          title: '',
          orderNo: 0,
        },
        component: RoutePath.MAIN,
        name: '首页',
        id: -1,
      },
      ...data,
    ];

    // 权限
    const { data: access } = await Api.account.accountPermissions();

    // 菜单权限
    const menuAccess = menus.reduce(
      (t, i) => [
        ...t,
        ...(i.children
          ?.filter((i) => i.component)
          .map((ci) => `${i.path}${ci.path}`) || []),
      ],
      menus.map((i) => i.path),
    );

    return {
      ...initialState,
      access,
      userInfo,
      menus,
      menuAccess,
    };
  }
  return {
    ...initialState,
  };
}

export const layout: RuntimeConfig['layout'] = ({ initialState }) => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      request: async () => menusDataAdapter(initialState?.menus || []),
    },
    menuDataRender: (menusData: MenuDataItem[]) => fixMenuItemIcon(menusData),
    actionsRender: () => null,
    childrenRender: (children) => <Access>{children}</Access>,
  };
};

export const patchClientRoutes: RuntimeConfig['patchClientRoutes'] = ({
  routes,
}) => {
  const lazyLoad = (moduleName: string) => {
    const Module = lazy(() => import(`./pages/${moduleName}`));
    return <Module />;
  };
  routes.unshift({
    path: RoutePath.ROOT,
    element: <Navigate to={RoutePath.MAIN} replace />,
  });
  routes.push(...defaultRoutes(lazyLoad));
};

export const request: RuntimeConfig['request'] = { ...requestConfig };

export const render: RuntimeConfig['render'] = (oldRender) => {
  const pathname = location.pathname;
  const token = localStorage.getItem('x-token');
  if (token && pathname === RoutePath.LOGIN) {
    history.replace(RoutePath.ROOT);
  } else if (!token && !noAuthRouter.includes(pathname)) {
    history.replace(RoutePath.LOGIN);
  }
  oldRender();
};
