import React from "react";

import "../css/footer.css";
import icpl from "../resources/footer/ICPLeague.png";
import dfinity from "../resources/footer/dfinity.png";

const goTo = (url) => {
    window.open(url);
};


export default function Footer(props){
    return (
        <div className="footer-div">
            <div className="v21_3">
                <div className="v21_69"></div>
                <div className="v21_68"></div>
                <span className="v21_41"> ©2022 World of Unreal<br /> 
            All trademarks referenced herein are the properties of their respective owners.</span>
                <span className="v21_42">
                    <a className="alinks" href="TERMS">Terms and Conditions</a><br />
                    <a className="alinks" href="#PRIVACY POLICY">Privacy Policy</a><br />
                    <a className="alinks" href="#FAQ">FAQ</a><br />
                    <a className="alinks" href="#Contact">Contact</a><br />
                </span>
                <span className="v21_43">GET ON THE SHIP!</span>
                <span className="v21_44">
                <a className="alinks" href="#home">HOME</a><br />
                    <a className="alinks"  targer="_blank" href="https://play.cosmicrafts.com">GAME</a><br />
                    <a className="alinks" href="#NFTS">NFTS</a><br />
                    <a className="alinks" href="#tokens">TOKENS<small class="coming-soon">Coming Soon...</small></a><br />
                    <a className="alinks" href="#INVESTORS">INVESTORS
                        <span className="investors-logo">
                            <img src={icpl} className="ICPLeague" alt="ICPLeague" onClick={() => goTo('https://dfinity.org/') }/>
                            <img src={dfinity} className="dfinity" alt="DFinity" onClick={() => goTo() }/>
                        </span>
                    </a><br />
                </span>
                <div className="hidden">
                    <a href="#DISTRIK"><div className="v21_66"></div></a>
                    <a href="#DISTRIK"><div className="v21_65"></div></a>
                    <a href="#DISTRIK"><div className="v21_64"></div></a>
                    <a href="#DISTRIK"><div className="v21_63"></div></a>
                    <a href="#DISTRIK"><div className="v21_61"></div></a>
                    <a href="#DISTRIK"><div className="v21_62"></div></a>
                    <a href="#DISTRIK"><div className="v21_67"></div></a>
                </div>
                <div className="logoWoU"></div>
            </div>
        </div>
    );
}