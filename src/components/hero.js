import React from "react"
import Typography from "@material-ui/core/Typography";
import "../styles/hero.css"
import ICON_IMG from "../../static/hero_icon.jpg"

export default function Hero() {
    return (
        <div className="hero">
            <Typography variant="h3" className="hero-text">
                Welcome to my blog!<br />
                Enjoy lots of posts.<br />
            </Typography>
            <div className="hero-author">
                <img src={ICON_IMG} className="hero-author-image" alt="avatar"></img>
                <Typography variant="body2" className="hero-author-text">
                    Written by XXXX.<br />
                    Front Engineer at Hoge.Inc. Love JavaScript.
                </Typography>
            </div>
        </div>
    )
}