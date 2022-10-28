import React from "react";
import { NavLink } from "react-router-dom";

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
                    <a className="alinks" href="coming-soon">Terms and Conditions</a><br />
                    <NavLink className="privacy-policy-menu nav-link" to="/privacy-policy">Privacy policy</NavLink>
                    <NavLink className="faq-menu nav-link" to="/faq">FAQ</NavLink>
                    <NavLink className="contact-menu nav-link" to="/contact">Contact</NavLink>
                </span>
                <span className="v21_43">GET ON THE SHIP!</span>
                <span className="v21_44">
                <NavLink className="home-menu nav-link" to="/">HOME</NavLink>
                    <a className="alinks"  target="_blank" href="https://beta.cosmicrafts.com/">GAME</a><br />
                    <a className="alinks" href="#NFTS">NFTS</a><br />
                    <a className="alinks" href="#tokens">TOKENS<small className="coming-soon">Coming Soon...</small></a><br />
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