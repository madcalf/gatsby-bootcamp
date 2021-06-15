import React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery, Link } from 'gatsby';
import * as blogStyles from './blog.module.scss';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            body {
              raw
            }
            publishedDate(formatString: "ddd MMMM do, YYYY")
          }
        }
      }
    }
  `);
  const edges = data.allContentfulBlogPost.edges;
  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {edges.map(edge => {
          return (
            <li key={edge.node.id} className={blogStyles.post}>
              <Link to={`../blog/${edge.node.slug}`}>
                <h1>{edge.node.title}</h1>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
