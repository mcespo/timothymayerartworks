/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
// import Icon from "../images/timothy-mayer-artworks_logo.svg";

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <footer className="section-footer">
        {/* <Icon />; */}
        <p>&copy; {new Date().getFullYear()}, Timothy Mayer</p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
