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
// import englishWordsTest from '../../../../englishWordsTest.json';
// import germanWordsTest from '../../../../germanWordsTest.json';
import { getCardsByCurrentLanguage } from './pageCardsFunctions';
import { useState, useEffect } from 'react';

const PageCards = ({ unauthCardsArrProp }) => {
  const [englishCards, setEnglishCards] = useState([]);
  const [germanCards, setGermanCards] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState('de');
  const [elCard, setElCard] = useState({});
  const [unauthCards, setUnauthCards] = useState(unauthCardsArrProp);
  const [isUser, setIsUser] = useState(false);
  // console.log(unauthCards[0]);

  useEffect(() => {
    if (isUser) {
      setElCard(
        getCardsByCurrentLanguage(currentLanguage, germanCards, englishCards)[
          cardIndex
        ]
      );
    }
    setElCard(unauthCards[cardIndex]);
  }, [cardIndex, currentLanguage]);

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
          <Card textForeign={elCard.word} textTranslation={elCard.translation}>
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
            {btnPaginationProps.map(
              ({ id, type, width, height, icon, action }) => (
                <Button
                  key={id}
                  type={type}
                  stylesProp={button}
                  widthbtn={width}
                  heightbtn={height}
                  action={action}
                  idxCard={setCardIndex}
                  arrCards={
                    isUser
                      ? getCardsByCurrentLanguage(
                          currentLanguage,
                          germanCards,
                          englishCards
                        )
                      : unauthCards
                  }
                  cardIndex={cardIndex}
                >
                  {icon}
                </Button>
              )
            )}
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
