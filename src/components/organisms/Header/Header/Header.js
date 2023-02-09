import React from 'react';
import Logo from '../../../atoms/Logo/Logo';
import NavigationLinks from '../../../molecules/Navigation/NavigationLinks/NavigationLinks';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Logo />
      <NavigationLinks />
    </header>
  );
};

export default Header;
