import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"

const AboutPage = () => {
  const aboutProp = useStaticQuery(graphql`
    query AboutImage {
      image: file(relativePath: { eq: "site/timothy-mayer.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <section className="section-content">
        <aside>
          <Img
            fluid={aboutProp.image.childImageSharp.fluid}
            alt="Photo by Timothy Mayer"
          />
          <p>Photo by Alex Simpson</p>
        </aside>
        <article>
          <h1>Timothy Mayer</h1>
          <p>
            A professional artist and photographer, Tim Mayer, was born in and
            has lived throughout the Midwest, including Milwaukee, Chicago, and
            the Fox Cities (including Appleton, where he currently resides).
          </p>
          <p>
            Mayer’s work reflects a unique artistic perspective gained through a
            lifetime of involvement with the media and arts – spinning disco
            records in nightclubs in the ‘70s and early ‘80s; producing radio
            and network television programs; working in visual arts for the
            Green Bay Packers and, composing and taking photographs for more
            than three decades. Tim has dedicated the last 15 years to the
            founding, directing, and growing{" "}
            <a href="https://www.a4th.org/">Artists for the Humanities</a>, a
            non-profit 501(c)(3) organization that provides expressive art
            therapy and mental health counseling to military veterans and
            at-risk populations in Wisconsin.
          </p>
          <p>
            Timothy Mayer Artworks is more than the culmination of Mayer’s life
            experiences. It is representative of his well-developed talent,
            critical eye, and passion for capturing landscapes in photographs
            and paintings, as well as his accomplished portfolio of portraiture
            and commercial photography.
          </p>
        </article>
      </section>
    </Layout>
  )
}

export default AboutPage
