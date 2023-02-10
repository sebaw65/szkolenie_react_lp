import React from 'react';

import styles from './Comment.module.css';

const Comment = ({ text }) => {
  return <p className={styles.font}>{text}</p>;
};

export default Comment;
