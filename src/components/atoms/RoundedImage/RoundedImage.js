import React from 'react';
import PropTypes from 'prop-types';

import styles from './RoundedImage.module.css';

const RoundedImage = ({ image, alt }) => {
  return <img className={styles.image} src={image} alt={alt} />;
};

export default RoundedImage;

RoundedImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
