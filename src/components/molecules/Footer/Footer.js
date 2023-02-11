import React from 'react';

import Logo from '../../atoms/Logo/Logo';
import Paragraph from '../../atoms/Paragraph/Paragraph';

import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={`${styles.background}`} style={{ color: '#fff' }}>
      <div className={`${styles.grid}`}>
        <div>
          <Logo />
          <Paragraph text="Amet eiusmod est est aliquip nisi dolore sint elit qui ut ex ad." />
        </div>
        <div>
          <p>189413216132 </p>
          <p>example@gfyle.com</p>
        </div>
        <div>
          <p>About Us</p>
          <p>Jobs</p>
          <p>Press</p>
          <p>Blog</p>
        </div>
        <div>
          <p>Contact Us</p>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
        <div>
          <p>Icon1</p>
          <p>Icon2</p>
          <p>Icon3</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
