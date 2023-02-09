import React from 'react';
import Button from '../../atoms/Button/Button';
import ShortOfferDecription from '../../molecules/ShortOfferDecription/ShortOfferDecription';

const CompanyOffert = () => {
  return (
    <div>
      <ShortOfferDecription />
      <Button text="Get Started" link={'/'} />
    </div>
  );
};

export default CompanyOffert;
