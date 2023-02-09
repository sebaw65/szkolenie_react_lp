import React from 'react';
import intoImg from '../../../images/illustration-intro.png';

import styles from './IntroImg.module.css';

const IntroImg = () => {
  return (
    <img
      className={styles.image}
      src={intoImg}
      alt="Obraz przedstawiający pracocholizm"
    />
  );
};

export default IntroImg;
