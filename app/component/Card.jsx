import stylesCard from '../../styles/Card.module.scss';
import Heading from './layout/Heading';


const Card = ({ textForeign, textTranslation, children }) => {
  return (
    <>
      <div className={stylesCard.front}>{children}
        <Heading fontSize="35px"  color="white" tag="p" text={textForeign} />
      </div>

      <div className={stylesCard.back}>{children}
        <Heading fontSize="35px" color="red" tag="p" text={textTranslation} />
      </div>
    </>
  );
};


export default Card;