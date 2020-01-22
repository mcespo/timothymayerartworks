import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Img from "gatsby-image"

const GalleryPage = () => {
  const galleryProps = useStaticQuery(graphql`
    query galleryImages {
      images: allFile(
        filter: { relativeDirectory: { eq: "gallery/landscapes-watermarked" } }
      ) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Gallery>
        {galleryProps.images.nodes.map(image => (
          <a href={image.childImageSharp.fluid.src}>
            <Img key={image.id} fluid={image.childImageSharp.fluid} />
          </a>
        ))}
      </Gallery>
    </Layout>
  )
}

export default GalleryPage

// styles
const Gallery = styled("section")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 5rem auto;
  padding: 0 5rem;
`
