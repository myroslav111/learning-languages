import Footer from '../../Footer';
import Header from '../../header';
import Heading from '../../layout/Heading';
import MainContent from '../../MainContent';
import ButtonNavigate from '../../ui/ButtonNavigate';
import { footerBtnProps } from '../../ui/footerBtnProps';
import styles from '../../../../styles/Footer.module.scss';
import stylesMainSection from '../../../../styles/MainContentCard.module.scss';
import stylesCard from '../../../../styles/Card.module.scss';
import AvatarBlock from '../../AvatarBlock';
import Card from '../../Card';

const PageCards = () => {
  return (
    <div>
      <Header>
        <Heading tag="h1" text="I am header" color="white" />
        <AvatarBlock />
      </Header>

      <MainContent
        st={stylesMainSection.wrapp}
        bg="radial-gradient(circle, rgba(63,94,251,0.9895308465182948) 0%, rgba(208,252,70,0.08196782130821079) 100%)"
      >
        <Heading tag="h1" text="I am cards page" />
        <div className={stylesCard.card}>
          <Card textForeign="en" textTranslation="ua" />
        </div>
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

export default PageCards;
