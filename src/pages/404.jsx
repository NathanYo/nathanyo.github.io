import React from 'react';
import { FaMeh } from 'react-icons/fa';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <FaMeh size="200px" />
    <p>You just hit a route that doesn&#39;t exist...</p>
  </Layout>
);

export default NotFoundPage;
