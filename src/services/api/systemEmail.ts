// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 config/openapi.ts 进行定制化。
 * */

import { request } from '@umijs/max';

/** 发送邮件 POST /api/tools/email/send */
export async function emailSend(
  body: API.EmailSendDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/tools/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
