import React from "react"
import { css } from "glamor"

import Header from "./header"
import Footer from "./footer"
import { rhythm } from "../utils/typography"
import * as styles from "../utils/styles"

const containerStyles = css({
  minHeight: `100vh`,
  display: `flex`,
  flexDirection: `column`,
  backgroundColor: styles.background,
  color: styles.textColor,
  fontFamily: "Lora, serif",
  ...styles.commonStyles,
})

const Layout = ({ location, title, children }) => {
  return (
    <div {...containerStyles}>
      <header>
        <Header location={location} title={title} />
      </header>
      <main
        style={{
          flexGrow: 1,
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: styles.maxMainWidth,
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
