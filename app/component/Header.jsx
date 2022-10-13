import React from 'react';
import styles from '../../styles/Header.module.scss';

const Header = ({ children }) => {
  return (
    <header className={styles.headerWrapp}>
      {/* <!-- Navbar --> */}
      <nav>
        <div className="container">
          <div className={styles.navbar}>{children}</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;