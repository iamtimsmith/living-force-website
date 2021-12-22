import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import TableOfContents from '../components/table-of-contents';
import '../style.css';

const PageTemplate = ({ data: { post, site }, pageContext }) => {
  return (
    <Layout>
      <Helmet>
        <title>
          {post.frontmatter.title} | {site.siteMetadata.title}
        </title>
      </Helmet>
      <h1>{post.frontmatter.title}</h1>
      {post.frontmatter.author && <p>By {post.frontmatter.author}</p>}
      {pageContext.fields__slug !== '/' &&
        !pageContext.fields__slug.includes('articles') &&
        !pageContext.fields__slug.includes('player-handouts') &&
        !pageContext.fields__slug.includes('gm-aids') && (
          <TableOfContents
            items={post.tableOfContents}
            curr={post.frontmatter.title}
            prev={post.frontmatter.prev_page}
            next={post.frontmatter.next_page}
          />
        )}
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    post: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        prev_page
        next_page
        release_date
        author
      }
      html
      tableOfContents(maxDepth: 3)
    }
  }
`;
