import React from 'react';
// import styles from '../../styles/MainContentForm.module.scss';
// className={styles.mainWrapp}
const MainContent = ({ st, bg, children }) => {
  return (
    <main className={st} style={{ background: `${bg}` }}>
      <div>
        <div className="container">
          <div>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
