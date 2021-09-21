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
        margin: '100px 0px 0px 0px',
        textAlign: 'center',
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
            <Typography variant="h4" className={classes.title}>
                ABOUT
            </Typography>
            <div className="about-body">
                <div className="about-content">
                    <Typography variant="h5">
                        このサイトはなに？
                    </Typography>
                    <Typography variant="body2">
                        日々の開発での気づきや忘備録を中心に（多分）<br />
                        記事を書き溜めていきます。<br />
                        また、管理人の趣味とか日常についても書いたりする・・・かも
                    </Typography>
                </div>
                <div className="about-content">
                    <Typography variant="h5">
                        管理人はナニモノ？
                    </Typography>
                    <Typography variant="body2">
                        普段ERPのエンジニアとして働いている人。<br />
                        まだまだ若手であるため、毎日が修行。<br />
                    </Typography>
                </div>
                <div className="about-content">
                    <Typography variant="h5">
                        趣味は？
                    </Typography>
                    <Typography variant="body2">
                        音楽と車とゲームが好き。<br />
                        音楽はギターとドラムを練習中・・・<br />
                        車はラリーが好きですね。
                    </Typography>
                </div>
            </div>
        </Layout>
    );
}
