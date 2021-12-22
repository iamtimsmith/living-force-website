import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const PageNotFound = () => {
  return (
    <Layout>
      <div style={{ textAlign: 'center' }}>
        <h1>404</h1>
        <p>These aren't the droids you're looking for...</p>
        <p>
          Perhaps the URL is spelled incorrectly or this page no longer exists.
          You may be able to find what you're looking for on the{' '}
          <Link to='/'>home page</Link>.
        </p>
      </div>
    </Layout>
  );
};

export default PageNotFound;
