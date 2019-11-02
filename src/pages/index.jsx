import React from "react"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
// import Lightbox from "../components/Lightbox"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <header className="section-content">
      <Img fluid={props.data.headerImg.childImageSharp.fluid} />
      <article>
        <h1>Timothy Mayer</h1>
        <p>
          A professional artist and photographer, Tim Mayer was born in and
          lived throughout the Midwest, including Milwaukee, Chicago, and the
          Fox Cities (including Appleton, where he currently resides).
        </p>
        <p>
          Mayer’s work reflects a unique artistic perspective gained through a
          lifetime of involvement with the media and arts – spinning disco
          records in nightclubs in the ‘70s and early ‘80s; producing radio and
          network television programs; working in visual arts for the Green Bay
          Packers; and, most recently, dedicating 15 years to founding,
          directing, and growing the non-profit Artists for the Humanities
          (A4TH) that provides expressive art therapy and mental health
          counseling to military veterans and at-risk populations in Wisconsin.
        </p>
        <p>
          Timothy Mayer Artworks is the culmination of Mayer’s life experiences,
          passion for creating paintings that began in childhood, and more than
          three decades of professional landscape and portrait photography.
        </p>
      </article>
    </header>

    <section className="section-photography">
      <Img fluid={props.data.img01.childImageSharp.fluid} />
      <Img fluid={props.data.img02.childImageSharp.fluid} />
      <Img fluid={props.data.img03.childImageSharp.fluid} />
      <Img fluid={props.data.img04.childImageSharp.fluid} />
      <Img fluid={props.data.img05.childImageSharp.fluid} />
      <Img fluid={props.data.img06.childImageSharp.fluid} />
      <Img fluid={props.data.img07.childImageSharp.fluid} />
      <Img fluid={props.data.img08.childImageSharp.fluid} />
      <Img fluid={props.data.img09.childImageSharp.fluid} />
      <Img fluid={props.data.img10.childImageSharp.fluid} />
      <Img fluid={props.data.img11.childImageSharp.fluid} />
      <Img fluid={props.data.img12.childImageSharp.fluid} />
      <Img fluid={props.data.img13.childImageSharp.fluid} />
      <Img fluid={props.data.img14.childImageSharp.fluid} />
      <Img fluid={props.data.img15.childImageSharp.fluid} />
      <Img fluid={props.data.img16.childImageSharp.fluid} />
      <Img fluid={props.data.img17.childImageSharp.fluid} />
      <Img fluid={props.data.img18.childImageSharp.fluid} />
      <Img fluid={props.data.img19.childImageSharp.fluid} />
      <Img fluid={props.data.img20.childImageSharp.fluid} />
      <Img fluid={props.data.img21.childImageSharp.fluid} />
      <Img fluid={props.data.img22.childImageSharp.fluid} />
      <Img fluid={props.data.img23.childImageSharp.fluid} />
      <Img fluid={props.data.img24.childImageSharp.fluid} />
      <Img fluid={props.data.img25.childImageSharp.fluid} />
      <Img fluid={props.data.img26.childImageSharp.fluid} />
      <Img fluid={props.data.img27.childImageSharp.fluid} />
    </section>

    <section className="section-content">
      <Img fluid={props.data.contactImg.childImageSharp.fluid} />
      <article>
        <h1>Contact</h1>
        <p>
          To hire Tim for event photography or to purchase prints, please
          contact him by email or phone.
        </p>
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
  </Layout>
)

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxHeight: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

// export const allQuery = graphql`
//   query {
//     allImageSharp {
//       edges {
//         node {
//           sizes(maxWidth: 1200) {
//             ...GatsbyImageSharpSizes
//           }
//         }
//       }
//     }
//   }
// `;

