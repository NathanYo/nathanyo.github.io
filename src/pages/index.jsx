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
    <p>This site is under construction!</p>
    <p>
      I am very busy working on my{' '}
      <a href="https://github.com/LectureGoggles/">Senior Project</a> so I will
      be very slow updating this site.
    </p>
  </Layout>
);

export default IndexPage;
