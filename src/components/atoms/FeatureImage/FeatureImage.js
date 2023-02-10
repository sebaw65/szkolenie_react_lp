import React from 'react';

import styles from './FeatureImage.module.css';

const FeatureImage = ({ image, alt, additionalClassName = '' }) => {
  return (
    <img
      className={`${styles.image} ${styles[additionalClassName]}`}
      src={image}
      alt={alt}
    />
  );
};

export default FeatureImage;
