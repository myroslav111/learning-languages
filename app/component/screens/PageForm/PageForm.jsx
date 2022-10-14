import Footer from '../../Footer';
import Header from '../../header';
import Heading from '../../layout/Heading';
import MainContent from '../../MainContent';
import ButtonNavigate from '../../ui/ButtonNavigate';
import { footerBtnProps } from '../../ui/footerBtnProps';
import styles from '../../../../styles/Footer.module.scss';
// import stylesBtnSubmit from '../../../../styles/ButtonSubmit.module.scss';
import AvatarBlock from '../../AvatarBlock';
import FormBlock from '../../FormBlock';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

const PageForm = () => {
  return (
    <div>
      <Header>
        <Heading tag="h1" text="I am header" color="white" />
        <AvatarBlock />
      </Header>

      <MainContent>
        <Heading tag="h1" text="I am form page" />
        <FormBlock>
          <Input type="text" placeholder="введіть слово" />
          <Input type="text" placeholder="введіть переклад" />
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
