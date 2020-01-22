import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"

const IndexGallery = () => {
  const indexGalleryProps = useStaticQuery(graphql`
    query IndexImages {
      image01: file(
        relativePath: {
          eq: "gallery/landscapes-thumbnails/20130918-timothy-mayer-artworks_landscape-0001.jpg"
        }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      image02: file(
        relativePath: {
          eq: "gallery/landscapes-thumbnails/20151013-timothy-mayer-artworks_landscape-0004.jpg"
        }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      image03: file(
        relativePath: {
          eq: "gallery/landscapes-thumbnails/20151013-timothy-mayer-artworks_landscape-0006.jpg"
        }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      image04: file(
        relativePath: {
          eq: "gallery/landscapes-thumbnails/20170301-timothy-mayer-artworks_landscape-0014.jpg"
        }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      image05: file(
        relativePath: {
          eq: "gallery/landscapes-thumbnails/20171122-timothy-mayer-artworks_landscape-0016.jpg"
        }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      image06: file(
        relativePath: {
          eq: "gallery/landscapes-thumbnails/20180622-timothy-mayer-artworks_landscape-0035.jpg"
        }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      image07: file(
        relativePath: {
          eq: "gallery/landscapes-thumbnails/20181023-timothy-mayer-artworks_landscape-0045.jpg"
        }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      image08: file(
        relativePath: {
          eq: "gallery/landscapes-thumbnails/20190409-timothy-mayer-artworks_landscape-0070.jpg"
        }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      image09: file(
        relativePath: {
          eq: "gallery/landscapes-thumbnails/20190609-timothy-mayer-artworks_landscape-0075.jpg"
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
  console.log(indexGalleryProps)
  return (
    <IntroGallery>
      <Img fluid={indexGalleryProps.image01.childImageSharp.fluid} />
      <Img fluid={indexGalleryProps.image02.childImageSharp.fluid} />
      <Img fluid={indexGalleryProps.image03.childImageSharp.fluid} />
      <Img fluid={indexGalleryProps.image04.childImageSharp.fluid} />
      <Img fluid={indexGalleryProps.image05.childImageSharp.fluid} />
      <Img fluid={indexGalleryProps.image06.childImageSharp.fluid} />
      <Img fluid={indexGalleryProps.image07.childImageSharp.fluid} />
      <Img fluid={indexGalleryProps.image08.childImageSharp.fluid} />
      <Img fluid={indexGalleryProps.image09.childImageSharp.fluid} />
    </IntroGallery>
  )
}

export default IndexGallery

// styles
const IntroGallery = styled("section")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 5rem auto;
  padding: 0 1rem;
  @media screen and (min-width: 961px) {
    padding: 0 5rem;
  }
`
