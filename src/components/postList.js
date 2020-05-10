import React from "react"

import Bio from "./bio"
import Layout from "./layout"
import SEO from "./seo"
import PostThumbnail from "./postThumbnail"

const PostList = ({ siteTitle, posts, location, linkToRoot }) => {
  return (
    <Layout location={location} title={siteTitle} linkToRoot={linkToRoot}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => (
        <PostThumbnail key={node.fields.slug} node={node} />
      ))}
    </Layout>
  )
}

export default PostList
