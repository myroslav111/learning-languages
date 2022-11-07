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
import { card, cardReverse } from '../../../../styles/Card.module.scss';
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
// import { getCardsByCurrentLanguage } from './pageCardsFunctions';
import {
  getCardsByCurrentLanguage,
  removeCardFromCurrentSession,
} from './pageCardsFunctions';
import { useState, useEffect } from 'react';
import apiForUnregisteredUsers from '../../../service/anauthAPI';


const PageCards = ({ cardsArrProp }) => {
  const [englishCards, setEnglishCards] = useState([]);
  const [germanCards, setGermanCards] = useState([]);
  const [cardIndex, setCardIndex] = useState(0); // индекс текущей карточки
  const [currentLanguage, setCurrentLanguage] = useState('en'); // текущий язык
  const [currentCard, setCurrentCard] = useState({}); // текущая карточка
  const [unauthCards, setUnauthCards] = useState(cardsArrProp); // массив слов неавторизированного пользователя
  const [isUser, setIsUser] = useState(false); // авторизирован ли пользователь
  const [isWordSide, setIsWordSide] = useState(true);


  // отображает перевод слова
  const reverseCard = () => {
    console.log('reverseCard');
  };


  // удаляет слово безвлсвратно из БД
  const delWordFromDataBase = async () => {
    await apiForUnregisteredUsers.deleteCard(currentCard._id);
    delWordFromCurrentSession();
  };


  //удаляет слово из текущей сессии для неавторизированных пользователей
  const delWordFromCurrentSession = () => {
    const result = unauthCards.filter(card => card._id !== currentCard._id);
    setUnauthCards(result);
  };

  
  // озвучивает слово карточки
  const vocalizeWord = () => {
  const synth = window.speechSynthesis;
  // останавливает все, что уже синтезируется
  synth.cancel();
  // функция чтения текста
  const utterance = new SpeechSynthesisUtterance(currentCard.word);
  // вызывается функция подбора языка озвучки
  if (currentLanguage === 'en') {
    utterance.lang = 'en-US';
  } else {
    utterance.lang = 'de';
    }
  // озвучивает слово
  synth.speak(utterance);
  };


  useEffect(() => {
    if (isUser) {
      setCurrentCard(
        getCardsByCurrentLanguage(currentLanguage, germanCards, englishCards)[
          cardIndex
        ]
      );
    }
    setCurrentCard(unauthCards[cardIndex]);
  }, [cardIndex, currentLanguage, unauthCards]);


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
        <div
          className={isWordSide ? card : cardReverse}
          onClick={() => setIsWordSide(prevState => !prevState)}
        >
          <Card
            textForeign={currentCard.word}
            textTranslation={currentCard.translation}
          >
            <Button
              stylesProp={soundBtn}
              onOutlineNotificationClick={vocalizeWord}
              isEventOutlineNotification={true}
            >
              <AiOutlineNotification />
            </Button>

            <Button
              stylesProp={deleteBtn}
              onOutlineDeleteClick={delWordFromDataBase}
              isEventOutlineDelete={true}
            >
              <AiOutlineDelete />
            </Button>

            <Button
              stylesProp={removeBtn}
              onMinusCircleClick={delWordFromCurrentSession}
              isEventMinusCircle={true}
              currentCard={currentCard}
              arrCards={unauthCards}
            >
              <AiOutlineMinusCircle />
            </Button>

            <Button
              stylesProp={switchLangBtn}
              onOutlineSwapClick={reverseCard}
              isEventOutlineSwap={true}
            >
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
                  isEventPagination={true}
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
          <span style={{ fontSize: 30 }}>CurrentCardIndex: {cardIndex}</span>
          <span style={{ fontSize: 30 }}>AllCards: {unauthCards.length}</span>
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
