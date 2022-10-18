import { AiOutlineSwap } from 'react-icons/ai';
import Footer from '../../Footer';
import Header from '../../header';
import Heading from '../../layout/Heading';
import MainContent from '../../MainContent';
import AvatarBlock from '../../AvatarBlock';
import Button from '../../ui/Button';
import Textarea from '../../ui/Textarea';
import ButtonNavigate from '../../ui/ButtonNavigate';
import { footerBtnProps } from '../../ui/footerBtnProps';
import {
  btnWrapp,
  footerSection,
  footerButtonsWrapp,
  footerWrapp,
} from '../../../../styles/Footer.module.scss';
import {
  button,
  iconSwitchLangTranslator,
} from '../../../../styles/Button.module.scss';
import {
  wrapper,
  selects,
  btnWrapper,
} from '../../../../styles/Translator.module.scss';
import { wrapp } from '../../../../styles/MainContentTranslator.module.scss';
import {
  wrapperTextarea,
  textareaStyle,
  icon,
} from '../../../../styles/Textarea.module.scss';

const PageTranslator = () => {
  return (
    <div>
      <Header>
        <Heading tag="h1" text="Перекладач" color="white" />
        <AvatarBlock />
      </Header>

      <MainContent stylesProp={wrapp}>
        <div className={wrapper}>
          <div>
            {['введіть текст', 'тут буде переклад'].map(text => (
              <Textarea
                key={Math.floor(Math.random() * 100)}
                styleWrapperProp={wrapperTextarea}
                styleTextareaProp={textareaStyle}
                styleIconProp={icon}
                placeholder={text}
              ></Textarea>
            ))}
          </div>

          <div className={selects}>
            <select name="select">
              <option value="en" defaultValue>
                EN
              </option>
              <option value="de">DE</option>
              <option value="ua">UA</option>
            </select>

            <Button stylesProp={button}>
              <AiOutlineSwap className={iconSwitchLangTranslator} />
            </Button>

            <select name="select">
              <option value="en">EN</option>
              <option value="de">DE</option>
              <option value="ua" defaultValue>
                UA
              </option>
            </select>
          </div>

          <div className={btnWrapper}>
            <Button type="button" widthbtn="95px" stylesProp={button}>
              скинути
            </Button>
            <Button type="button" widthbtn="95px" stylesProp={button}>
              перекласти
            </Button>
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

export default PageTranslator;
