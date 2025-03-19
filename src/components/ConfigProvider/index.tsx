import { ProConfigProvider } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import React from 'react';

const ConfigProvider = (props: { children: React.ReactNode }) => {
  const { initialState } = useModel('@@initialState');
  return (
    <ProConfigProvider dark={initialState?.theme === 'dark'}>
      {props.children}
    </ProConfigProvider>
  );
};

export default ConfigProvider;
