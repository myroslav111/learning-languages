import React from 'react';
import styles from '../../styles/MainContent.module.scss';

const MainContent = ({ children }) => {
  return (
    <main className={styles.mainWrapp}>
      <div>
        <div className="container">
          <div>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
