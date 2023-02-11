import React from 'react';

import Button from '../../atoms/Button/Button';
import HeadingText from '../../atoms/HeadingText/HeadingText';
import Input from '../../atoms/Input/Input';

import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <section className={styles.wrapper}>
      <div>
        <HeadingText level="1" text="Get early access today" />
        <HeadingText
          level="3"
          text="It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you"
        />
        <div className={styles.flex}>
          <Input type="emial" placeholder="email@example.com" />
          <Button
            text="Get Started For Free"
            link="/"
            display="inline"
            margin="30px 0 0 0"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
