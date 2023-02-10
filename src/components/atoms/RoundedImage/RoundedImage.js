import React from 'react';

import styles from './RoundedImage.module.css';

const RoundedImage = ({ image, name }) => {
  return <img className={styles.image} src={image} alt={name} />;
};

export default RoundedImage;
