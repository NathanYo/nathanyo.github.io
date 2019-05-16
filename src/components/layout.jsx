import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import Header from './header';
import useWindowWidth from '../hooks/useWindowWidth';
import colors from '../colors';

const LayoutGrid = styled.div`
  display: grid;
  justify-content: center;
  line-height: 1.4;
  color: ${colors.black};
  background-color: ${colors.lightGrey};
  min-height: 100vh;
  font-size: 18px;
`;

const ContentGrid = styled.main`
  background-color: ${colors.white};
  color: ${colors.black};
  padding: 8px;
  max-width: 1000px;
  min-width: 280px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 16px;
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
            font-family: 'Georgia', serif;
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
                <ContentGrid>{children}</ContentGrid>
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
