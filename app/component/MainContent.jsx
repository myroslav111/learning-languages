import React from 'react';
import styles from '../../styles/MainContent.module.scss';

const MainContent = ({ bg, children }) => {
  return (
    <main className={styles.mainWrapp} style={{ background: `${bg}` }}>
      <div>
        <div className="container">
          <div>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
