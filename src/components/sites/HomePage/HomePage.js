import React from 'react';
import CommentsSection from '../../organisms/CommentsSection/CommentsSection';
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
      <CommentsSection />
    </MainTemplate>
  );
};

export default HomePage;
