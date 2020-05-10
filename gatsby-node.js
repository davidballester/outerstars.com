const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                language
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  const languages = new Set(posts.map(post => post.node.frontmatter.language))
  const postsPerLanguage = [...languages].map(language =>
    posts.filter(post => post.node.frontmatter.language === language)
  )
  postsPerLanguage.forEach(postsInSameLanguage => {
    postsInSameLanguage.forEach((post, index) => {
      const previous =
        index === postsInSameLanguage.length - 1
          ? null
          : postsInSameLanguage[index + 1].node
      const next = index === 0 ? null : postsInSameLanguage[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
