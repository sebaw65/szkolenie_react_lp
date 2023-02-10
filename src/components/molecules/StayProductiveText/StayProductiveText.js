import React from 'react';
import HeadingText from '../../atoms/HeadingText/HeadingText';

const StayProductiveText = () => {
  return (
    <div>
      <HeadingText level="1" text="Stay productive, wherever you are" />
      <HeadingText
        level="3"
        text="Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs."
        cssClassName="marginBottom"
      />
      <HeadingText
        level="3"
        text="Securely share files and folders with friends, family and collegues for live collaboriation. No email attachments required."
      />
    </div>
  );
};

export default StayProductiveText;
