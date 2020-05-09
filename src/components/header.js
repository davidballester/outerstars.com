import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const MainPageHeader = ({ title }) => {
  return (
    <h1
      style={{
        ...scale(1.5),
        marginBottom: rhythm(1.5),
        marginTop: 0,
        textAlign: "center",
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </h1>
  )
}

const SecondaryPageHeader = ({ title }) => {
  return (
    <h3
      style={{
        fontFamily: `sans-serif`,
        marginTop: 0,
        textAlign: "center",
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </h3>
  )
}

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const DisplayHeader =
    location.pathname === rootPath ? MainPageHeader : SecondaryPageHeader
  return (
    <header>
      <DisplayHeader title={title} />
    </header>
  )
}

export default Header
