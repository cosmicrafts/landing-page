import React from "react";

import "../../css/fundrising.css";
import deck_pdf from "../../assets/pdf/CosmicraftsPD2022.pdf";

export default function Fundrising(props){
    const goTo = (url) => {
        window.open(url);
    };
    return (
        <div className="fundrising-div">
            <div className="fundrising-background">
                <div className="fundrising-left-ship"></div>
                <div className="fundrising-mid-div">
                    <div className="fundrising-stats-imgs"></div>
                    <label className="fundrising-title">COSMICRAFTS IS ACTIVELY<br /><span className="fundrising-title-big">FUNDRAISING</span></label>
                    <label className="fundrising-text">We are always looking for new <span className="fundrising-text-bold">VCs and Private Investors</span> to support the development through out its entire scope, we welcome our most enthusiastic members with premium and first-hand access to our <span className="fundrising-text-bold">Tokens and NFTs.</span></label>
                    {/*<div className="fundrising-btn-deck" onClick={() => { goTo(deck_pdf); }}></div>
                    <div className="fundrising-btn-whitepaper" onClick={() => { goTo("https://wp.cosmicrafts.com"); }}></div>*/}
                    <div className="div-buttons">
                        <a href={deck_pdf} className="parallel-btn parallel-yellow-btn" rel="noreferrer noopener" target="_blank"><span>DECK</span></a>  
                        <a href="https://wp.cosmicrafts.com" className="parallel-btn parallel-blue-btn" rel="noreferrer noopener" target="_blank"><span>WHITEPAPER</span></a>
                    </div>
                </div>
                <div className="fundrising-right-ship"></div>
            </div>
        </div>
    );
}