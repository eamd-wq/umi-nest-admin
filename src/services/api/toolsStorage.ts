// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 config/openapi.ts 进行定制化。
 * */

import { request } from '@umijs/max';

/** 删除文件 POST /api/tools/storage/delete */
export async function storageDelete(
  body: API.StorageDeleteDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/tools/storage/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取本地存储列表 GET /api/tools/storage/list */
export async function storageList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.StorageListParams,
  options?: { [key: string]: any },
) {
  return request<
    API.ResOp & {
      data?: {
        items?: API.StorageInfo[];
        meta?: {
          itemCount?: number;
          totalItems?: number;
          itemsPerPage?: number;
          totalPages?: number;
          currentPage?: number;
        };
      };
    }
  >('/api/tools/storage/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
