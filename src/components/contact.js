import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"

const Contact = () => {
  const contactProp = useStaticQuery(graphql`
    query ContactImage {
      image: file(
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
  return (
    <section className="section-content">
      <Img
        fluid={contactProp.image.childImageSharp.fluid}
        alt="Photo by Timothy Mayer"
      />
      <article>
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:timothymayerartworks@gmail.com">
            timothymayerartworks@gmail.com
          </a>
        </p>
        <p>Phone: 920-915-5595</p>

        <p>
          Mail: Timothy Mayer Artworks
          <br />
          P.O. Box 882
          <br />
          Appleton, Wi 54912-0882
        </p>
      </article>
    </section>
  )
}

export default Contact
