import { Api } from '@/services';
import React, { useCallback, useEffect, useState } from 'react';

interface Props {
  onChange?: (id: API.LoginDto['captchaId']) => void;
}

const GraphicCaptcha: React.FC<Props> = ({ onChange }) => {
  const [captcha, setCaptcha] = useState<string>();

  const getCaptchaHandler = useCallback(async () => {
    const { data } = await Api.captcha.captchaCaptchaByImg({
      width: 100,
      height: 50,
    });
    setCaptcha(data.img);
    onChange?.(data.id);
  }, []);

  useEffect(() => {
    getCaptchaHandler();
  }, []);
  return (
    <div className="absolute right-0 rounded-md overflow-hidden h-full w-[76px] flex items-center">
      <img
        className="w-full"
        src={captcha}
        alt="code-img"
        onClick={getCaptchaHandler}
      />
    </div>
  );
};

export default GraphicCaptcha;
