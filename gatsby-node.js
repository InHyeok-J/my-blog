const path = require('path')

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {}

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        template: path.resolve(__dirname, 'src/template'),
      },
    },
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const allPost = await graphql(
    `
      {
        allMdx(
          sort: {
            order: DESC
            fields: [frontmatter___date, frontmatter___title]
          }
        ) {
          edges {
            node {
              frontmatter {
                title
              }
              slug
            }
          }
        }
      }
    `,
  )

  if (allPost.errors) {
    reporter.panicOnBuild(`Error while running query`)
    return
  }

  const PostTemplateComponent = path.resolve(
    __dirname,
    'src/template/PostTemplate.tsx',
  )

  const posts = allPost.data.allMdx.edges
  posts.forEach((NODE, index) => {
    actions.createPage({
      path: `post/` + NODE.node.slug,
      component: PostTemplateComponent,
      context: {
        slug: NODE.node.slug,
        prev: index === posts.length - 1 ? null : posts[index + 1].node,
        next: index === 0 ? null : posts[index - 1].node,
      },
    })
  })
}
