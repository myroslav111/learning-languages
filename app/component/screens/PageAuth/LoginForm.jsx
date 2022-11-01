import { AiFillEye } from 'react-icons/ai';
import { AiFillGoogleCircle } from 'react-icons/ai';
import AvatarBlock from '../../AvatarBlock';
import Footer from '../../Footer';
import Header from '../../header';
import Heading from '../../layout/Heading';
// import MainContent from '../../MainContent';
import Button from '../../ui/Button';
// import ButtonNavigate from '../../ui/ButtonNavigate';
// import { footerBtnProps } from '../../ui/footerBtnProps';
// import {
//   btnWrapp,
//   footerSection,
//   footerButtonsWrapp,
//   footerWrapp,
// } from '../../../../styles/Footer.module.scss';
// import { wrapp } from '../../../../styles/MainContentAuth.module.scss';
import { formControl } from '../../../../styles/Input.module.scss';
import {
  iconEye,
  formBtn,
  // iconGoogle,
  // formAuth,
  // back,
  // front,
  // bottomBlock,
} from '../../../../styles/PageAuth.module.scss';
import Input from '../../ui/Input';
// import { useState } from 'react';


const LoginForm = () => {
  return (
      <div>
          {/* <div className={switchForm ? front : back}> */}
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
  )
}


export default LoginForm;