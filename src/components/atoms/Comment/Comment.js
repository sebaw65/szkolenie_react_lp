import React from 'react';
import PropTypes from 'prop-types';

import styles from './Comment.module.css';

const Comment = ({ text }) => {
  return <p className={styles.font}>{text}</p>;
};

export default Comment;

Comment.propTypes = {
  text: PropTypes.string.isRequired,
};
