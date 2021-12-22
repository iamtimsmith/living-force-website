import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Toggle from './toggle';

export default () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header className='site-nav'>
      <Link to='/' className='site-logo'>
        {site.siteMetadata.title}
      </Link>
      <Toggle />
    </header>
  );
};
