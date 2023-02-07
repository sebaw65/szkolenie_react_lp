import React from 'react';
import Anchor from '../../../atoms/Anchor/Anchor';

const NavigationLinks = () => {
  return (
    <div>
      <Anchor link={'/'} text={'Features'} />
      <Anchor link={'/'} text={'Team'} />
      <Anchor link={'/'} text={'Sign In'} />
    </div>
  );
};

export default NavigationLinks;