export const pageQuery = graphql`
  query {
    headerImg: file(
      relativePath: { eq: "tim-mayer-artworks_orange-field.jpg" }
    ) {
      ...fluidImage
    }
    contactImg: file(
      relativePath: { eq: "tim-mayer-artworks_green-marsh.jpg" }
    ) {
      ...fluidImage
    }
    img01: file(relativePath: { eq: "tim-mayer-artworks_barn.jpg" }) {
      ...fluidImage
    }
    img02: file(relativePath: { eq: "tim-mayer-artworks_green-field.jpg" }) {
      ...fluidImage
    }
    img03: file(relativePath: { eq: "tim-mayer-artworks_pine-cones.jpg" }) {
      ...fluidImage
    }
    img04: file(relativePath: { eq: "tim-mayer-artworks_white-field.jpg" }) {
      ...fluidImage
    }
    img05: file(
      relativePath: { eq: "tim-mayer-artworks_white-lined-trees.jpg" }
    ) {
      ...fluidImage
    }
    img06: file(
      relativePath: { eq: "tim-mayer-artworks_yellow-white-field.jpg" }
    ) {
      ...fluidImage
    }
    img07: file(relativePath: { eq: "tim-mayer-artworks_yellow-field.jpg" }) {
      ...fluidImage
    }
    img08: file(
      relativePath: { eq: "tim-mayer-artworks_white-wide-field.jpg" }
    ) {
      ...fluidImage
    }
    img09: file(relativePath: { eq: "DSC_0158 EDIT.jpg" }) {
      ...fluidImage
    }
    img10: file(
      relativePath: {
        eq: "DSC_0184 EDIT ADOBE CROP 13.5x4.8 October 20 2019.jpg"
      }
    ) {
      ...fluidImage
    }
    img11: file(
      relativePath: { eq: "DSC_0514 EDIT ADOBE CROP 20x7 October 20 2019.jpg" }
    ) {
      ...fluidImage
    }
    img12: file(
      relativePath: { eq: "DSC_1062 EDIT ADOBE CROP 20x13 October 12 2019.jpg" }
    ) {
      ...fluidImage
    }
    img13: file(
      relativePath: { eq: "DSC_2445 EDIT ADOBE CROP 10x8 August 30 2019.jpg" }
    ) {
      ...fluidImage
    }
    img14: file(
      relativePath: {
        eq: "DSC_3505 EDIT ADOBE CROP 11x17 May 20 2019 September 1 2019.jpg"
      }
    ) {
      ...fluidImage
    }
    img15: file(
      relativePath: { eq: "DSC_3764 EDIT ADOBE PICASA 28 x 7 May 13 2019.jpg" }
    ) {
      ...fluidImage
    }
    img16: file(
      relativePath: { eq: "DSC_3974 EDIT 2 ADOBE April 7 2019.jpg" }
    ) {
      ...fluidImage
    }
    img17: file(
      relativePath: {
        eq: "DSC_4069 EDIT ADOBE CROP 17x9 April 10 2019 August 30 2019.jpg"
      }
    ) {
      ...fluidImage
    }
    img18: file(
      relativePath: {
        eq: "DSC_4098 EDIT 2 ADOBE CROP 13x9 May 20 2019 August 30 2019.jpg"
      }
    ) {
      ...fluidImage
    }
    img19: file(
      relativePath: { eq: "DSC_4132 EDIT ADOBE 37 x 9 June 27 2019.jpg" }
    ) {
      ...fluidImage
    }
    img20: file(
      relativePath: { eq: "DSC_4483 EDIT 2 PICASA ADOBE May 5 2019.jpg" }
    ) {
      ...fluidImage
    }
    img21: file(
      relativePath: { eq: "DSC_4573 EDIT ADOBE CROP 11x17 July 31 2019.jpg" }
    ) {
      ...fluidImage
    }
    img22: file(relativePath: { eq: "DSC_5860 EDIT.jpg" }) {
      ...fluidImage
    }
    img23: file(relativePath: { eq: "DSC_5884 EDIT.jpg" }) {
      ...fluidImage
    }
    img24: file(
      relativePath: {
        eq: "DSC_6337 EDIT ADOBE CROP 40x26 September 9 2019.jpg"
      }
    ) {
      ...fluidImage
    }
    img25: file(relativePath: { eq: "DSC_6673 2.jpg" }) {
      ...fluidImage
    }
    img26: file(
      relativePath: { eq: "DSC_9818 EDIT ADOBE CROP 17x11 August 4 2019.jpg" }
    ) {
      ...fluidImage
    }
    img27: file(
      relativePath: {
        eq: "DSC_9907 EDIT ADOBE CROP WINDOWS 28x11 August 4 2019.jpg"
      }
    ) {
      ...fluidImage
    }
  }
`
