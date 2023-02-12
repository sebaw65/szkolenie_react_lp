import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';

const Input = ({ type, placeholder, cssNames = [''] }) => {
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

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  cssNames: PropTypes.array,
};
