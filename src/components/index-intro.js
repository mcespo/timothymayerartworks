import React from "react"
import styled from "@emotion/styled"

const IndexIntro = () => {
  return (
    <IntroArticle>
      <p>
        Timothy Mayer is a professional photographer based in Appleton,
        Wisconsin. Tim currently does event photography and sells professional
        prints of his work.
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
    margin: 0;
    font-size: 1.75em;
    line-height: 1.4;
    @media screen and (min-width: 961px) {
      font-size: 2.5em;
      line-height: 1.2;
    }
  }
`
