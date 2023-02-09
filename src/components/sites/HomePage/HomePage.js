import React from 'react';
import CompanyOffert from '../../organisms/CompanyOffert/CompanyOffert';
import ProductCharacteristics from '../../organisms/ProductCharacteristics/ProductCharacteristics';
import MainTemplate from '../../templates/MainTemplate';

const HomePage = () => {
  return (
    <MainTemplate>
      <CompanyOffert />
      <ProductCharacteristics />
    </MainTemplate>
  );
};

export default HomePage;
