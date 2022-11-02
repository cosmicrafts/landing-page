/// Shizuken - Modified: Art - 09-25-2022
/// React
import React from "react";

/// Resources
import "../../css/about.css";
import deck_pdf from "../../assets/pdf/CosmicraftsPD2022.pdf";

export default function About(props){

     const goTo = (url) => {
        window.open(url);
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
                        {/*<div className="btn-about-deck" onClick={() => { goTo(deck_pdf) } }></div>*/}
                        {/*<div className="btn-about-whitepaper" onClick={() => {  window.open("https://wp.cosmicrafts.com"); } }> </div>*/}
                        <a href={deck_pdf} className="parallel-btn parallel-yellow-btn" rel="noreferrer noopener" target="_blank"><span>DECK</span></a>
                        <a href="https://wp.cosmicrafts.com" className="parallel-btn parallel-blue-btn" rel="noreferrer noopener" target="_blank"><span>WHITEPAPER</span></a>
                       
                    </div>

                    <div className="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/N4ycbfAAHSs" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>
                    <a href="https://www.youtube.com/watch?v=N4ycbfAAHSs" target="_blank" className="btn-about-wt parallel-btn parallel-purple-btn"><span>WATCH TRAILER</span></a>
                    {/*<div className="btn-about-wt" onClick={() => {  goTo("https://www.youtube.com/watch?v=N4ycbfAAHSs") } }>
                    </div>*/}
        
                </div>
               
                     
                    
            </div>
        </div>
    );
}