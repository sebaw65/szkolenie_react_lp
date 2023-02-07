import React from 'react';
import Anchor from '../../../atoms/Anchor/Anchor';

const NavigationLinks = () => {
  return (
    <div>
      <Anchor link={'/features'} text={'Features'} />
      <Anchor link={'/team'} text={'Team'} />
      <Anchor link={'/signin'} text={'Sign In'} />
    </div>
  );
};

export default NavigationLinks;
