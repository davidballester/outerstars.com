import React from "react"

import * as styles from "../utils/styles"
import { rhythm } from "../utils/typography"

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          maxWidth: styles.maxMainWidth,
          margin: "auto",
          padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </footer>
  )
}

export default Footer
