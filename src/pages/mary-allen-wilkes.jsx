import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Global, css } from '@emotion/core';

import colors from '../colors';
import SEO from '../components/seo';
import useWindowWidth from '../hooks/useWindowWidth';

const BodyStyle = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: #111111;
  display: flex;
  flex-direction: ${cssProps => (cssProps.width > 600 ? 'row' : 'column')};
  justify-content: center;
`;

const LinkStyle = styled.a`
  color: ${colors.secondary};
`;

const underline = css`
  text-decoration: underline;
`;

const WMSTPage = ({ data }) => {
  const width = useWindowWidth();
  return (
    <>
      <SEO
        title="Mary Allen Wilkes"
        keywords={['women studies', 'computing', 'LINC', 'computer science']}
      />
      <Global
        styles={css`
          body {
            margin: 0px;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: ${colors.white};
            font-family: 'IBM Plex Serif', 'Georgia', Times, serif;
          }
        `}
      />
      <BodyStyle width={width}>
        <div
          css={css`
            background-color: #4a4a4a;
            margin: 0px;
            text-align: center;
            padding: 4px;
            max-width: 300px;
            overflow: hidden;
            min-width: 232px;
            height: ${width > 600 ? '100vh' : '100%'};
            display: flex;
            flex-direction: column;
            align-self: center;
            justify-content: center;
          `}
        >
          <h1
            css={css`
              margin: 0px;
              text-decoration: underline;
            `}
          >
            Mary Allen Wilkes
          </h1>
          <Img
            fixed={data.portrait.childImageSharp.fixed}
            objectFit="cover"
            alt="Mary Allen Wilkes Portrait"
            css={css`
              border-radius: 50%;
              align-self: center;
            `}
          />
        </div>
        <div
          css={css`
            background-color: #424242;
            font-size: 18px;
            display: flex;
            justify-content: center;
            align-content: stretch;
            flex-grow: 2;
            max-width: 1000px;
            margin-left: 8px;
            margin-right: 8px;
          `}
        >
          <div
            css={css`
              text-align: block;
              max-width: 600px;
              min-width: 232px;
              box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
              background-color: #6d6d6d;
              padding-left: 4px;
              padding-right: 4px;
              line-height: 1.4;
            `}
          >
            <h3 css={underline}>About Mary Allen Wilkes</h3>
            <p>
              Marry Allen Wilkes graduated from Wellesley College in 1959, where
              she studied philosophy and theology. Upon graduation, her plan was
              to go to law school. However, her mentors, peers, and family told
              her she wouldn{"'"}t get in or get a job because of the sexist
              climate in law school. Wilkes went on to go to Harvard Law School
              in 1972 and worked as a lawyer for fourty years after her
              graduation.
            </p>
            <p>
              When Wilkes graduated from Wellesley College, she attended a
              career fair at the Massachusetts Institute of Technology where she
              asked employers if they were in need of computer programmers.
              Wilkes ended up getting a position as a software developer for
              Lincoln Labs at MIT.
            </p>
            <p>
              Mary Allen Wilkes was a part of the team that invented the LINC
              (Laboratory INstrument Computer), which many cite as being the
              first Personal Computer. Wilkes{"'"} software was essential to
              advances in computing technology.
            </p>
            <LinkStyle href="https://www.nytimes.com/2019/02/13/magazine/women-coding-computer-programming.html">
              <Img
                fluid={data.preview.childImageSharp.fluid}
                objectFit="cover"
                alt="NYT Preview"
              />
              <br />
              Article in the New York Times
            </LinkStyle>{' '}
            about Mary Allen Wilkes and the history of women in coding.
            <h3 css={underline}>Women In Computing</h3>
            <p>
              The field of computer science is currently dominated by men, with
              just{' '}
              <LinkStyle href="https://www.nsf.gov/statistics/2018/nsb20181/assets/561/figures/fig02-11.png">
                18%
              </LinkStyle>{' '}
              of degrees awarded in computer science going to women since 2007.
              Science and engineering as a whole lack diversity from men and
              women, but in computer science this was not always the case.
            </p>
            <p>
              While many of the disciplines in science and engineering lack
              proper representation, computer science is one of the most
              under-represented for women. Around 37% of degrees in computer
              science were awarded to Women in 1985-1986. Much like the rest of
              science and engineering, the changes in computer science degrees
              was caused by education and access to the internet.
            </p>
            <div
              css={css`
                border: 1px solid #ffffff;
              `}
            />
            <p>Created for WMST 101 at the University of Nevada, Reno.</p>
          </div>
        </div>
      </BodyStyle>
    </>
  );
};

WMSTPage.propTypes = {
  data: PropTypes.shape({}).isRequired
};

export default WMSTPage;

export const PortraitQuery = graphql`
  query {
    portrait: file(relativePath: { eq: "Mary_Allen_Wilkes_Portrait.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 232, height: 232) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    preview: file(relativePath: { eq: "wilkes_preview.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
