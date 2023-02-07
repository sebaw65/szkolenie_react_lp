import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './components/sites/HomePage/HomePage';
import FeaturesPage from './components/sites/FeaturesPage/FeaturesPage';
import TeamPage from './components/sites/TeamPage/TeamPage';
import SigninPage from './components/sites/SigninPage/SigninPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/signin" element={<SigninPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
