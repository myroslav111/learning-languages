import React from 'react';
import Heading from './layout/Heading';
import Image from 'next/image';
import image from '../../public/favicon.ico';
import styles from '../../styles/AvatarBlock.module.scss';

const AvatarBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <Image
          src={image}
          width={35}
          height={35}
          alt="my photo"
          // placeholder="blur"
        />
      </div>
      <div>
        <Heading tag="span" text="hello user" color="white" />
      </div>
    </div>
  );
};

export default AvatarBlock;
