import React from 'react';
import ContactForm from '../../molecules/ContactForm/ContactForm';
import Footer from '../../molecules/Footer/Footer';

const FooterSection = () => {
  return (
    <div style={{ position: 'relative' }}>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default FooterSection;
