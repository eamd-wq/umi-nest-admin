// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 config/openapi.ts 进行定制化。
 * */

import { request } from '@umijs/max';

/** 下线指定在线用户 POST /api/system/online/kick */
export async function onlineKick(
  body: API.KickDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/system/online/kick', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询当前在线用户 GET /api/system/online/list */
export async function onlineList(options?: { [key: string]: any }) {
  return request<API.OnlineUserInfo[]>('/api/system/online/list', {
    method: 'GET',
    ...(options || {}),
  });
}
