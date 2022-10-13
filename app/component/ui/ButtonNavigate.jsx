import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../../styles/ButtonNavigate.module.scss';

const ButtonNavigate = ({ href, children }) => {
  const { pathname } = useRouter();
  return (
    <Link href={href}>
      <a className={pathname === href ? styles.active : null}>
        <button className={styles.buttonNavigate}>{children}</button>
      </a>
    </Link>
  );
};

export default ButtonNavigate;
