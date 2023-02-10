import React from 'react';
import Button from '../../atoms/Button/Button';
import ShortOfferDecription from '../../molecules/ShortOfferDecription/ShortOfferDecription';

import styles from './CompanyOffert.module.css';

const CompanyOffert = () => {
  return (
    <section className={styles.margin}>
      <ShortOfferDecription />
      <Button text="Get Started" link={'/'} />
    </section>
  );
};

export default CompanyOffert;
