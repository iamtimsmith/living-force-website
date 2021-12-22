const { createFilePath } = require(`gatsby-source-filesystem`);
const config = require('./content/site.json');

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage } = actions;
  // If not enabled, remove campaign guide in prod
  if (
    process.env.NODE_ENV === `production` &&
    config.enableGuide === false &&
    page.path.includes('/campaign-guide')
  ) {
    deletePage(page);
  }
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `content/pages`,
      trailingSlash: false,
    });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
