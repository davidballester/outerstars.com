import React from "react"
import { Link } from "gatsby"
import { css } from "glamor"

import { rhythm } from "../utils/typography"

const Image = ({ src, to }) => {
  const imageStyle = css({
    width: "100%",
    height: rhythm(8),
    position: "relative",
    "&::before": {
      content: " ",
      backgroundImage: `url(${src})`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      position: "absolute",
      filter: "grayscale(100%)",
    },
  })
  return (
    <div
      style={{
        textAlign: "center",
      }}
      aria-hidden="true"
    >
      <Link to={to}>
        <div {...imageStyle}>
          <span>&nbsp;</span>
        </div>
      </Link>
    </div>
  )
}

const PostThumbnail = ({ node }) => {
  const image = node.frontmatter.image
    ? node.frontmatter.image.publicURL
    : undefined
  const title = node.frontmatter.title || node.fields.slug
  return (
    <article>
      <header
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        <h3
          style={{
            marginBottom: 0,
          }}
        >
          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
            {title}
          </Link>
        </h3>
        <small>{node.frontmatter.date}</small>
        {image && <Image src={image} to={node.fields.slug} />}
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </section>
    </article>
  )
}

export default PostThumbnail
