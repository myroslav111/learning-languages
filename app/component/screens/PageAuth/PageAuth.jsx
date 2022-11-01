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
import {
  formBtn,
  iconGoogle,
  formAuth,
  bottomBlock,
} from '../../../../styles/PageAuth.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';

const PageAuth = () => {
  // const [switchForm, setSwitchForm] = useState(true);
  const [registered, setRegistered] = useState(false);
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
          text={registered ? 'Увійти' : 'Зареєструватись'}
          fontSize="30px"
        />
        {registered ? (
          <motion.div
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <form className={formAuth}>
              <LoginForm />
            </form>
          </motion.div>
        ) : (
          <form className={formAuth}>
            <RegisterForm />
          </form>
        )}

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
            onClick={() => setRegistered(() => !registered)}
          >
            <Heading
              position="center"
              tag="h1"
              text={registered ? 'Го реєструватись ->' : 'Увійти ->'}
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
