import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Anchor.module.css';
const Anchor = ({ text, link, css = '' }) => {
  return (
    <Link to={link} className={`${styles.anchor} ${styles[css]} `}>
      {text}
    </Link>
  );
};

export default Anchor;

Anchor.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  css: PropTypes.string,
};
