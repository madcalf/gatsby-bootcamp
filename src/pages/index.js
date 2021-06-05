import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/header';

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello.</h1>
      <h2>I'm a fullstack dev living in Mountain View, California</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
      <Footer />
    </div>
  );
};

export default IndexPage;
