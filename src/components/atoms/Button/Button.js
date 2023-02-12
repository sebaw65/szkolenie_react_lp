import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ text, link, display = 'block', margin = '0 auto' }) => {
  return (
    <button
      style={{ display: `${display}`, margin: `${margin}` }}
      className={styles.button}
      href={link}
    >
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  display: PropTypes.string,
  margin: PropTypes.string,
};
