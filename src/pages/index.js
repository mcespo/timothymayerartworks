import React from "react"

import Layout from "../components/layout"
import IndexHeader from "../components/index-header"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexHeader />
  </Layout>
)

export default IndexPage
