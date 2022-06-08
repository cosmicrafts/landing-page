/// pk34
/// React
import React, { useEffect, useState } from "react";

/// Sections
import Menu from "./menu";

/// Resources
import "../../css/header.css";
import imgLogo from "../../resources/main/logo.svg";
import dscvrIcon from "../../resources/main/dscvr.svg";
import distriktIcon from "../../resources/main/distrikt.svg";
import twitterIcon from "../../resources/main/twitter.svg";
import discordIcon from "../../resources/main/discord.svg";
import instagramIcon from "../../resources/main/instagram.svg";
import facebookIcon from "../../resources/main/facebook.svg";
import youtubeIcon from "../../resources/main/youtube.svg";

export default function Header(props){
    const [open, setOpen] = useState(false);

    useEffect(() => {}, [open]);

    const goTo = (url) => {
        window.open(url);
    };

    const load = (url) => {
        window.location.href = url;
    };

    return(
        <div className="header-div">
            <div className="header-div-logo">
                <img src={imgLogo} className="header-logo" alt="Cosmicrafts Logo" onClick={() => { load("https://cosmicrafts.com"); } } />
                <Menu open={open} setOpen={setOpen} onClick={() => { setOpen(!open); } } goTo={goTo} load={load} />
            </div>
            <div className="header-div-icon">
                <img src={dscvrIcon} className="header-icon" alt="DSCVR" onClick={() => { goTo("https://h5aet-waaaa-aaaab-qaamq-cai.raw.ic0.app/u/Cosmicrafts"); }} />
                <img src={distriktIcon} className="header-icon" alt="Distrikt" onClick={() => { goTo("https://az5sd-cqaaa-aaaae-aaarq-cai.ic0.app/u/Cosmicrafts"); }} />
                <img src={twitterIcon} className="header-icon" alt="Twitter" onClick={() => { goTo("https://twitter.com/cosmicrafts"); }} />
                <img src={discordIcon} className="header-icon" alt="Discord" onClick={() => { goTo("https://discord.gg/cosmicrafts"); }} />
                <img src={instagramIcon} className="header-icon" alt="Instagram" onClick={() => { goTo("https://www.instagram.com/cosmicraftsgame/"); }} />
                <img src={facebookIcon} className="header-icon" alt="Facebook" onClick={() => { goTo("https://www.facebook.com/Cosmicrafts"); }} />
                <img src={youtubeIcon} className="header-icon" alt="YouTube" onClick={() => { goTo("https://www.youtube.com/channel/UCyq-iQbwTSb1TnGj3pyTv-Q/featured"); }} />
            </div>
            <div className="header-div-buttons">
                <div className="btn-header-div" onClick={() => { goTo("https://airdrops.cosmicrafts.com"); } }>
                    <label className="btn-lbl-header">AIRDROPS</label>
                </div>
                <div className="btn-header-div" onClick={() => { goTo("https://wp.cosmicrafts.com"); } }>
                    <label className="btn-lbl-header">WHITEPAPER</label>
                </div>
                <div className="btn-header-div-play" onClick={() => { load("https://play.cosmicrafts.com"); } }>
                </div>
                <div className="btn-header-div" onClick={() => { load("https://play.cosmicrafts.com"); } }>
                    <label className="btn-lbl-header">LOGIN</label>
                </div>
            </div>
        </div>
    );
}