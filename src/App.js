import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationLinks from './components/atoms/molecules/Navigation/NavigationLinks/NavigationLinks';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationLinks />} />
          <Route path="/features" />
          <Route path="/team" />
          <Route path="/signin" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
