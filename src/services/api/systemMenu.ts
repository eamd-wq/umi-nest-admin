// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 config/openapi.ts 进行定制化。
 * */

import { request } from '@umijs/max';

/** 获取所有菜单列表 GET /api/system/menus */
export async function menuList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MenuListParams,
  options?: { [key: string]: any },
) {
  return request<API.ResOp & { data?: API.MenuItemInfo[] }>(
    '/api/system/menus',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 新增菜单或权限 POST /api/system/menus */
export async function menuCreate(
  body: API.MenuDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/system/menus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取菜单或权限信息 GET /api/system/menus/${param0} */
export async function menuInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MenuInfoParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/system/menus/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新菜单或权限 PUT /api/system/menus/${param0} */
export async function menuUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MenuUpdateParams,
  body: API.MenuUpdateDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/system/menus/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除菜单或权限 DELETE /api/system/menus/${param0} */
export async function menuDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MenuDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/system/menus/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取后端定义的所有权限集 GET /api/system/menus/permissions */
export async function menuGetPermissions(options?: { [key: string]: any }) {
  return request<string[]>('/api/system/menus/permissions', {
    method: 'GET',
    ...(options || {}),
  });
}
