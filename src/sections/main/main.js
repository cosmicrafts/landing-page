/// pk34
/// React
import React, { useEffect, useState } from "react";

/// Libraries
import Lottie from "lottie-web";

/// Resources
import "../../css/main.css";
import shipLeft from '../../resources/animations/TerraformAnim.json'
import shipRight from '../../resources/animations/HawkIdle.json'
import ap320 from '../../resources/animations/AP320.json'
import flashLight from '../../resources/animations/Flashlights.json'
import dfinityLogo from "../../resources/main/dfinity_logo.svg";
import playBtn from "../../resources/main/play_btn.svg";

export default function Main(props){
    const [animations, setAnimations] = useState(false);

    useEffect(() => {
        if(!animations){
            setAnimations(true);
        }
    }, []);

    const play = () => {
        window.location.href = "https://beta.cosmicrafts.com";
    };

    useEffect(() => {
        if(animations){
            Lottie.loadAnimation({
                container: document.querySelector("#ship-left"),
                animationData: shipLeft
            }).setSpeed(0.5);
            Lottie.loadAnimation({
                container: document.querySelector("#planet"),
                animationData: ap320
            }).setSpeed(0.3);
            Lottie.loadAnimation({
                container: document.querySelector("#ship-right"),
                animationData: shipRight
            }).setSpeed(0.4);
            Lottie.loadAnimation({
                container: document.querySelector("#flashlights"),
                animationData: flashLight
            }).setSpeed(0.4);
        }
    }, [animations]);

    return(
        <div className="main-div" id="home">
            <div className="planet-div">
                <div id="planet" className="planet-center"></div>
            </div>
            <div className="ship-left-div">
                <div id="ship-left" className="ship-animation-left"></div>
            </div>
            <div className="ship-right-div">
                <div id="ship-right" className="ship-animation-right"></div>
            </div>
            <div className="flashlights-div">
                <div id="flashlights" className="flashlights"></div>
            </div>
            <div className="div-panel">
                <div className="title-div-panel">
                    <label className="title-panel">SUPERNOVA</label>
                </div>
                <div className="text-div-panel">
                    <label className="text-panel">Try our <span className="span-regular">Latest Release</span> on<br/>the <span className="span-bold">Internet Computer.</span></label>
                </div>
                <img src={dfinityLogo} className="img-dfinity-logo" alt="Dfinity logo" />
                <div className="version-div-panel">
                    <label className="version-panel">v.0.5.2.3</label>
                </div>
                <img src={playBtn} onClick={() => { play(); }} className="play-btn-panel" alt="PLAY" />
            </div>
        </div>
    );
}