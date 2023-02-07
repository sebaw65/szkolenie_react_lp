import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Anchor.module.css';
const Anchor = ({ text, link }) => {
  return (
    <Link to={link} className={styles.anchor}>
      {text}
    </Link>
  );
};

export default Anchor;
