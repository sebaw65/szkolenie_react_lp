import React from 'react';
import PropTypes from 'prop-types';

import styles from './HeadingText.module.css';

const HeadingText = ({ level, text, cssClassName = '' }) => {
  const HeadingLevel = `h${Number(level)}`;
  return (
    <HeadingLevel
      className={`${styles.mainFont} ${styles.headingText} ${
        cssClassName !== '' ? styles[cssClassName] : ''
      }`}
    >
      {text}
    </HeadingLevel>
  );
};

export default HeadingText;

HeadingText.propTypes = {
  level: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  cssClassName: PropTypes.string,
};
