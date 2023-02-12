import React from 'react';
import FeatureImage from '../../atoms/FeatureImage/FeatureImage';
import HeadingText from '../../atoms/HeadingText/HeadingText';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import PropTypes from 'prop-types';

import styles from './IconWithDescribe.module.css';

const IconWithDescribe = ({ image, alt, headingText, bodyText }) => {
  return (
    <div className={styles.wrapper}>
      <FeatureImage image={image} alt={alt} />
      <HeadingText level="3" text={headingText} cssClassName={'featureTitle'} />
      <Paragraph text={bodyText} cssClassName={''} />
    </div>
  );
};

export default IconWithDescribe;

IconWithDescribe.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  headingText: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
};
