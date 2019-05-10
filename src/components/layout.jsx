import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import Header from './header';
import useWindowWidth from '../hooks/useWindowWidth';

const LayoutGrid = styled.div`
  display: grid;
  justify-content: center;
  line-height: 1.4;
  color: #222222;
  font-size: 18px;
`;

const Layout = ({ children }) => {
  const width = useWindowWidth();

  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}
      />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => {
          if (width === 0) {
            return <></>;
          }
          return (
            <>
              <Header siteTitle={data.site.siteMetadata.title} />
              <LayoutGrid>
                <main>{children}</main>
              </LayoutGrid>
            </>
          );
        }}
      />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
