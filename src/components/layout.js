/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaLinkedinIn, FaTwitter } from "react-icons/fa"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer style={{ borderTop: `1px solid black` }}>
          <h3 style={{margin: `0.5em 0 0.1em 0`}}>Connect with me on social media!</h3>
          <a
            style={{ marginTop: `1em` }}
            href="https://www.linkedin.com/in/nayocum/"
          >
            <FaLinkedinIn
              style={{
                margin: `0 0.1em 0.5em 0`,
                backgroundColor: `#0077b5`,
                color: `#fff`,
                padding: `1px`,
              }}
              size="1.5em"
            >
              Linked In
            </FaLinkedinIn>
          </a>
          <a
            style={{ marginTop: `1em` }}
            href="https://www.linkedin.com/in/nayocum/"
          >
            <FaTwitter
              style={{
                margin: `0em 0.1em 0.5em 0`,
                color: `#1da1f2`,
                padding: `1px`,
              }}
              size="1.5em"
            >
              Linked In
            </FaTwitter>
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
