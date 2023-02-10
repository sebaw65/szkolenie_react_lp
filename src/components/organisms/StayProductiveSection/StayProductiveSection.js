import React from 'react';
import FeatureImage from '../../atoms/FeatureImage/FeatureImage';
import StayProductiveText from '../../molecules/StayProductiveText/StayProductiveText';
import stayProductive from '../../../images/illustration-stay-productive.png';

import styles from './StayProductiveSection.module.css';

const StayProductiveSection = () => {
  return (
    <div className={styles.wrapper}>
      <FeatureImage
        image={stayProductive}
        alt="Stay productive"
        additionalClassName="stayProductive"
      />
      <StayProductiveText />
    </div>
  );
};

export default StayProductiveSection;
