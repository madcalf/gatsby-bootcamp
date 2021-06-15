import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me </h1>
      <p>
        <a href="mailto:frodo@bagend.shr">Email</a>
      </p>
      <p>
        <a target="blank" href="https://www.linkedin.com/in/dierdredixon/">
          LinkedIn
        </a>
      </p>
    </Layout>
  );
};

export default ContactPage;
