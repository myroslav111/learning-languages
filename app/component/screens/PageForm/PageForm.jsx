import Footer from '../../Footer';
import Header from '../../header';
import Heading from '../../layout/Heading';
import MainContent from '../../MainContent';
import AvatarBlock from '../../AvatarBlock';
import FormBlock from '../../FormBlock';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import SelectLanguage from '../../ui/SelectLanguage';
import ButtonNavigate from '../../ui/ButtonNavigate';
import { footerBtnProps } from '../../ui/footerBtnProps';
import {
  btnWrapp,
  footerSection,
  footerButtonsWrapp,
  footerWrapp,
} from '../../../../styles/Footer.module.scss';
import { wrapp } from '../../../../styles/MainContentForm.module.scss';
import { button } from '../../../../styles/Button.module.scss';
import { label, input } from '../../../../styles/Input.module.scss';

const PageForm = () => {
  return (
    <div>
      <Header>
        <Heading fontSize="1em" tag="h1" text="Додавання слова" color="white" />
        <SelectLanguage />
        <AvatarBlock />
      </Header>

      <MainContent stylesProp={wrapp}>
        <Heading
          fontSize="2em"
          color="black"
          tag="h1"
          text="Додайте слово для вивчення!"
        />
        <FormBlock>
          <Input
            stylesInputProp={input}
            stylesLabelProp={label}
            type="text"
            text="EN"
            placeholder="введіть слово"
          />
          <Input
            stylesInputProp={input}
            stylesLabelProp={label}
            type="text"
            text="UA"
            placeholder="введіть переклад"
          />
          <Button stylesProp={button} type="button">
            Додати слово
          </Button>
        </FormBlock>
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

export default PageForm;
