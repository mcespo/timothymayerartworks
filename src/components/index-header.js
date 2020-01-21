import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import TimothyMayerArtworksLogo from "./timothy-mayer-artworks-logo"
import Img from "gatsby-image"

const IndexHeader = () => {
  const indexHeaderProp = useStaticQuery(graphql`
    query IndexHeaderImage {
      image: file(
        relativePath: {
          eq: "gallery/landscapes-thumbnails/20181023-timothy-mayer-artworks_landscape-0046.jpg"
        }
      ) {
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
        fluid={indexHeaderProp.image.childImageSharp.fluid}
        alt="Photo by Timothy Mayer"
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
