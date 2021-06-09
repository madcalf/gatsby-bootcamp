import React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery, Link } from 'gatsby';

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
            fields {
              slug
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
              <Link to={`../blog/${post.node.fields.slug}`}>
                <h1>{post.node.frontmatter.title}</h1>
              </Link>
              <p>{post.node.frontmatter.date}</p>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
