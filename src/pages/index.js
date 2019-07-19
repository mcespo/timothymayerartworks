import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header className="section-content">
      <Image />
      <article>
        <h1>Timothy Mayer</h1>
        <p>
          A professional artist and photographer, Tim Mayer was born in and lived throughout the Midwest, including Milwaukee, Chicago, and the Fox Cities (including Appleton, where he currently resides).
        </p>
        <p>
          Mayer’s work reflects a unique artistic perspective gained through a lifetime of involvement with the media and arts – spinning disco records in nightclubs in the ‘70s and early ‘80s; producing radio and network television programs; working in visual arts for the Green Bay Packers; and, most recently, dedicating 15 years to founding, directing, and growing the non-profit Artists for the Humanities (A4TH) that provides expressive art therapy and mental health counseling to military veterans and at-risk populations in Wisconsin.
        </p>
        <p>
          Timothy Mayer Artworks is the culmination of Mayer’s life experiences, passion for creating paintings that began in childhood, and more than three decades of professional landscape and portrait photography.
        </p>
      </article>
    </header>
    <section className="section-photography">
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
    </section>
    <section className="section-content">
      <Image />
      <article>
        <h1>Timothy Mayer</h1>
        <p>text</p>
      </article>
    </section>
  </Layout>
)

export default IndexPage
