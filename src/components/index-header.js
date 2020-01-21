import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import TimothyMayerArtworksLogo from "./timothy-mayer-artworks-logo"
import Img from "gatsby-image"

const IndexHeader = () => {
  const data = useStaticQuery(graphql`
    query IndexHeaderImage {
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
    <header className="section-content">
      <Img
        fluid={data.image.childImageSharp.fluid}
        alt="Black and white portrait photo of Timothy Mayer -Photo by Alex Simpson"
      />
      <article>
        <TimothyMayerArtworksLogo />
        <p>
          Timothy Mayer is a professional photographer based in Appleton,
          Wisconsin. Tim currently does event photography and sells professional
          prints of his work.
        </p>
      </article>
    </header>
  )
}

export default IndexHeader
