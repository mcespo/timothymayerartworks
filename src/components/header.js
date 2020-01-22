import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import TimothyMayerArtworksLogo from "./timothy-mayer-artworks-logo"

const Header = () => (
  <SectionHeader>
    <TimothyMayerArtworksLogo />
    <nav>
      <ul>
        <li>
          <Link to={"/"} activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/gallery"} activeClassName="active">
            Gallery
          </Link>
        </li>
        <li>
          <Link to={"/about"} activeClassName="active">
            About
          </Link>
        </li>
      </ul>
    </nav>
  </SectionHeader>
)

export default Header

// styles
const SectionHeader = styled("header")`
  width: 100vw;
  height: 7em;
  padding: 2em 5vw;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 961px) {
    height: 9em;
  }
  @media screen and (min-width: 1361px) {
    padding: 2em 0;
    margin: 0 auto;
    max-width: 1200px;
  }
  svg {
    width: 6em;
    @media screen and (min-width: 961px) {
      width: 9em;
    }
  }
  nav {
    ul {
      margin: 0;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        min-width: 70px;
        text-align: center;
        list-style: none;
        margin: 0;
        text-transform: uppercase;
        @media screen and (min-width: 961px) {
          min-width: 90px;
        }
        a {
          width: 100%;
          color: #555;
          display: inline-block;
          text-decoration: none;
          &.active {
            font-weight: 700;
            color: #000;
          }
        }
      }
    }
  }
`
