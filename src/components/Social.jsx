import React from "react";

/*Logo*/
import dscvrIcon from "../assets/images/social/dscvr.svg";
import distriktIcon from "../assets/images/social/distrikt.svg";
import twitterIcon from "../assets/images/social/twitter.svg";
import discordIcon from "../assets/images/social/discord.svg";
import instagramIcon from "../assets/images/social/instagram.svg";
import facebookIcon from "../assets/images/social/facebook.svg";
import youtubeIcon from "../assets/images/social/youtube.svg";

function Social() {
    return (
        <div className="social-media">
            <div className="sm-items">
                <a className="" rel="noreferrer" href="https://h5aet-waaaa-aaaab-qaamq-cai.raw.ic0.app/u/Cosmicrafts" target="_blank"> <img className="" alt="" src={dscvrIcon} /> </a>
                <a className="" rel="noreferrer" href="https://az5sd-cqaaa-aaaae-aaarq-cai.ic0.app/u/Cosmicrafts" target="_blank"> <img className="" alt="" src={distriktIcon} /> </a>
                <a className="" rel="noreferrer" href="https://twitter.com/cosmicrafts" target="_blank"> <img className="" alt="" src={twitterIcon} /> </a>
                <a className="" rel="noreferrer" href="https://discord.com/invite/cosmicrafts" target="_blank"> <img className="" alt="" src={discordIcon} /> </a>
                <a className="" rel="noreferrer" href="https://www.instagram.com/cosmicraftsgame/" target="_blank"> <img className="" alt="" src={instagramIcon} /> </a>
                <a className="" rel="noreferrer" href="https://www.facebook.com/Cosmicrafts" target="_blank"> <img className="" alt="" src={facebookIcon} /> </a>
                <a className="" rel="noreferrer" href="https://www.youtube.com/channel/UCyq-iQbwTSb1TnGj3pyTv-Q/featured" target="_blank"> <img className="" alt="" src={youtubeIcon} /> </a>
            </div>
        </div>
    );
}

export default Social;
