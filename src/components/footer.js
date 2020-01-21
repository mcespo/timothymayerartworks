import React from "react"
import TimothyMayerArtworksLogo from "./timothy-mayer-artworks-logo"

const Footer = () => (
  <footer className="section-footer">
    <TimothyMayerArtworksLogo />
    <p>&copy; {new Date().getFullYear()}, Timothy Mayer</p>
  </footer>
)

export default Footer
