// 動的にページを作成します。

const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    //すべての記事の取得
    const result = await graphql(
        `
        {
          allcontents: allContentfulPost {
            edges {
              node {
                title
                image {
                  file {
                    url
                  }
                }
                body {
                  childMarkdownRemark {
                    html
                  }
                }
                updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
                description {
                  description
                }
                slug
                category{
                  id
                  name
                }
              }
            }
          }
          categorys: allContentfulCategory {
            edges {
              node {
                id
                name
                slug
              }
            }
          }
        }
        `
    )

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    // 全記事一覧
    const { edges } = result.data.allcontents

    edges.forEach(edge => {
        createPage({
            path: `/post/${edge.node.slug}/`,
            component: path.resolve("./src/templates/post.js"),
            context: { post: edge.node }
        })
    });


    result.data.categorys.edges.forEach(edge => {
      createPage({
        path: `/categories/${edge.node.slug}`,
        component: path.resolve("./src/templates/category.js"),
        context: {
          id: edge.node.id,
          name: edge.node.name,
          slug: edge.node.slug,
        }
      })
    });

    
}