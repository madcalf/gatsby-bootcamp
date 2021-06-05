import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact Me </h1>
      <p>
        <a href="mailto:frodo@bagend.shr">Email</a>
      </p>
      <p>
        <a target="blank" href="https://www.linkedin.com/in/dierdredixon/">
          LinkedIn
        </a>
      </p>
      <Footer />
    </div>
  );
};

export default ContactPage;
