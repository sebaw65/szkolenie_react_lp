import React from 'react';

import styles from './Button.module.css';
const Button = ({ text, link }) => {
  return (
    <button className={styles.button} href={link}>
      {text}
    </button>
  );
};

export default Button;
