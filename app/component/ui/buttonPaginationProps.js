import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineDoubleRight } from 'react-icons/ai';

export const btnPaginationProps = [
  {
    icon: (
      <AiOutlineDoubleLeft
        style={{ color: '#0300ff', height: '2em', width: '2em' }}
      />
    ),
    type: 'button',
    width: '60px',
    id: '1',
    height: '60px',
    action: '-2',
  },
  {
    icon: (
      <AiOutlineArrowLeft
        style={{ color: 'green', height: '2em', width: '2em' }}
      />
    ),
    type: 'button',
    width: '60px',
    id: '2',
    height: '60px',
    action: '-1',
  },
  {
    icon: (
      <AiOutlineArrowRight
        style={{ color: '#ffc800', height: '2em', width: '2em' }}
      />
    ),
    type: 'button',
    width: '60px',
    id: '3',
    height: '60px',
    action: '+1',
  },
  {
    icon: (
      <AiOutlineDoubleRight
        style={{ color: '#00ff10', height: '2em', width: '2em' }}
      />
    ),
    type: 'button',
    width: '60px',
    id: '4',
    height: '60px',
    action: '+2',
  },
];
