import React from 'react';

import styles from './Image.module.css';

const Image = ({ source, alt, cssNames }) => {
  let allStyles;

  cssNames.length === 1
    ? (allStyles = cssNames)
    : (allStyles = cssNames.map((e) => (allStyles += `${styles[e]} `)));

  return <img className={allStyles} src={source} alt={alt} />;
};

export default Image;
