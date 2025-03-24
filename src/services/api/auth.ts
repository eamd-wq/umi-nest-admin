// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 config/openapi.ts 进行定制化。
 * */

import { request } from '@umijs/max';

/** 登录 POST /api/auth/login */
export async function authLogin(
  body: API.LoginDto,
  options?: { [key: string]: any },
) {
  return request<API.LoginToken>('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注册 POST /api/auth/register */
export async function authRegister(
  body: API.RegisterDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
