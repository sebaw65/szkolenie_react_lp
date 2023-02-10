import React from 'react';

import styles from './FeatureImage.module.css';

const FeatureImage = ({ image, alt }) => {
  return <img className={styles.image} src={image} alt={alt} />;
};

export default FeatureImage;
