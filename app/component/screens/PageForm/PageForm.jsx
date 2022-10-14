import Footer from '../../Footer';
import Header from '../../header';
import Heading from '../../layout/Heading';
import MainContent from '../../MainContent';
import ButtonNavigate from '../../ui/ButtonNavigate';
import { footerBtnProps } from '../../ui/footerBtnProps';
import styles from '../../../../styles/Footer.module.scss';
import AvatarBlock from '../../AvatarBlock';
import FormBlock from '../../FormBlock';
import Input from '../../ui/Input';
import Button from '../../ui/Button';


const PageForm = () => {
  return (
    <div>
      <Header>
        <Heading fontSize="1em" tag="h1" text="Сторінка додавання слова" color="white" />
        <AvatarBlock />
      </Header>

      <MainContent>
        <Heading fontSize="2em" color="black" tag="h1" text="Додайте слово для вивчення!" />
        <FormBlock>
          <Input type="text" text="EN" placeholder="введіть слово" />
          <Input type="text" text="UA" placeholder="введіть переклад" />
          <Button type="button">Додати слово</Button>
        </FormBlock>
      </MainContent>

      <Footer>
        {footerBtnProps.map(btn => (
          <div key={btn.id} className={styles.btnWrapp}>
            <ButtonNavigate href={btn.path}>{btn.icon}</ButtonNavigate>
            <Heading tag={btn.tag} text={btn.text} />
          </div>
        ))}
      </Footer>
    </div>
  );
};

export default PageForm;
