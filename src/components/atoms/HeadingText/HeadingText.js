import React from 'react';

import styles from './HeadingText.module.css';

const HeadingText = ({ level, text }) => {
  const HeadingLevel = `h${Number(level)}`;

  return (
    <HeadingLevel className={`${styles.mainFont} ${styles.headingText} `}>
      {text}
    </HeadingLevel>
  );
};

export default HeadingText;
