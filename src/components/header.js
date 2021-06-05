import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <>
      <h1>Portfolio</h1>
      <nav></nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
