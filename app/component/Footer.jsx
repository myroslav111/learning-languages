import styles from '../../styles/Footer.module.scss';

const Footer = ({ children }) => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerWrapp}>
        <div className="container">
          <div className={styles.footer}>{children}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
