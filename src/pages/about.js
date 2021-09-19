import React from "react"
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SEO from "../components/seo"
import Layout from "../components/layout"
import "../styles/about.css"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
    }
}));

export default function Header() {
    const classes = useStyles();

    return(
        <Layout>
            <SEO title="About" description="このサイトについて" />
            <div className="about">
                <Typography variant="h4" className={classes.title}>
                    ABOUT　いろいろ説明します。
                </Typography>
            </div>
        </Layout>
    );
}
