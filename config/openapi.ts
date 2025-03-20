import { generateService } from '@umijs/openapi';

const re = /controller[-_ .](\w)/gi;

// swagger-typescript-api
generateService({
  schemaPath: 'http://127.0.0.1:7001/api-docs-json',
  serversPath: './src/services',
  // 自定义网络请求函数路径
  requestImportStatement: `
  /**
   * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 config/openapi.ts 进行定制化。
   * */

  import { request } from "@umijs/max";
  `,
  hook: {
    afterOpenApiDataInited(openAPIData) {
      const schemas = openAPIData.components?.schemas;
      if (schemas) {
        Object.values(schemas).forEach((schema) => {
          if ('$ref' in schema) {
            return;
          }
          if (schema.properties) {
            Object.values(schema.properties).forEach((prop) => {
              if ('$ref' in prop) {
                return;
              }
              // 匡正文件上传的参数类型
              if (prop.format === 'binary') {
                prop.type = 'object';
              }
            });
          }
        });
      }
      return openAPIData;
    },
    // @ts-ignore
    customFunctionName(operationObject, apiPath) {
      const { operationId } = operationObject;

      if (!operationId) {
        console.warn('[Warning] no operationId', apiPath);
        return;
      }

      // @ts-ignore
      const funcName = operationId.replace(re, (_all, letter) =>
        letter.toUpperCase(),
      );

      operationObject.operationId = funcName;

      return funcName;
    },
    // @ts-ignore
    customFileNames(operationObject, apiPath) {
      const { operationId } = operationObject;

      if (!operationId) {
        console.warn('[Warning] no operationId', apiPath);
        return;
      }
      const controllerName = operationId.split(re)[0];
      const moduleName = operationObject.tags?.[0].split(' - ')[0];

      // 移除 query 参数的默认值
      operationObject.parameters?.forEach((param) => {
        if ('in' in param && param.in === 'query' && param.schema) {
          if (!('$ref' in param.schema) && param.schema.default) {
            Reflect.deleteProperty(param.schema, 'default');
          }
        }
      });

      if (moduleName === controllerName) {
        return [controllerName];
      } else if (moduleName && moduleName !== controllerName) {
        return [`${moduleName}_${controllerName}`];
      }
      return;
    },
  },
});
