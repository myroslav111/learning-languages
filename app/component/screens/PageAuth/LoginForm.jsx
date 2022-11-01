import { AiFillEye } from 'react-icons/ai';
import Button from '../../ui/Button';
import { formControl } from '../../../../styles/Input.module.scss';
import { iconEye, formBtn } from '../../../../styles/PageAuth.module.scss';
import Input from '../../ui/Input';
// import { useState } from 'react';

const LoginForm = () => {
  return (
    <div>
      <div>
        <Input
          type="email"
          stylesInputProp={formControl}
          placeholder="email"
          required=""
        />
      </div>
      <div style={{ position: 'relative' }}>
        <Input
          id="passwordField"
          type="password"
          stylesInputProp={formControl}
          placeholder="Password"
          required=""
        />
        <span>
          <AiFillEye className={iconEye} />
        </span>
      </div>
      <div>
        <Button
          // type="submit"
          stylesProp={formBtn}
        >
          Увійти
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
