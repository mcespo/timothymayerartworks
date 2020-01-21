/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"

import "./layout.css"
import Contact from "./contact"
import Nav from "./nav"
// import Icon from "../images/timothy-mayer-artworks_logo.svg";

const Layout = ({ children }) => (
  <>
    <Nav />
    <main>{children}</main>
    <Contact />
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
