// 全局共享数据示例
import { useState } from 'react';

const useGlobal = () => {
  const [userInfo, setUserInfo] = useState<API.AccountInfo>();

  return {
    userInfo,
    setUserInfo,
  };
};

export default useGlobal;
