import React, { useEffect, useState } from "react";

/// Libraries
import Lottie from "lottie-web";

/// Resources
import "../css/main.css";
import "../css/dividerThree.css";
import "../assets/css/coming-soon.css";
import shipLeft from '../resources/animations/TerraformAnim.json'
import shipRight from '../resources/animations/HawkIdle.json'
import ap320 from '../resources/animations/AP320.json'
import flashLight from '../resources/animations/Flashlights.json'

function Coming() {
	const [animations, setAnimations] = useState(false);

    useEffect(() => {
        if(!animations){
            setAnimations(true);
        }
    }, []);

    /*const play = () => {
        window.location.href = "https://beta.cosmicrafts.com";
    };*/

     const goTo = (url) => {
        window.open(url);
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

  return (
  	<>
  		<div className="coming-soon-page">
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
	           <div className="coming-panel">
	           		<h1>COMING SOON!</h1>
	           </div>
	        </div>
	        <div className="divider-three-background">
	            <div className="logo_bkg"></div>
	            <span className="v24_5">TOGETHER<br />WE GROW STRONGER!</span>
	            <div className="v25_34"></div>
	            <div className="v25_31"></div>
	            <div className="v25_32"></div>
	            <div className="v25_33"></div>
	            <div className="v25_30"></div>
	            <div className="v25_29"></div>
	            <div className="v25_28"></div>
	        </div>
  		</div>
  	</>
  );
}

export default Coming;
