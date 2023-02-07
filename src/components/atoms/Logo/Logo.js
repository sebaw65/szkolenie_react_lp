import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';

import styles from './Logo.module.css';

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Company logo" className={styles.logo} />
    </Link>
  );
};

export default Logo;
