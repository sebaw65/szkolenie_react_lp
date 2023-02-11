import React, { useState } from 'react';
import MainTemplate from '../../templates/MainTemplate';

const FeaturesPage = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };
  console.log(counter);

  return (
    <MainTemplate>
      <h2 style={{ fontSize: '32px', color: '#fff' }}>
        Feature Page {counter}
      </h2>
      <button onClick={handleClick}>Zwiększa o 1</button>
    </MainTemplate>
  );
};

export default FeaturesPage;
