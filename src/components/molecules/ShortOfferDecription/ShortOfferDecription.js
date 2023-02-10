import React from 'react';
import ImageIntro from '../../atoms/IntroImg/IntroImg';
import HeadingText from '../../atoms/HeadingText/HeadingText';

import styles from './ShortOfferDecription.module.css';

const ShortDecription = () => {
  return (
    <div className={styles.wrapper}>
      <ImageIntro />
      <HeadingText
        level="1"
        text="All your files in one secure location, accesible anywhere."
      />
      <HeadingText
        level="3"
        text="Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers."
        clas
      />
    </div>
  );
};

export default ShortDecription;
