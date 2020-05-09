import React from "react"

import Header from "./header"
import { rhythm } from "../utils/typography"
import * as styles from "../utils/styles"

const Layout = ({ location, title, children }) => {
  return (
    <div
      style={{
        minHeight: `100vh`,
        display: `flex`,
        flexDirection: `column`,
        backgroundColor: styles.background,
        color: styles.textColor,
      }}
    >
      <header>
        <Header location={location} title={title} />
      </header>
      <main
        style={{
          flexGrow: 1,
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {children}
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
