import React from "react"
import { css } from "glamor"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReddit, faGithub } from "@fortawesome/free-brands-svg-icons"

import * as styles from "../utils/styles"
import { rhythm } from "../utils/typography"

const socialLinkStyles = css({
  fontSize: rhythm(1),
  marginRight: rhythm(0.5),
})

const SocialLink = ({ href, children }) => (
  <a {...socialLinkStyles} href={href}>
    {children}
  </a>
)

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        borderTop: `1px solid ${styles.textColor}`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SocialLink href="https://redit.com/u/dballester">
          <FontAwesomeIcon icon={faReddit} aria-label="Link to reddit" />
        </SocialLink>
        <SocialLink href="https://github.com/davidballester/outerstars.com">
          <FontAwesomeIcon icon={faGithub} aria-label="Link to GitHub" />
        </SocialLink>
      </div>
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
