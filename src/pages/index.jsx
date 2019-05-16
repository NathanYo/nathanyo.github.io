import React from 'react';
import { FaGrin } from 'react-icons/fa';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        'gatsby',
        'react',
        'nathanyocum',
        'golang',
        'javascript',
        'testing'
      ]}
    />
    <h1>Hello World!</h1>
    <FaGrin size="200px" />
    <p>My name is Nathan Yocum.</p>
    <p>This site is under construction!</p>
  </Layout>
);

export default IndexPage;
