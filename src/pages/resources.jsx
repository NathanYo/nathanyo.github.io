import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Resources = () => (
  <Layout>
    <SEO title="Resources" keywords={['react', 'nathanyocum']} />
    <h1>Resources</h1>
    <ul>
      <li key="kent-c-dodds-testing">
        <a href="https://kentcdodds.com/blog/write-tests">
          Kent C Dodds{"' "}post: Write tests. Not too many. Mostly integration.
        </a>
        This blog post explains a lot of the testing philosophies web developers
        should follow.
      </li>
      <li key="regex">
        <a href="https://regex101.com/">Regex101</a> a useful Regex tool.
      </li>
    </ul>
  </Layout>
);

export default Resources;
