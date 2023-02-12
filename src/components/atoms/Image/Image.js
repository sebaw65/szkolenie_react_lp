import React from 'react';
import PropTypes from 'prop-types';

import styles from './Image.module.css';

const Image = ({ source, alt, cssNames }) => {
  let allStyles;

  cssNames.length === 1
    ? (allStyles = cssNames)
    : (allStyles = cssNames.map((e) => (allStyles += `${styles[e]} `)));

  return <img className={allStyles} src={source} alt={alt} />;
};

export default Image;

Image.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  cssNames: PropTypes.array,
};
