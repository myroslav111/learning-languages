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
import { select } from '../../../../styles/SelectCurentLeng.module.scss';
import dataForSelect from '../../ui/contentSelect';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PageForm = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (!from || !to) return toast.warn('🦄 Ви повинні додати слово.');
    // setIsSuccess(true);

    const newCard = {
      word: from,
      translation: to,
    };

    console.log(newCard);

    /** if our user unregistered */
    // if (!email) {
    //   fooWriteToDb({ from, to });
    // }

    /** if current page is england and user is registered*/

    /** if current page is deuchland and user is registered*/

    //    toast.success('🚀 Ми додали слово до ваших карток!');
    setFrom('');
    setTo('');
    // setIsSuccess(false);
  };

  return (
    <div>
      <Header>
        <Heading fontSize="1em" tag="h1" text="Додавання слова" color="white" />
        <SelectLanguage
          styleSelectProp={select}
          languages={dataForSelect.contentSelectHeaer}
        />
        <AvatarBlock />
      </Header>

      <MainContent stylesProp={wrapp}>
        <Heading
          fontSize="2em"
          color="black"
          tag="h1"
          text="Додайте слово для вивчення!"
        />
        <FormBlock onSubmit={handleSubmit}>
          <Input
            // onChangeEvent={recValueInput}
            stateFoo={setFrom}
            stylesInputProp={input}
            stylesLabelProp={label}
            type="text"
            text="EN"
            placeholder="введіть слово"
            value={from}
          />
          <Input
            // onChangeEvent={recValueInput}
            stateFoo={setTo}
            stylesInputProp={input}
            stylesLabelProp={label}
            type="text"
            text="UA"
            placeholder="введіть переклад"
            value={to}
          />
          <Button stylesProp={button} type="submit">
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
      <ToastContainer />
    </div>
  );
};

export default PageForm;
