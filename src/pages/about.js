import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout>
      <h1>A little about me</h1>
      <p>
        As an employee and a freelancer, I have taken many projects from
        requirements docs - or sometimes just verbal descriptions - to completed
        products. I've been fortunate to participate in most phases of creation:
        developing the concepts, shaping the interaction and UI, and choosing
        the best tools to achieve a client's objectives. I take great pride in
        my history of creating solid functional, thoroughly tested applications
        and providing support and maintenance throughout their deployments.
      </p>
      <p>
        My first "real" job, in the newly formed Media group within the American
        Museum of Natural History's Exhibition Department, presented fabulous
        opportunities to imagine and then build innovative exhibits that
        communicated complex scientific concepts to visitors of all ages. This
        was an incredible environment to experiment with cutting edge
        technologies along side budget DIY solutions. Each exhibit presented new
        possibilities and challenges, and I came to see my job as continuously
        learning how to learn. New tech, new languages, new software, new
        platforms. I continue to apply this perspective to my work and personal
        life.
      </p>
      <p>
        Want to work with me? <Link to="/contact">Reach out</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
