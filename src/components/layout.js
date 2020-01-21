/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Footer from "./footer"

import "./layout.css"
import Contact from "./contact"
// import Icon from "../images/timothy-mayer-artworks_logo.svg";

const Layout = ({ children }) => (
  <>
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
    </nav>
    <main>{children}</main>
    <Contact />
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
