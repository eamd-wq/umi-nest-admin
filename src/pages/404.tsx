import { RoutePath } from '@/enums/routePath';
import { history } from '@umijs/max';
import { Button, Result } from 'antd';

export default () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="您访问的页面不存在。"
      extra={
        <Button
          onClick={() => {
            history.push(RoutePath.ROOT);
          }}
        >
          去首页
        </Button>
      }
    />
  );
};
