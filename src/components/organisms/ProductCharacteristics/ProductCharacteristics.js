import React from 'react';
import IconWithDescibe from '../../molecules/IconWithDescribe/IconWithDescribe';
import PcAndSmartphone from '../../../images/icon-access-anywhere.svg';
import Shield from '../../../images/icon-security.svg';
import Collaboriation from '../../../images/icon-collaboration.svg';
import StoreAnyType from '../../../images/icon-any-file.svg';

import styles from './ProductCharacteristics.module.css';

const ProductCharacteristics = () => {
  const elements = [
    {
      image: PcAndSmartphone,
      alt: 'Komputer PC i smartphone',
      headingText: 'Access your files, anywhere',
      bodyText:
        'The ability to use smartphone, tablet, or computer to access your account means your files follow you everywhere.',
    },
    {
      image: Shield,
      alt: 'Tarcza',
      headingText: 'Security you can trust',
      bodyText:
        '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
    },
    {
      image: Collaboriation,
      alt: 'Zegar i trójka ludzi',
      headingText: 'Real-time collaboration',
      bodyText:
        'Securely share files and folders with friends, family and collegues for live collaboration. No email attachments required',
    },
    {
      image: StoreAnyType,
      alt: 'Folder i pliki',
      headingText: 'Store any type of file',
      bodyText:
        "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ];

  return (
    <section className={styles.flexContainer}>
      {elements.map((el, index) => {
        return (
          <IconWithDescibe
            key={index}
            image={el.image}
            alt={el.alt}
            headingText={el.headingText}
            bodyText={el.bodyText}
          />
        );
      })}
    </section>
  );
};

export default ProductCharacteristics;
