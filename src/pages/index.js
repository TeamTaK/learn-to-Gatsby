import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import PostLink from "../components/post-link"
import { graphql } from "gatsby"
import SEO from "../components/seo"


export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="Dev tak Diary" description="takによる徒然ダイアリー" />
      <Hero />
      {data.allContentfulPost.edges.map(edge =>
        <PostLink key={edge.node.slug} post={edge.node} />
      )}
    </Layout>
  )
}

export const query = graphql`
    query allContentfulPost  {
      allContentfulPost (sort: {fields:updatedAt, order: DESC}) {
        edges {
          node {
            title
            image {
              title
              file {
                url
              }
            }
            description {
              description
            }
            slug
            updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
            category{
              id
              name
            }
          }
        }
      }
    }
`