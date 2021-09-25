import React from "react"
import { Link } from "gatsby"
import Typography from "@material-ui/core/Typography";
import "../styles/post.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShareSns from "../components/shareSns"
import { makeStyles } from '@material-ui/core/styles';
import CategoryIcon from '@material-ui/icons/Category';

const useStyles = makeStyles((theme) => ({
    postTitle: {
        fontSize: 'calc(17px + 1.9vw)',
    },
    categoryBox: {
        float: 'right',
    },
    link: {
        color: 'inherit',
        alignItems: 'center',
        display: 'flex',
    },
}));


export default function Post({ pageContext }) {

    const classes = useStyles();

    const { title, updatedAt, image } = pageContext.post;
    const description = pageContext.post.description.description;
    const category = pageContext.post.category.name;
    const categorySlug = pageContext.post.category.slug;
    const body = pageContext.post.body.childMarkdownRemark.html;

    const windowUrl = (typeof window !== 'undefined' && window.location.href) ? window.location.href : '';

    return (
        <Layout>
            <SEO title={title} description={description} />
            <div className="post-header">
                <Typography className={classes.postTitle}>{title}</Typography>
                <p className={classes.categoryBox}>
                    <Link to={`/categories/${categorySlug}`} className={classes.link}>
                        <CategoryIcon/>
                        {category}
                    </Link>
                </p>
                <p>
                    {updatedAt}
                </p>
                <p>
                    <ShareSns articleUrl={windowUrl} articleTitle={title} />
                </p>
            </div>
            <img src={image.file.url} className="post-image" alt="post-cover"></img>
            <div dangerouslySetInnerHTML={{ __html: body }} className="post-body"  />
        </Layout>
    )
}