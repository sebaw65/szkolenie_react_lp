import React from 'react';

import styles from './ShortOffertText.module.css';

const MainText = () => {
  return (
    <div>
      <h1 className={`${styles.mainFont} ${styles.headingText} `}>
        All your files in one secure location, accesible anywhere.
      </h1>
      <h3 className={`${styles.mainFont} ${styles.secoundText} `}>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </h3>
    </div>
  );
};

export default MainText;
