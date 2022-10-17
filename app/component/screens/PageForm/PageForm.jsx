import Footer from '../../Footer';
import Header from '../../header';
import Heading from '../../layout/Heading';
import MainContent from '../../MainContent';
import AvatarBlock from '../../AvatarBlock';
import FormBlock from '../../FormBlock';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import ButtonNavigate from '../../ui/ButtonNavigate';
import { footerBtnProps } from '../../ui/footerBtnProps';
import {btnWrapp} from '../../../../styles/Footer.module.scss';
import stylesMainSection from '../../../../styles/MainContentForm.module.scss';
import stylesBtn from '../../../../styles/Button.module.scss';
import stylesInput from '../../../../styles/Input.module.scss';


const PageForm = () => {
  return (
    <div>
      <Header>
        <Heading
          fontSize="1em"
          tag="h1"
          text="Додавання слова"
          color="white"
        />
        <AvatarBlock />
      </Header>

      <MainContent stylesProp={stylesMainSection.mainWrapp}>
        <Heading
          fontSize="2em"
          color="black"
          tag="h1"
          text="Додайте слово для вивчення!"
        />
        <FormBlock>
          <Input stylesProps={stylesInput} type="text" text="EN" placeholder="введіть слово" />
          <Input stylesProps={stylesInput} type="text" text="UA" placeholder="введіть переклад" />
          <Button stylesProp={stylesBtn.button} type="button">Додати слово</Button>
        </FormBlock>
      </MainContent>

       <Footer>
        {footerBtnProps.map(({id, path, icon, tag, text }) => (
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