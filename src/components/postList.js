import React from "react"
import { Link } from "gatsby"

import Bio from "./bio"
import Layout from "./layout"
import SEO from "./seo"
import { rhythm } from "../utils/typography"

const PostList = ({ siteTitle, posts, location, linkToRoot }) => {
  return (
    <Layout location={location} title={siteTitle} linkToRoot={linkToRoot}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
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
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default PostList
