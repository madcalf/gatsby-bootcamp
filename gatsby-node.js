// this is like a gatsby-node config file?
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
