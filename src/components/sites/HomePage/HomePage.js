import React from 'react';
import CompanyOffert from '../../organisms/CompanyOffert/CompanyOffert';
import ProductCharacteristics from '../../organisms/ProductCharacteristics/ProductCharacteristics';
import StayProductiveSection from '../../organisms/StayProductiveSection/StayProductiveSection';
import MainTemplate from '../../templates/MainTemplate';

const HomePage = () => {
  return (
    <MainTemplate>
      <CompanyOffert />
      <ProductCharacteristics />
      <StayProductiveSection />
    </MainTemplate>
  );
};

export default HomePage;
