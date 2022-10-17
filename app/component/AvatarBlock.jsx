import Heading from './layout/Heading';
import Image from 'next/image';
import image from '../../public/favicon.ico';
import stylesAvatarBlock from '../../styles/AvatarBlock.module.scss';


const AvatarBlock = () => {
  return (
    <div className={stylesAvatarBlock.wrapper}>
      <div className={stylesAvatarBlock.img}>
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