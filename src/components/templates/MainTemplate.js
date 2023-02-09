import React from 'react';
import Header from '../organisms/Header/Header/Header';

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default MainTemplate;
