import React from "react"
import {FaQuestion} from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p style={{textAlign: 'center'}}>
      <FaQuestion size="4rem" />
    </p>
    <p>Error: 404</p>
  </Layout>
)

export default NotFoundPage
