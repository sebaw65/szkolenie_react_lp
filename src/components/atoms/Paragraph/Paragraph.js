import React from 'react';

import styles from './Paragraph.module.css';

const Paragraph = ({ text }) => {
  return <p className={styles.text}>{text}</p>;
};

export default Paragraph;
