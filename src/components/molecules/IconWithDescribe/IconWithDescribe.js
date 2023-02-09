import React from 'react';
import FeatureImage from '../../atoms/FeatureImage/FeatureImage';
import HeadingText from '../../atoms/HeadingText/HeadingText';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const IconWithDescribe = ({ image, alt, headingText, bodyText }) => {
  return (
    <div>
      <FeatureImage image={image} alt={alt} />
      <HeadingText level="3" text={headingText} />
      <Paragraph text={bodyText} />
    </div>
  );
};

export default IconWithDescribe;
