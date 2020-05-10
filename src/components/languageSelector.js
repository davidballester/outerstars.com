import React from "react"
import { Link } from "gatsby"

const LanguageSelector = () => {
  return (
    <nav
      style={{
        textAlign: "center",
      }}
    >
      <Link to={`/`}>English</Link>
      {" | "}
      <Link to={`/es`}>Español</Link>
    </nav>
  )
}

export default LanguageSelector
