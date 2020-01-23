import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Img from "gatsby-image"
import { object } from "prop-types"

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
          <a key={image.id} href={image.childImageSharp.fluid.src}>
            <Img
              style={{ margin: "0.5rem", maxHeight: "calc(50vh - 4rem)" }}
              imgStyle={{ objectFit: "contain" }}
              key={image.id}
              fluid={image.childImageSharp.fluid}
            />
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
  margin: 5rem auto;
  padding: 0 1rem;
  @media screen and (min-width: 961px) {
    padding: 0 5rem;
  }
`
