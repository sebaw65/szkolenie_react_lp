import React from 'react';
import HeadingText from '../../atoms/HeadingText/HeadingText';
import Anchor from '../../atoms/Anchor/Anchor';

import styles from './StayProductiveText.module.css';

const StayProductiveText = () => {
  return (
    <div className={styles.sizer}>
      <HeadingText
        level="1"
        text="Stay productive, wherever you are"
        cssClassName="titleWrap"
      />
      <HeadingText
        level="3"
        text="Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs."
        cssClassName={'descWrap'}
      />
      <HeadingText
        level="3"
        text="Securely share files and folders with friends, family and collegues for live collaboriation. No email attachments required."
        cssClassName={'descWrap'}
      />
      <Anchor link="/" text="See how Fylo works" css="left" />
    </div>
  );
};

export default StayProductiveText;
