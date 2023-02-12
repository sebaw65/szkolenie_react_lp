import React from 'react';
import PropTypes from 'prop-types';

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

FeatureImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  additionalClassName: PropTypes.string,
};
