import Footer from '../../Footer';
import Header from '../../header';
import Heading from '../../layout/Heading';
import MainContent from '../../MainContent';
import ButtonNavigate from '../../ui/ButtonNavigate';
import { footerBtnProps } from '../../ui/footerBtnProps';
import styles from '../../../../styles/Footer.module.scss';
import AvatarBlock from '../../AvatarBlock';

const PageTranslator = () => {
  return (
    <div>
      <Header>
        <Heading tag="h1" text="I am header" color="white" />
        <AvatarBlock />
      </Header>

      <MainContent>
        <Heading tag="h1" text="I am translator" />
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

export default PageTranslator;
