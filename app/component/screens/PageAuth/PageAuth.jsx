import { AiFillEye } from 'react-icons/ai';
import { AiFillGoogleCircle } from 'react-icons/ai';
import AvatarBlock from '../../AvatarBlock';
import Footer from '../../Footer';
import Header from '../../header';
import Heading from '../../layout/Heading';
import MainContent from '../../MainContent';
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
  form,
  formBtn,
  iconGoogle,
} from '../../../../styles/PageAuth.module.scss';
import Input from '../../ui/Input';

const PageAuth = () => {
  return (
    <div>
      <Header>
        <Heading tag="h1" text="Авторизація" color="white" />
        <AvatarBlock />
      </Header>

      <MainContent stylesProp={wrapp} minWidth="50vw">
        <Heading position="center" tag="h1" text="Увійти" fontSize="30px" />
        <form className={form}>
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
              {/* AiFillGoogleCircle */}
              Увійти
            </Button>
          </div>
        </form>

        <Heading position="center" tag="h1" text="--АБО--" />

        <div>
          <Button
            // type="submit"
            stylesProp={formBtn}
          >
            Увійти <AiFillGoogleCircle className={iconGoogle} />
          </Button>
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
