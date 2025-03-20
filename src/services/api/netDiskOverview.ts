// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 config/openapi.ts 进行定制化。
 * */

import { request } from '@umijs/max';

/** 获取网盘空间数据统计 GET /api/netdisk/overview/desc */
export async function netDiskOverviewSpace(options?: { [key: string]: any }) {
  return request<API.OverviewSpaceInfo>('/api/netdisk/overview/desc', {
    method: 'GET',
    ...(options || {}),
  });
}
