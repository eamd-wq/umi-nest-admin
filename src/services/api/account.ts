// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 config/openapi.ts 进行定制化。
 * */

import { request } from '@umijs/max';

/** 账户登出 GET /api/account/logout */
export async function accountLogout(options?: { [key: string]: any }) {
  return request<any>('/api/account/logout', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取菜单列表 GET /api/account/menus */
export async function accountMenu(options?: { [key: string]: any }) {
  return request<API.AccountMenus[]>('/api/account/menus', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 更改账户密码 POST /api/account/password */
export async function accountPassword(
  body: API.PasswordUpdateDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/account/password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取权限列表 GET /api/account/permissions */
export async function accountPermissions(options?: { [key: string]: any }) {
  return request<string[]>('/api/account/permissions', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取账户资料 GET /api/account/profile */
export async function accountProfile(options?: { [key: string]: any }) {
  return request<API.AccountInfo>('/api/account/profile', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 更改账户资料 PUT /api/account/update */
export async function accountUpdate(
  body: API.AccountUpdateDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/account/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
