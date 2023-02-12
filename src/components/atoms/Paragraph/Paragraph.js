import React from 'react';
import PropTypes from 'prop-types';

import styles from './Paragraph.module.css';

const Paragraph = ({ text }) => {
  return <p className={styles.text}>{text}</p>;
};

export default Paragraph;

Paragraph.propTypes = {
  text: PropTypes.string,
};
