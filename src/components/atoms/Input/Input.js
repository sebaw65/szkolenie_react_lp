import React from 'react';

import styles from './Input.module.css';

const Form = ({ type, placeholder, cssNames = [''] }) => {
  let allStyles;

  cssNames.length === 1
    ? (allStyles = cssNames)
    : (allStyles = cssNames.map((e) => (allStyles += `${styles[e]} `)));

  return (
    <input
      className={`${styles.input} ${allStyles}`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Form;
