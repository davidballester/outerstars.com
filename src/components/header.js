import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import * as styles from "../utils/styles"
import { isRootPath } from "../utils/location"

const MainPageHeader = ({ title }) => {
  return (
    <h1
      style={{
        ...scale(1.5),
        marginBottom: rhythm(1.5),
        marginTop: rhythm(0.5),
        textAlign: "center",
        fontFamily: styles.headerFontFamily,
        fontWeight: "normal",
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
        fontFamily: styles.headerFontFamily,
        marginTop: rhythm(0.5),
        textAlign: "center",
        fontWeight: "normal",
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
  const DisplayHeader = isRootPath(location)
    ? MainPageHeader
    : SecondaryPageHeader
  return (
    <header>
      <DisplayHeader title={title} />
    </header>
  )
}

export default Header
