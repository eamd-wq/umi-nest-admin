// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 config/openapi.ts 进行定制化。
 * */

import { request } from '@umijs/max';

/** 获取服务器运行信息 GET /api/system/serve/stat */
export async function serveStat(options?: { [key: string]: any }) {
  return request<API.ServeStatInfo>('/api/system/serve/stat', {
    method: 'GET',
    ...(options || {}),
  });
}
