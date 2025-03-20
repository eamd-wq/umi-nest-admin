// 运行时配置

import Access from '@/components/Access';
import initialState from '@/default/initialState';
import noAuthRouter from '@/default/noAuthRouter';
import defaultRoutes from '@/default/routes';
import { RoutePath } from '@/enums/routePath';
import requestConfig from '@/services/interceptor';
import { history, Navigate, RuntimeConfig } from '@umijs/max';
import { lazy } from 'react';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<InitialStateType> {
  return {
    ...initialState,
  };
}

export const layout: RuntimeConfig['layout'] = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
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
