import React from 'react';
import IntroImg from '../../atoms/IntroImg/IntroImg';
import CompanyOffert from '../../organisms/Header/CompanyOffert/CompanyOffert';
import MainTemplate from '../../templates/MainTemplate';

const HomePage = () => {
  return (
    <MainTemplate>
      <IntroImg />
      <CompanyOffert />
    </MainTemplate>
  );
};

export default HomePage;
