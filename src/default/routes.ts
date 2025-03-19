export default (lazyLoad: (moduleName: string) => JSX.Element) => [
  {
    name: '登录',
    path: '/login',
    id: 'login',
    element: lazyLoad('NotAgree/Login'),
    layout: false,
  },
];
