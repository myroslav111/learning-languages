import styles from '../../styles/Card.module.scss';
import Heading from './layout/Heading';

const Card = ({ textForeign, textTranslation }) => {
  return (
    <>
      <div className={styles.front}>
        <Heading tag="p" text={textForeign} />
      </div>

      <div className={styles.back}>
        <Heading tag="p" text={textTranslation} />
      </div>
    </>
  );
};

export default Card;
