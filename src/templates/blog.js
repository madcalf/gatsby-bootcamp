import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "ddd MMMM do, YYYY")
      body {
        raw
      }
    }
  }
`;

// Note diffs from Andrew's video based on updated Gatsby:
// No longer use @contentful/rich-text-react-renderer
// use gatsby-source-contentful/rich-text
// body.json is now body.raw

const Blog = props => {
  // Note: props.data is given to us via the query above
  const post = props.data.contentfulBlogPost;
  console.log('post: ', post.body.raw);
  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.publishedDate}</p>
      {renderRichText(post.body)}
    </Layout>
  );
};

export default Blog;
