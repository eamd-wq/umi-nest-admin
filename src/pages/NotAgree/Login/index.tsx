import { RoutePath } from '@/enums/routePath';
import { Api } from '@/services';
import { verifyMobile } from '@/utils/format';
import {
  LockOutlined,
  MobileOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  LoginFormPage,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Tabs, message, theme } from 'antd';
import { useCallback, useState } from 'react';
import GraphicCaptcha from './components/GraphicCaptcha';

type LoginType = 'phone' | 'account';

const Login = () => {
  const { initialState } = useModel('@@initialState');
  const [loginType, setLoginType] = useState<LoginType>('account');
  const { token } = theme.useToken();

  const [captchaId, setCaptchaId] = useState<string>();

  const submitHandler = useCallback(
    async (values: API.LoginDto) => {
      if (!captchaId) {
        message.error('请先获取验证码');
        return;
      }
      const { data } = await Api.auth.authLogin({ ...values, captchaId });
      localStorage.setItem('x-token', data.token);
      location.replace(RoutePath.ROOT);
    },
    [captchaId],
  );
  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '100vh',
      }}
    >
      <LoginFormPage
        backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
        title={initialState?.name}
        subTitle="纯大前端技术的前后端分离模板"
        onFinish={submitHandler}
      >
        <Tabs
          centered
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey as LoginType)}
          items={[
            {
              key: 'account',
              label: '账号密码登录',
            },
            {
              key: 'phone',
              label: '手机号登录',
            },
          ]}
        />
        {loginType === 'account' && (
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: (
                  <UserOutlined
                    style={{
                      color: token.colorText,
                    }}
                  />
                ),
              }}
              placeholder={'用户名: admin'}
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: (
                  <LockOutlined
                    style={{
                      color: token.colorText,
                    }}
                  />
                ),
              }}
              placeholder={'密码: ******'}
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            />
            <ProFormText
              fieldProps={{
                size: 'large',
                prefix: (
                  <SafetyCertificateOutlined
                    style={{
                      color: token.colorText,
                    }}
                  />
                ),
                suffix: <GraphicCaptcha onChange={(id) => setCaptchaId(id)} />,
              }}
              name="verifyCode"
              placeholder={'验证码'}
              rules={[
                {
                  required: true,
                  message: '请输入验证码！',
                },
              ]}
            />
          </>
        )}
        {loginType === 'phone' && (
          <>
            <ProFormText
              fieldProps={{
                size: 'large',
                prefix: (
                  <MobileOutlined
                    style={{
                      color: token.colorText,
                    }}
                  />
                ),
              }}
              name="mobile"
              placeholder={'手机号'}
              rules={[
                {
                  required: true,
                  message: '请输入手机号！',
                },
                {
                  ...verifyMobile,
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: 'large',
                prefix: (
                  <LockOutlined
                    style={{
                      color: token.colorText,
                    }}
                  />
                ),
              }}
              captchaProps={{
                size: 'large',
              }}
              placeholder={'请输入验证码'}
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} ${'获取验证码'}`;
                }
                return '获取验证码';
              }}
              name="captcha"
              rules={[
                {
                  required: true,
                  message: '请输入验证码！',
                },
              ]}
              onGetCaptcha={async () => {
                message.success('获取验证码成功！验证码为：1234');
              }}
            />
          </>
        )}
        <div
          style={{
            marginBlockEnd: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}
          >
            忘记密码
          </a>
        </div>
      </LoginFormPage>
    </div>
  );
};

export default Login;
