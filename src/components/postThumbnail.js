import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const Image = ({ src, alt, to }) => (
  <div
    style={{
      textAlign: "center",
    }}
  >
    <Link to={to}>
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: "100%",
          maxHeight: rhythm(10),
        }}
      />
    </Link>
  </div>
)

const PostThumbnail = ({ node }) => {
  const image = node.frontmatter.image
    ? node.frontmatter.image.publicURL
    : undefined
  const title = node.frontmatter.title || node.fields.slug
  return (
    <article>
      <header>
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
            {title}
          </Link>
        </h3>
        <small>{node.frontmatter.date}</small>
      </header>
      <section>
        {image && <Image src={image} alt={title} to={node.fields.slug} />}
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
