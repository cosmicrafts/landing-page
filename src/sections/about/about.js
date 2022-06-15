/// pk34
/// React
import React, { useEffect, useState } from "react";

/// Libraries
import Lottie from "lottie-web";

/// Resources
import "../../css/about.css";
import shipLeft from '../../resources/animations/TerraformAnim.json'
import shipRight from '../../resources/animations/HawkIdle.json'
import ap320 from '../../resources/animations/AP320.json'
import flashLight from '../../resources/animations/Flashlights.json'
import panel from "../../resources/main/main_panel.svg";
import dfinityLogo from "../../resources/main/dfinity_logo.svg";
import playBtn from "../../resources/main/play_btn.svg";

export default function About(props){
   
    const play = () => {
        window.location.href = "https://play.cosmicrafts.com";
    };

    return(
        <div class="about-div">
            <div class="about-left">
                <div class="about-left-image"></div>
            </div>
            <div class="about-right">
                <div class="about-right-section1">
                    <span class="about-text-bold ">A real-time strategy game built-in web3</span>
                    <span class="about-text"> to experience action packed and fast-paced intergalactic warfare by commanding your own space fleet.</span>
                    
                    <div className="div-buttons">
                        <div className="btn-about-deck" onClick={() => {  window.location.href = "https://play.cosmicrafts.com"; } }></div>
                        <div className="btn-about-whitepaper" onClick={() => {  window.location.href = "https://play.cosmicrafts.com"; } }>
                            {/* <label className="btn-lbl-about">WHITEPAPER</label> */}
                        </div>
                    </div>

                    <div class="video"></div>

                    <div className="div-buttons">
                        <div className="btn-about-wt" onClick={() => {  window.location.href = "https://play.cosmicrafts.com"; } }>
                            {/* <label className="btn-lbl-header">WHITEPAPER</label> */}
                        </div>
                    </div>
        
                </div>
               
                     
                    
            </div>
        </div>
    );
}