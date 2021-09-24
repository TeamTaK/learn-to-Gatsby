import React from "react"
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import "../styles/category.css"
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  postTitle: {
      fontSize: 'calc(17px + 1.9vw)',
  },
}));

export default function Category({ data, pageContext }) {
  const classes = useStyles();

  const title = pageContext.name;

  return (
    <Layout>
      <SEO title={title} description={`カテゴリー：${title}の記事一覧`} />
      <div className="category">
        <Typography className={classes.postTitle}>{'Category'}</Typography>
        <Typography className={classes.postTitle}>{title}</Typography>
        {data.allContentfulCategory.edges.map(edge =>
          edge.node.post.map(post => 
            <PostLink key={post.slug} post={post} />
          )
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
query CategoryPost($id: String!) {
  allContentfulCategory(filter: {id: {eq: $id}}, sort: {fields:updatedAt, order: DESC}) {
    edges {
      node {
        id
        name
        slug
        post {
          title
          image {
            file {
              url
            }
          }
          updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
          description {
            description
          }
          slug
        }
      }
    }
  }
}
`