import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      rawMarkdownBody
      html
    }
  }
`;

const Blog = props => {
  // console.log('blog.data: ', data);
  const data = props.data.markdownRemark;
  return (
    <Layout>
      <h1>{data.frontmatter.title}</h1>
      <p>{data.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </Layout>
  );
};

export default Blog;
