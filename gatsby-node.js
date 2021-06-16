// this is like a gatsby-node config file
// run once when building the site
const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions;
  // console.log('NODE CREATED', node);
};

module.exports.createPages = async ({ graphql, actions }) => {
  console.log('CREATE PAGES');
  const { createPage } = actions;
  // get path to our blog template
  const blogTemplate = path.resolve('./src/templates/blog.js');

  // query contentful data for the slugs to create our pages
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  // 4:01:48
  // create the pages. Note we're just passing the slug to
  // the blog template. The template will use the slug to
  // query the actual content. Considered better practice
  // than passing all blog data directly to the template.
  response.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: blogTemplate,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
