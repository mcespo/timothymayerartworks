import React from "react"
import styled from "@emotion/styled"

const IndexIntro = () => {
  return (
    <IntroArticle>
      <p>
        Whether capturing distinctive rural and urban landscapes or the unique
        personalities behind individuals featured in personal or professional
        photo shoots, Timothy Mayer Artworks specializes in authenticity. You
        see it in every image, and feel it in the dedicated, one-on-one service
        provided from the first conversation to achievement of your desired
        results.
      </p>
      <p>
        Whatever a business or personal space calls for, and whatever the need –
        interior decoration, commerce, corporate profiles and occasions, family
        and senior portraits – photographs from Tim Mayer Artworks makes the
        entire experience authentically yours.
      </p>
    </IntroArticle>
  )
}

export default IndexIntro

// styles
const IntroArticle = styled("article")`
  width: 100vw;
  height: auto;
  padding: 2em 5vw;
  display: grid;
  place-items: center;
  @media screen and (min-width: 1361px) {
    padding: 4em 0;
    margin: 0 auto;
    max-width: 1200px;
  }
  p {
    margin: 0 0 1em;
    font-size: 1.75em;
    line-height: 1.4;
    :last-of-type {
      margin-bottom: 0;
    }
    @media screen and (min-width: 961px) {
      font-size: 2em;
      line-height: 1.2;
    }
  }
`
