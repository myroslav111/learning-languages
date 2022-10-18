import Heading from './layout/Heading';
import { front, back } from '../../styles/Card.module.scss';


const Card = ({ textForeign, textTranslation, children }) => {
  return (
    <>
      <div className={front}>{children}
        <Heading fontSize="35px"  color="white" tag="p" text={textForeign} />
      </div>

      <div className={back}>{children}
        <Heading fontSize="35px" color="red" tag="p" text={textTranslation} />
      </div>
    </>
  );
};


export default Card;