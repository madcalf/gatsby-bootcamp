import React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery, Link } from 'gatsby';
import * as blogStyles from './blog.module.scss';

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
      <ol className={blogStyles.posts}>
        {posts.map(post => {
          return (
            <li key={post.node.id} className={blogStyles.post}>
              <Link to={`../blog/${post.node.fields.slug}`}>
                <h1>{post.node.frontmatter.title}</h1>
                <p>{post.node.frontmatter.date}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
