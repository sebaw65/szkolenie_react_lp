import React from 'react';

import styles from './Button.module.css';

const Button = ({ text, link, display = 'block', margin = '0 auto' }) => {
  return (
    <button
      sty
      style={{ display: `${display}`, margin: `${margin}` }}
      className={styles.button}
      href={link}
    >
      {text}
    </button>
  );
};

export default Button;
