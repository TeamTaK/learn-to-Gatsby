import React from "react"
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import CategoryIcon from '@material-ui/icons/Category';
import "../styles/post-link.css"

const useStyles = makeStyles((theme) => ({
    categoryBox: {
        display: 'flex',
        alignItems: 'center',
    }
}));

export default function PostLink({ post }) {
    const classes = useStyles();

    const { title, updatedAt, image } = post;
    const description = post.description.description;
    const category = post.category.name;
    const pageLink = `/post/${post.slug}/`

    return (
        <Link to={pageLink} className="post-link-anchor">
        <div className="post-link">
            <div>
                <img src={image.file.url} className="post-link-image" alt="post-cover"></img>
                </div>
                <div className="post-link-text">
                    <Typography variant="h5">{title}</Typography>
                    <p className='post-link-anchor'>{description}</p>
                    <p className={classes.categoryBox}>
                        <CategoryIcon/>
                        {category}
                    </p>
                    <p>{updatedAt}</p>
                </div>
            </div>
        </Link>
    )
}