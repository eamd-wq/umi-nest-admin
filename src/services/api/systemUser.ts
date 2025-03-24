// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 config/openapi.ts 进行定制化。
 * */

import { request } from '@umijs/max';

/** 获取用户列表 GET /api/system/users */
export async function userList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UserListParams,
  options?: { [key: string]: any },
) {
  return request<{
    items?: API.UserEntity[];
    meta?: {
      itemCount?: number;
      totalItems?: number;
      itemsPerPage?: number;
      totalPages?: number;
      currentPage?: number;
    };
  }>('/api/system/users', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增用户 POST /api/system/users */
export async function userCreate(
  body: API.UserDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/system/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询用户 GET /api/system/users/${param0} */
export async function userRead(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UserReadParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.UserEntity>(`/api/system/users/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新用户 PUT /api/system/users/${param0} */
export async function userUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UserUpdateParams,
  body: API.UserUpdateDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/system/users/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除用户 DELETE /api/system/users/${param0} */
export async function userDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UserDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/system/users/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更改用户密码 POST /api/system/users/${param0}/password */
export async function userPassword(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UserPasswordParams,
  body: API.UserPasswordDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/system/users/${param0}/password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
