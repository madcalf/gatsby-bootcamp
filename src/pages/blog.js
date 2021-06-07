import React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery } from 'gatsby';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `);
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will go here later</p>
      <ol>
        {posts.map(post => {
          return (
            <li key={post.node.id}>
              <h1>{post.node.frontmatter.title}</h1>
              <p>{post.node.frontmatter.date}</p>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
