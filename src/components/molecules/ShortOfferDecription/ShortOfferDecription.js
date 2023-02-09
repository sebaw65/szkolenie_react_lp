import React from 'react';
import ImageIntro from '../../atoms/IntroImg/IntroImg';
import ShortOffertText from '../../atoms/ShortOffertText/ShortOffertText';

import styles from './ShortOfferDecription.module.css';

const ShortDecription = () => {
  return (
    <div className={styles.wrapper}>
      <ImageIntro />
      <ShortOffertText />
    </div>
  );
};

export default ShortDecription;
