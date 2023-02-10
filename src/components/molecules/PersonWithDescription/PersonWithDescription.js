import React from 'react';
import HeadingText from '../../atoms/HeadingText/HeadingText';
import RoundedImage from '../../atoms/RoundedImage/RoundedImage';

import styles from './PersonWithDescription.module.css';

const PersonWithDescription = ({ image, author, position }) => {
  return (
    <div className={styles.fit}>
      <RoundedImage image={image} alt={author} />
      <HeadingText level="5" text={author} cssClassName="boldLeft" />
      <HeadingText level="5" text={position} cssClassName="left" />
    </div>
  );
};

export default PersonWithDescription;
