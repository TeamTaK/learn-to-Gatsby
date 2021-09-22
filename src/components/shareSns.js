import React from "react"
import { TwitterShareButton, TwitterIcon } from "react-share"

export default function ShareSns({ articleUrl, articleTitle}) {
    return (
        <div className={'ShareSns'} >
            <TwitterShareButton title={articleTitle} via={"43zu_taQ3"} url={articleUrl}>
                <TwitterIcon size={32} round={false} />
            </TwitterShareButton>
        </div>
    );
};

