interface InitialStateType {
  name: string;
  // 登录状态
  isLogin: boolean;
  // 权限
  access: string[];
  // 获取用户信息
  fetchUserInfo: () => Promise<any>;
  // 用户信息
  userInfo?: any;
  // 菜单
  menus?: any;
  // 主题
  theme: 'light' | 'dark';
}

interface RouteObject {
  name: string;

  caseSensitive?: boolean;
  children?: RouteObject[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
}
