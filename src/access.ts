import noAuthRouter from '@/default/noAuthRouter';
import { RoutePath } from '@/enums/routePath';

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default (initialState: InitialStateType) => {
  const access: string[] = [];
  if (initialState && initialState.access) {
    access.push(...initialState.access.map((item) => item.toLowerCase()));
  }
  return {
    buttonAccess: (name: string) => access.includes(name.toLowerCase()),
    urlAccess: (name: string) => {
      if (name === RoutePath.ROOT) {
        return localStorage.getItem('x-token') !== null;
      }
      let accessName = name.slice(1).toLowerCase().replace(/\//g, '.');
      return access.includes(accessName) || noAuthRouter.includes(name);
    },
  };
};
