import React from 'react';
import styles from '../../styles/Footer.module.scss';

const Footer = ({ children }) => {
  return (
    <footer>
      <div className={styles.footerBacground}>
        <div className="container">
          <div className={styles.footer}>{children}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
