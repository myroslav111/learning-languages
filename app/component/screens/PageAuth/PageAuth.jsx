// import { AiFillEye } from 'react-icons/ai';
import { AiFillGoogleCircle } from 'react-icons/ai';
import AvatarBlock from '../../AvatarBlock';
import Footer from '../../Footer';
import Header from '../../header';
import Heading from '../../layout/Heading';
import MainContent from '../../MainContent';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import Button from '../../ui/Button';
import ButtonNavigate from '../../ui/ButtonNavigate';
import { footerBtnProps } from '../../ui/footerBtnProps';
import {
  btnWrapp,
  footerSection,
  footerButtonsWrapp,
  footerWrapp,
} from '../../../../styles/Footer.module.scss';
import { wrapp } from '../../../../styles/MainContentAuth.module.scss';
import { formControl } from '../../../../styles/Input.module.scss';
import {
  iconEye,
  formBtn,
  iconGoogle,
  formAuth,
  back,
  front,
  bottomBlock,
} from '../../../../styles/PageAuth.module.scss';
import Input from '../../ui/Input';
import { useState } from 'react';


const PageAuth = () => {
  const [switchForm, setSwitchForm] = useState(true);
  return (
    <div>
      <Header>
        <Heading tag="h1" text="Авторизація" color="white" />
        <AvatarBlock />
      </Header>

      <MainContent stylesProp={wrapp} minWidth="50vw">
        <Heading
          position="center"
          tag="h1"
          text={switchForm ? 'Увійти' : 'Зареєструватись'}
          fontSize="30px"
        />
        <form className={formAuth}>
          <LoginForm></LoginForm>
        </form>
        
        <form className={formAuth}>
          <RegisterForm />
        </form>
        {/* <div className={switchForm ? front : back}>
             <div>
            </div>
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
          </div> */}

        {/* <div className={switchForm ? back : front}>
            <div>
              <Input
                type="text"
                stylesInputProp={formControl}
                placeholder="name"
                required=""
              />
            </div>
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
                Зареєструватись
              </Button>
            </div>
          </div> */}
        
        <div className={bottomBlock}>
          <Heading position="center" tag="h1" text="--АБО--" />
          <div>
            <Button
              // type="submit"
              stylesProp={formBtn}
            >
              Увійти <AiFillGoogleCircle className={iconGoogle} />
            </Button>
          </div>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => setSwitchForm(() => !switchForm)}
          >
            <Heading
              position="center"
              tag="h1"
              text={switchForm ? 'Го реєструватись ->' : 'Увійти ->'}
              color="green"
            />
          </div>
        </div>
      </MainContent>

      <Footer
        footerSectionStyleProp={footerSection}
        footerWrappStyleProp={footerWrapp}
        footerButtonsWrapp={footerButtonsWrapp}
      >
        {footerBtnProps.map(({ id, path, icon, tag, text }) => (
          <div key={id} className={btnWrapp}>
            <ButtonNavigate href={path}>{icon}</ButtonNavigate>
            <Heading tag={tag} text={text} />
          </div>
        ))}
      </Footer>
    </div>
  );
};

export default PageAuth;
