import { AiOutlineNotification } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlineSwap } from 'react-icons/ai';
import Footer from '../../Footer';
import Header from '../../header';
import Heading from '../../layout/Heading';
import MainContent from '../../MainContent';
import AvatarBlock from '../../AvatarBlock';
import Card from '../../Card';
import Button from '../../ui/Button';
import SelectLanguage from '../../ui/SelectLanguage';
import ButtonNavigate from '../../ui/ButtonNavigate';
import { footerBtnProps } from '../../ui/footerBtnProps';
import { btnPaginationProps } from '../../ui/buttonPaginationProps';
import {
  btnWrapp,
  footerSection,
  footerButtonsWrapp,
  footerWrapp,
} from '../../../../styles/Footer.module.scss';
import { wrapp } from '../../../../styles/MainContentCard.module.scss';
import { card } from '../../../../styles/Card.module.scss';
import {
  wrapper,
  containerBtnWordPagination,
} from '../../../../styles/ContainerBtnWordPagination.module.scss';
import {
  soundBtn,
  deleteBtn,
  removeBtn,
  switchLangBtn,
  button,
} from '../../../../styles/Button.module.scss';
import { select } from '../../../../styles/SelectCurentLeng.module.scss';
import dataForSelect from '../../ui/contentSelect';
import englishWordsTest from '../../../../englishWordsTest.json';
import germanWordsTest from '../../../../germanWordsTest.json';
import { getCardsByCurrentLanguage } from './pageCardsFunctions';
import { useState } from 'react';


const PageCards = () => {
  const [englishCards, setEnglishCards] = useState(englishWordsTest);
  const [germanCards, setGermanCards] = useState(germanWordsTest);
  const [cardIndex, setCardIndex] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState('en');
 
  
  return (
    <div>
      <Header>
        <Heading tag="h1" text="Ваші картки" color="white" />
        <SelectLanguage
          styleSelectProp={select}
          languages={dataForSelect.contentSelectHeaer}
        />
        <AvatarBlock />
      </Header>

      <MainContent stylesProp={wrapp}>
        <Heading tag="h1" text="Картка" />
        <div className={card}>
          <Card textForeign={getCardsByCurrentLanguage(currentLanguage, germanCards, englishCards)[cardIndex].word} textTranslation={getCardsByCurrentLanguage(currentLanguage, germanCards, englishCards)[cardIndex].translation}>
            <Button stylesProp={soundBtn}>
              <AiOutlineNotification />
            </Button>
            <Button stylesProp={deleteBtn}>
              <AiOutlineDelete />
            </Button>
            <Button stylesProp={removeBtn}>
              <AiOutlineMinusCircle />
            </Button>
            <Button stylesProp={switchLangBtn}>
              <AiOutlineSwap />
            </Button>
          </Card>
        </div>

        <div className={wrapper}>
          <div className={containerBtnWordPagination}>
            {btnPaginationProps.map(({ id, type, width, height, icon }) => (
              <Button
                key={id}
                type={type}
                stylesProp={button}
                widthbtn={width}
                heightbtn={height}
              >
                {icon}
              </Button>
            ))}
          </div>
          <span>card number</span>
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

export default PageCards;
