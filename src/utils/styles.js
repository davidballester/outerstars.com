import { rhythm } from "./typography"

export const background = "#333"
export const textColor = "white"
export const headerFontFamily = "Prompt, sans-serif"
export const maxMainWidth = rhythm(24)

const rawCommonStyles = {
  a: {
    textDecoration: "none",
  },
  "a, a:visited": {
    color: "#ffc107",
  },
  "a:hover, a:active": {
    textDecoration: "underline",
  },
}

export const commonStyles = Object.keys(rawCommonStyles).reduce(
  (styles, rule) => ({
    ...styles,
    [`& ${rule}`]: rawCommonStyles[rule],
  }),
  {}
)
