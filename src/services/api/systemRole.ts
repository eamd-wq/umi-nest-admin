// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 config/openapi.ts 进行定制化。
 * */

import { request } from '@umijs/max';

/** 获取角色列表 GET /api/system/roles */
export async function roleList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RoleListParams,
  options?: { [key: string]: any },
) {
  return request<{
    items?: API.RoleEntity[];
    meta?: {
      itemCount?: number;
      totalItems?: number;
      itemsPerPage?: number;
      totalPages?: number;
      currentPage?: number;
    };
  }>('/api/system/roles', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增角色 POST /api/system/roles */
export async function roleCreate(
  body: API.RoleDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/system/roles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取角色信息 GET /api/system/roles/${param0} */
export async function roleInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RoleInfoParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.RoleInfo>(`/api/system/roles/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新角色 PUT /api/system/roles/${param0} */
export async function roleUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RoleUpdateParams,
  body: API.RoleUpdateDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/system/roles/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除角色 DELETE /api/system/roles/${param0} */
export async function roleDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RoleDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/system/roles/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
