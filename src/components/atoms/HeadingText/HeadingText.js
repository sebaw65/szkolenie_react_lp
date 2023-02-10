import React from 'react';

import styles from './HeadingText.module.css';

const HeadingText = ({ level, text, cssClassName }) => {
  const HeadingLevel = `h${Number(level)}`;
  return (
    <HeadingLevel
      className={`${styles.mainFont} ${styles.headingText} ${styles[cssClassName]}`}
    >
      {text}
    </HeadingLevel>
  );
};

export default HeadingText;
