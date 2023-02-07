import React from 'react';
import Anchor from '../../../atoms/Anchor/Anchor';

import styles from './NavigationLinks.module.css';

const NavigationLinks = () => {
  return (
    <div className={styles.wrapper}>
      <Anchor link={'/features'} text={'Features'} />
      <Anchor link={'/team'} text={'Team'} />
      <Anchor link={'/signin'} text={'Sign In'} />
    </div>
  );
};

export default NavigationLinks;
