import React from "react"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
// import Lightbox from "../components/Lightbox"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <header className="section-content">
      <Img fluid={props.data.headerImg.childImageSharp.fluid} />
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
      <Img fluid={props.data.img01.childImageSharp.fluid} />
      <Img fluid={props.data.img02.childImageSharp.fluid} />
      <Img fluid={props.data.img03.childImageSharp.fluid} />
      <Img fluid={props.data.img04.childImageSharp.fluid} />
      <Img fluid={props.data.img05.childImageSharp.fluid} />
      <Img fluid={props.data.img06.childImageSharp.fluid} />
      <Img fluid={props.data.img07.childImageSharp.fluid} />
      <Img fluid={props.data.img08.childImageSharp.fluid} />
    </section>

    <section className="section-content">
      <Img fluid={props.data.contactImg.childImageSharp.fluid} />
      <article>
        <h1>Contact</h1>
        <p>To hire Tim for event photography or to purchase prints, please contact him by email or phone.</p>
        <p>Email: <a href="mailto:timothymayerartworks@gmail.com">timothymayerartworks@gmail.com</a></p>
        <p>Phone: 920-915-5595</p>

        <p>Mail: Timothy Mayer Artworks<br />
           P.O. Box 882<br />
           Appleton, Wi 54912-0882</p>
      </article>
    </section>
  </Layout>
)

export default IndexPage

export const fluidImage = graphql `
fragment fluidImage on File {
  childImageSharp {
    fluid(maxHeight: 400) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

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

export const pageQuery = graphql `
  query {
    headerImg: file(relativePath: { eq: "tim-mayer-artworks_orange-field.jpg" }) {
      ...fluidImage
    }
    contactImg: file(relativePath: { eq: "tim-mayer-artworks_green-marsh.jpg" }) {
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
    img05: file(relativePath: { eq: "tim-mayer-artworks_white-lined-trees.jpg" }) {
      ...fluidImage
    }
    img06: file(relativePath: { eq: "tim-mayer-artworks_yellow-white-field.jpg" }) {
      ...fluidImage
    }
    img07: file(relativePath: { eq: "tim-mayer-artworks_yellow-field.jpg" }) {
      ...fluidImage
    }
    img08: file(relativePath: { eq: "tim-mayer-artworks_white-wide-field.jpg" }) {
      ...fluidImage
    }
  }
`;
