import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import * as styles from "../utils/styles"
import { isRootPath } from "../utils/location"
import LanguageSelector from "./languageSelector"

const MainPageHeader = ({ title }) => {
  return (
    <>
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
        {title}
      </h1>
      <LanguageSelector />
    </>
  )
}

const SecondaryPageHeader = ({ title, to }) => {
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
        to={to}
      >
        {title}
      </Link>
    </h3>
  )
}

const Header = ({ location, title, linkToRoot }) => {
  const DisplayHeader = isRootPath(location)
    ? MainPageHeader
    : SecondaryPageHeader
  return (
    <header>
      <DisplayHeader title={title} to={linkToRoot} />
    </header>
  )
}

export default Header
