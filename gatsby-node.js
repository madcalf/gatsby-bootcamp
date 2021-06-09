// this is like a gatsby-node config file
// run once when building the site
const path = require('path');

// Called whenever a new graphQL node is created We want to
// add a 'slug' field to the MarkdownRemark nodes (our blog
// posts) using the node's' base filename.
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');

    // add a slug field onto the node
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  console.log('CREATE PAGES');
  const { createPage } = actions;
  // get path to our blog template
  const blogTemplate = path.resolve('./src/templates/blog.js');

  // get markdown data (array of edges with just slug data)
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // create new pages. Note we're just passing the slug to
  // the blog template. The template will use the slug to
  // query the actual content
  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.fields.slug}`,
      component: blogTemplate,
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });
};
