import React from "react"
import { Link } from "gatsby"
import Typography from "@material-ui/core/Typography";
import CategoryIcon from '@material-ui/icons/Category';
import "../styles/post-link.css"

export default function PostLink({ post }) {

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
                    <p className='anchor-date'>{description}</p>
                    <div className="info-flame">
                        <span className="anchor-date">{updatedAt}</span>
                        <span className="anchor-category">
                            <CategoryIcon/>
                            {category}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}