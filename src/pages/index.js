import React from "react"

import Layout from "../components/layout"
import IndexIntro from "../components/index-intro"
import SEO from "../components/seo"
import IndexGallery from "../components/index-gallery"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexIntro />
    <IndexGallery />
  </Layout>
)

export default IndexPage
