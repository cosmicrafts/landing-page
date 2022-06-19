import React from "react";

import "../../css/roadmap.css";

export default function Roadmap(props){
    return (
        <div className="roadmap-div">
            <div className="roadmap-title-div">
                <label className="roadmap-title">THE MA<span className="roadmap-title-thin">KING</span> OF <span className="roadmap-title-highlight">COSMICRAFTS</span></label>
            </div>
            <div className="roadmap-subtitle-div">
                <label className="roadmap-subtitle"><span className="roadmap-subtitle-highlight">The full scope of the game </span> is  to create a complete and new <span className="roadmap-subtitle-highlight">4X Cosmicrafts Metaverse</span>, the first of its kind, taking the best elements and most successful elements of other games where <span className="roadmap-subtitle-highlight"> players can easily interact</span> through its features and being able to actively particpate in its <span className="roadmap-subtitle-highlight">economy, politics and warfare.</span></label>
            </div>
            <div className="roadmap-line"></div>
            <div className="roadmap-section-one-div">
                <div className="roadmap-section-one-ships"></div>
                <div className="roadmap-section-one-number">
                    <label className="roadmap-section-number">01</label>
                    <hr className="roadmap-section-hr" />
                    <label className="roadmap-section-text">RTS</label>
                </div>
                <div className="roadmap-section-textbox">
                    <label className="roadmap-section-innertext"><span className="roadmap-subtitle-highlight">Destroy your enemies</span> in real time with an <span className="roadmap-subtitle-highlight">endless combination of NFTs</span>, select your Character and gather up your fleet on  different game modes, unleash incredible spaceships and devastating weapons <span className="roadmap-subtitle-highlight">on your way to victory.</span></label>
                </div>
            </div>
            <div className="roadmap-section-two-div">
                <div className="roadmap-section-two-ships"></div>
                <div className="roadmap-section-one-number">
                    <label className="roadmap-section-number">02</label>
                    <hr className="roadmap-section-hr" />
                    <label className="roadmap-section-text">EXP</label>
                </div>
                <div className="roadmap-section-textbox">
                    <label className="roadmap-section-innertext space-top-175"><span className="roadmap-subtitle-highlight">Explore the Dark Rift</span> in the Metaverse to find new places and land to conquer or colonize. Find new Sectors, reach Nebulas, Stars and Planets, <span className="roadmap-subtitle-highlight">there is always something new to discover.</span></label>
                </div>
            </div>
            <div className="roadmap-section-three-div">
                <div className="roadmap-section-three-ships"></div>
                <div className="roadmap-section-one-number">
                    <label className="roadmap-section-number">03</label>
                    <hr className="roadmap-section-hr" />
                    <label className="roadmap-section-text">CRT</label>
                </div>
                <div className="roadmap-section-textbox">
                    <label className="roadmap-section-innertext space-top-175"><span className="roadmap-subtitle-highlight">Create your own in-game NFTs:</span> Spaceships, Space and Mining Stations, Artifacts and all kinds of usable in-game assets with the most sophisticated game asset manager, <span className="roadmap-subtitle-highlight" > THE COSMIC CRAFTER. </span></label>
                </div>
            </div>
            <div className="roadmap-section-four-div">
                <div className="roadmap-section-four-ships"></div>
                <div className="roadmap-section-one-number">
                    <label className="roadmap-section-number">04</label>
                    <hr className="roadmap-section-hr" />
                    <label className="roadmap-section-text">DAO</label>
                </div>
                <div className="roadmap-section-textbox">
                    <label className="roadmap-section-innertext space-top-175">Cosmicrafts will be <span className="roadmap-subtitle-highlight">fully delivered</span> by the Development Team to the Community as a <span className="roadmap-subtitle-highlight">METAVERSE DAO</span>, with a unique and innovative <span className="roadmap-subtitle-highlight">Governance protocol</span> for everyone to participate in future updates in the <span className="roadmap-subtitle-highlight">Game and the Story.</span></label>
                </div>
            </div>
            <div className="roadmap-dfinity-logo"></div>
        </div>
    );
}