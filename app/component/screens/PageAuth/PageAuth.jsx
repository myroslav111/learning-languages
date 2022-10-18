import { AiFillEye } from 'react-icons/ai';
import AvatarBlock from '../../AvatarBlock';
import Footer from '../../Footer';
import Header from '../../header';
import Heading from '../../layout/Heading';
import MainContent from '../../MainContent';
import ButtonNavigate from '../../ui/ButtonNavigate';
import { footerBtnProps } from '../../ui/footerBtnProps';
import { btnWrapp } from '../../../../styles/Footer.module.scss';
// import { wrapp } from '../../../../styles/MainContentCard.module.scss';
import { formControl } from '../../../../styles/Input.module.scss';
import {
  iconEye,
  form,
  wrapp,
  fomBtn,
} from '../../../../styles/PageAuth.module.scss';

const PageAuth = () => {
  return (
    <div>
      <Header>
        <Heading tag="h1" text="Авторизація" color="white" />
        <AvatarBlock />
      </Header>

      <MainContent
        stylesProp={wrapp}
        bgI="url(https://preview.colorlib.com/theme/bootstrap/login-form-20/images/xbg.jpg.pagespeed.ic.tiVxeakBSd.webp)"
      >
        <Heading position="center" tag="h1" text="Форма" fontSize="30px" />
        <form className={form}>
          <div>
            <input
              type="text"
              className={formControl}
              placeholder="email"
              required=""
            />
          </div>
          <div style={{ position: 'relative' }}>
            <input
              id="passwordField"
              type="password"
              className={formControl}
              placeholder="Password"
              required=""
            />
            <span>
              <AiFillEye className={iconEye} />
            </span>
          </div>
          <div>
            <button
              // type="submit"
              className={fomBtn}
            >
              Sign In
            </button>
          </div>
        </form>
        <Heading position="center" tag="h1" text="--АБО--" />
      </MainContent>

      <Footer>
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
