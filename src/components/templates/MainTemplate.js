import React from 'react';
import FooterSection from '../organisms/FooterSection/FooterSection';
import Header from '../organisms/Header/Header';

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <FooterSection />
    </div>
  );
};

export default MainTemplate;
