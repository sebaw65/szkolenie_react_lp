import React from 'react';
import Footer from '../organisms/Footer/Footer';
import Header from '../organisms/Header/Header';

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainTemplate;
