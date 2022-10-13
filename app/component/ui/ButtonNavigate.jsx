import React from 'react';
import styles from '../../../styles/ButtonNavigate.module.scss';

const ButtonNavigate = ({ children }) => {
  return (
    <button className={styles.buttonNavigate} type="button">
      {children}
    </button>
  );
};

export default ButtonNavigate;
