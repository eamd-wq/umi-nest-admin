import noAuthRouter from '@/default/noAuthRouter';

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default (initialState: InitialStateType) => {
  return {
    buttonAccess: (name: string) => initialState.access.includes(name),
    urlAccess: (name: string) =>
      initialState.menuAccess.includes(name) || noAuthRouter.includes(name),
  };
};
