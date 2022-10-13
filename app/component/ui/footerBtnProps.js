import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillRead } from 'react-icons/ai';
import { AiOutlineTranslation } from 'react-icons/ai';
import { AiOutlineImport } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';

export const footerBtnProps = [
  {
    icon: <AiOutlineHome style={{ color: '#0300ff' }} />,
    tag: 'span',
    text: 'Home',
    id: '1',
    path: '/',
  },
  {
    icon: <AiFillPlusCircle style={{ color: 'green' }} />,
    tag: 'span',
    text: 'Add word',
    id: '2',
    path: '/',
  },
  {
    icon: <AiFillRead style={{ color: '#ffc800' }} />,
    tag: 'span',
    text: 'Cards',
    id: '3',
    path: '/CardsPage',
  },
  {
    icon: <AiOutlineTranslation style={{ color: '#00ff10' }} />,
    tag: 'span',
    text: 'Translator',
    id: '4',
    path: '/TranslatorPage',
  },

  {
    icon: <AiOutlineImport style={{ color: 'red' }} />,
    tag: 'span',
    text: 'Exit',
    id: '5',
    path: '/',
  },
];
