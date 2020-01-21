import React from "react"
import { Link } from "gatsby"

const Nav = () => (
  <nav className="nav">
    <ul>
      <li>
        <Link to={"/"} activeClassName="active">
          Home
        </Link>
      </li>
      <li>
        <Link to={"/about"} activeClassName="active">
          About
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
