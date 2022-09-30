import {React, useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/navigation.css";
import logo from "../assets/images/logo.svg";
import arrow from "../resources/menu/menu_icon_arrow_close.svg";

function Navigation(props) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        //toggle isActive state
        //setIsActive(current=>!current);
       const menu_this = document.getElementById('header-navigation');
       menu_this.classList.remove('toggle-menu');
    };

    return (
        <div className="main-navigation">
            <div className="container">
                <div className="close-btn" onClick={handleClick}><span className="burger"></span></div>
                <a href="/">
                    <img alt="Cosmicrafts" className="logo" src={logo} />
                </a>
                <ul className="navigation-items">
                    <li className="nav-item">
                        <NavLink className="home-menu nav-link" to="/"> Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="game-menu nav-link has-children" target="_blank" rel="noreferrer noopener" href="https://play.cosmicrafts.com/">Game</a>
                        <ul className="sub-menu">
                            <li className="subnav-item">
                                <NavLink className="guide-strategies-menu nav-link menu-children coming-soon" to="/coming-soon" onClick={ handleClick }>Guide & Strategies</NavLink>
                            </li>
                             <li className="subnav-item">
                                <NavLink className="updates-changelog-menu nav-link menu-children coming-soon" to="/coming-soon" onClick={ handleClick }>Updates & Changelog</NavLink>
                            </li>
                             <li className="subnav-item">
                                <NavLink className="roadmap-menu nav-link menu-children coming-soon" to="/coming-soon" onClick={ handleClick }>Roadmap</NavLink>
                            </li>
                            <li className="subnav-item">
                                <NavLink className="leaderboards-menu nav-link menu-children" to="/leaderboards" onClick={ handleClick }>Leaderboards</NavLink>
                            </li>
                        </ul>
                    </li>
                     <li className="nav-item">
                        <NavLink className="nft-menu nav-link has-children coming-soon" to="/coming-soon" onClick={ handleClick }>NFTs</NavLink>
                        <ul className="sub-menu">
                            <li className="subnav-item">
                                <a className="airdrops-menu nav-link menu-children" target="_blank" rel="noopener noreferrer" href="https://airdrops.cosmicrafts.com/">Airdrops</a>
                            </li>
                             <li className="subnav-item">
                                <NavLink className="characters-menu nav-link menu-children coming-soon " to="/coming-soon" onClick={ handleClick }>Characters</NavLink>
                            </li>
                            <li className="subnav-item">
                                <NavLink className="units-menu nav-link menu-children coming-soon" to="/coming-soon" onClick={ handleClick }>Units</NavLink>
                            </li>
                            <li className="subnav-item">
                                <NavLink className="collectibles-menu nav-link menu-children coming-soon" to="/coming-soon" onClick={ handleClick }>Collectibles</NavLink>
                            </li>
                            <li className="subnav-item">
                                <a className="marketplace-menu nav-link menu-children" target="_blank" rel="noopener noreferrer" href="https://entrepot.app/marketplace/cosmicrafts">Marketplace</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink className="token-menu nav-link has-children coming-soon" to="/coming-soon" onClick={ handleClick }>TOKENS</NavLink>
                        <ul className="sub-menu">
                            <li className="subnav-item">
                                <a className="airdrops-menu nav-link menu-children" rel="noopener noreferrer" href="#">Coming Soon...</a>
                            </li>

                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink className="investor-menu nav-link has-children coming-soon" to="/coming-soon" onClick={ handleClick }>Investor</NavLink>
                        <ul className="sub-menu">
                            <li className="subnav-item">
                                <a className="dfinity-menu nav-link menu-children" target="_blank" rel="noopener noreferrer" href="https://dfinity.org/">Dfinity</a>
                                <a className="icpl-menu nav-link menu-children" target="_blank" rel="noopener noreferrer" href="https://center.icpl.app/">ICPLeague</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Navigation;
