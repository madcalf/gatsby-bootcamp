import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Img from 'gatsby-image';
import { GatsbyImage } from 'gatsby-plugin-image';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "ddd MMMM do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            # __typename and contentful_id are required to resolve the references
            contentful_id
            __typename
            file {
              contentType
              url
            }
          }
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`;

// Note diffs from Andrew's video based on updated Gatsby:
// No longer use @contentful/rich-text-react-renderer.
// Use gatsby-source-contentful/rich-text
// body.json is now body.raw

const Blog = props => {
  console.log('PROPS', props);
  // specify options to render various richText elements. Right now just worry about the image which is an embedded asset
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          <GatsbyImage
            alt="some alt text"
            image={node.data.target.gatsbyImageData}
          />
        );
      },
    },
  };

  // Note: props.data is given to us via the query above
  const post = props.data.contentfulBlogPost;
  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.publishedDate}</p>
      {renderRichText(post.body, options)}
    </Layout>
  );
};

export default Blog;
