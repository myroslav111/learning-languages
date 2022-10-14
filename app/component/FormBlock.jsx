import React from 'react';
import styles from '../../styles/FormBlock.module.scss';

const FormBlock = ({ children }) => {
  return <form className={styles.form}>{children}</form>;
};

export default FormBlock;
