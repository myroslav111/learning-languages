import Link from 'next/link';
import { useRouter } from 'next/router';
import stylesButtonNavigate from '../../../styles/ButtonNavigate.module.scss';


const ButtonNavigate = ({ href, type, children }) => {
  const { pathname } = useRouter();
  return (
    <Link href={href}>
      <a className={pathname === href ? stylesButtonNavigate.active : null}>
        <button className={stylesButtonNavigate.buttonNavigate}>{children}</button>
      </a>
    </Link>
  );
};


export default ButtonNavigate;