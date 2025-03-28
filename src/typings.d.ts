interface InitialStateType {
  name: string;
  // 登录状态
  isLogin: boolean;
  // 权限
  access: string[];
  // 获取用户信息
  fetchUserInfo: () => Promise<any>;
  // 用户信息
  userInfo?: API.AccountInfo;
  // 菜单
  menus?: API.AccountMenus[];
  // 权限
  menuAccess: string[];
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
