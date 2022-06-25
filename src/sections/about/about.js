/// Shizuken
/// React
import React from "react";

/// Resources
import "../../css/about.css";

export default function About(props){
   
    const play = () => {
        window.location.href = "https://play.cosmicrafts.com";
    };

    return(
        <div className="about-div">
            <div className="about-left">
                <div className="about-left-image"></div>
            </div>
            <div className="about-right">
                <div className="about-right-section1">
                    <label className="about-text">
                        <span className="about-text-bold ">A real-time strategy game built-in web3</span> to experience action packed and fast-paced intergalactic warfare by commanding your own space fleet.
                    </label>
                    
                    <div className="div-buttons">
                        <div className="btn-about-deck" onClick={() => {  window.location.href = "https://play.cosmicrafts.com"; } }></div>
                        <div className="btn-about-whitepaper" onClick={() => {  window.open("https://wp.cosmicrafts.com"); } }>
                        </div>
                    </div>

                    <div className="video"></div>

                    <div className="btn-about-wt" onClick={() => {  window.location.href = "https://play.cosmicrafts.com"; } }>
                    </div>
        
                </div>
               
                     
                    
            </div>
        </div>
    );
}