import React from "react"
import Typography from "@material-ui/core/Typography";
import "../styles/post.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    postTitle: {
        fontSize: 'calc(15px + 2.5vw)',
    },
}));


export default function Post({ pageContext }) {

    const classes = useStyles();

    const { title, updatedAt, image } = pageContext.post;
    const description = pageContext.post.description.description;
    const body = pageContext.post.body.childMarkdownRemark.html;

    return (
        <Layout>
            <SEO title={title} description={description} />
            <div className="post-header">
                <Typography className={classes.postTitle}>{title}</Typography>
                <p>{updatedAt}</p>
            </div>
            <img src={image.file.url} className="post-image" alt="post-cover"></img>
            <div dangerouslySetInnerHTML={{ __html: body }} className="post-body"  />
        </Layout>
    )
}