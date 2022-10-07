import {React, useState, useEffect } from "react";

/*CSS*/
import "../assets/css/header.css";

import logo from "../assets/images/logo.svg";
import burger from "../assets/images/menu/menu_icon_open.svg";

import Navigation from "../components/Navigation";
import Social from "../components/Social";
import { NavLink } from "react-router-dom";

function Header () {
    const handleClick = event => {
        const menu_this = document.getElementById('header-navigation');
        menu_this.classList.add('toggle-menu');
    };

{   /* useEffect( ()=> {
      
        window.addEventListener("load", () => {
            const url = window.location.href;
            console.log(url);
       });

    });
*/}
    const [scroll, setScroll] = useState(false);

     useEffect(() => {
       window.addEventListener("scroll", () => {
         setScroll(window.scrollY > 100);
       });
     }, []);

    return (

        <header className={ scroll ? 'scroll header' : 'header ' }>
            <div className="logo-section">
               <a href="/">
                    <img alt="Cosmicrafts" className="logo" src={logo} />
               </a>
               <div className="menu-toggle" onClick={ handleClick }>
                    <img alt="Cosmicrafts" className="toggle" src={burger} />
               </div>
            </div>
            <div id="header-navigation" className="header-navigation">
                <Navigation/>
            </div>
            <div className="header-div-icon">
                <Social/>
            </div>
            <div className="header-buttons">
                <a className="parallel-btn parallel-yellow-btn play-btn" href="https://beta.cosmicrafts.com" rel="noreferrer noopener" target="_blank">PLAY</a>
                <a className="parallel-btn parallel-yellow-btn login-btn hidden" href="https://beta.cosmicrafts.com" rel="noreferrer noopener" target="_blank">LOGIN</a>
                <a className="parallel-btn parallel-blue-btn leaderboards-btn" href="https://5nnju-daaaa-aaaad-qd7cq-cai.ic.fleek.co/" rel="noreferrer noopener" target="_blank">Leaderboards</a>
                
            </div>
        </header>
    );
}

export default Header;
