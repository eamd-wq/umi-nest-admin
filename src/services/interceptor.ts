import { ConventionCode } from '@/enums/httpResult';
import { RequestConfig } from '@umijs/max';
import { message, Modal } from 'antd';

const UNKNOWN_ERROR = '未知错误，请重试';

/**
 * 响应拦截
 */
const responseInterceptors: RequestConfig['responseInterceptors'] = [
  [
    async (response) => {
      const data = response.data as API.ResOp;
      if (data.code !== ConventionCode.OK) {
        message.error(data.message || UNKNOWN_ERROR);

        // 非法或身份过期
        if (
          [ConventionCode.ILLEGAL, ConventionCode.EXPIRE].includes(data.code)
        ) {
          Modal.confirm({
            title: '警告',
            content:
              data.message || '账号异常，您可以取消停留在该页上，或重新登录',
            okText: '重新登录',
            cancelText: '取消',
            onOk: () => {
              localStorage.clear();
              window.location.reload();
            },
          });
        }

        // throw other
        const error = new Error(data.message || UNKNOWN_ERROR) as Error & {
          code: any;
        };
        error.code = data.code;
        return Promise.reject(error);
      }

      return response;
    },
    async (error: any) => {
      // 处理 422 或者 500 的错误异常提示
      const errMsg = error?.response?.data?.message ?? UNKNOWN_ERROR;
      message.error({ content: errMsg, key: errMsg });
      error.message = errMsg;
      return Promise.reject(error);
    },
  ],
];

const requestConfig: RequestConfig = {
  baseURL: process.env.DOMAIN,
  timeout: 5000,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  // 请求拦截器
  requestInterceptors: [
    (config: any) => {
      config.headers['Authorization'] = `Bearer ${localStorage.getItem(
        'x-token',
      )}`;

      return { ...config };
    },
  ],
  responseInterceptors,
};

export default requestConfig;
