// 运行时配置

import defaultRoutes from '@/default/routes';
import { Navigate, RuntimeConfig } from '@umijs/max';
import { lazy } from 'react';
import initialState from './default/initialState';

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
    actionsRender: () => <>J*</>,
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
    path: '/',
    element: <Navigate to="/dashboard/analysis" replace />,
  });
  routes.push(...defaultRoutes(lazyLoad));
};
