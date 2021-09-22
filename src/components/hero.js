import React from "react"
import Typography from "@material-ui/core/Typography";
import "../styles/hero.css"
import ICON_IMG from "../../static/hero_icon.jpg"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    heroTitle: {
        fontSize: 'calc(24px + 1.5vw)',
        lineHeight: '1.2',
    },
    heroAuthorText: {
        margin: '0 0 0 10px',
    },
}));

export default function Hero() {
    const classes = useStyles();

    return (
        <div className="hero">
            <Typography className={classes.heroTitle}>
                Welcom to 'Dev tak Diary'<br />
            </Typography>
            <div className="hero-author">
                <img src={ICON_IMG} className="hero-author-image" alt="avatar"></img>
                <Typography variant="body2" className={classes.heroAuthorText}>
                    Written by tak.<br />
                    普段はERPのエンジニアとして働いています。
                </Typography>
            </div>
        </div>
    )
}