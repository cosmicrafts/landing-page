/// pk34
/// React
import React, { useState } from "react";

///Resources
import "../../css/menu.css";
import imgLogo from "../../resources/main/logo.svg";
import menuIconOpen from "../../resources/menu/menu_icon_open.svg";
import menuIconClose from "../../resources/menu/menu_icon_close.svg";
import menuIconArrowOpen from "../../resources/menu/menu_icon_arrow_open.svg";
import menuIconArrowClose from "../../resources/menu/menu_icon_arrow_close.svg";
import arrowSubmenu from "../../resources/menu/submenu_icon_arrow.svg";

export default function Menu(props){
    const open = props.open;
    const setOpen = props.setOpen;
    const goTo = props.goTo;

    const [gameOpen, setGameOpen] = useState(true);
    const [nftsOpen, setNFTsOpen] = useState(false);
    const [tokensOpen, setTokensOpen] = useState(false);
    const [inverstorOpen, setInvestorOpen] = useState(false);

    return(
        <>
        {
            open ?
                <div className="menu-main-div">
                    <div className="menu-header-div">
                        <div className="menu-header-logo-div">
                            <img src={imgLogo} className="menu-logo" alt="Logo" />
                        </div>
                        <div className="menu-header-search-div">
                            <div className="menu-header-close-div" onClick={() => { setOpen(!open); }}>
                                <img src={menuIconClose} className="menu-header-close-icon" alt="Close Icon" />
                            </div>
                            <div className="input-search-div">
                                <input placeholder="Search" className="input-search" />
                            </div>
                        </div>
                    </div>
                    <div className="menu-body-div">
                        <div>
                            <div className="menu-section-div" onClick={() => { setGameOpen(!gameOpen); }}>
                                <div className="menu-arrow-div">
                                    {
                                        gameOpen ? 
                                            <img src={menuIconArrowOpen} className="icon-menu-arrow" alt="Icon arrow open" />
                                            :
                                            <img src={menuIconArrowClose} className="icon-menu-arrow" alt="Icon arrow close" />
                                    }
                                </div>
                                <label className="menu-section-title">GAME</label>
                            </div>
                            {
                                gameOpen ? 
                                    <div className="submenu-div">
                                        <div className="submenu-option-div">
                                            <label className="submenu-option-text">GUIDES & STRATEGIES</label>
                                            <img src={arrowSubmenu} className="submenu-option-icon" alt="Arrow submenu" />
                                        </div>
                                        <div className="submenu-option-div">
                                            <label className="submenu-option-text">UPDATES & CHANGELOG</label>
                                            <img src={arrowSubmenu} className="submenu-option-icon" alt="Arrow submenu" />
                                        </div>
                                        <div className="submenu-option-div">
                                            <label className="submenu-option-text">ROADMAP</label>
                                            <img src={arrowSubmenu} className="submenu-option-icon" alt="Arrow submenu" />
                                        </div>
                                    </div>
                                    :
                                    <></>
                            }
                        </div>
                        <div>
                            <div className="menu-section-div" onClick={() => { setNFTsOpen(!nftsOpen); }}>
                                <div className="menu-arrow-div">
                                    {
                                        nftsOpen ? 
                                            <img src={menuIconArrowOpen} className="icon-menu-arrow" alt="Icon arrow open" />
                                            :
                                            <img src={menuIconArrowClose} className="icon-menu-arrow" alt="Icon arrow close" />
                                    }
                                </div>
                                <label className="menu-section-title">NFTS</label>
                            </div>
                            {
                                nftsOpen ? 
                                    <div className="submenu-div">
                                        <div className="submenu-option-div" onClick={() => { goTo("https://airdrops.cosmicrafts.com"); }}>
                                            <label className="submenu-option-text">AIRDROPS</label>
                                            <img src={arrowSubmenu} className="submenu-option-icon" alt="Arrow submenu" />
                                        </div>
                                        <div className="submenu-option-div">
                                            <label className="submenu-option-text">CHARACTERS</label>
                                            <img src={arrowSubmenu} className="submenu-option-icon" alt="Arrow submenu" />
                                        </div>
                                        <div className="submenu-option-div">
                                            <label className="submenu-option-text">UNITS</label>
                                            <img src={arrowSubmenu} className="submenu-option-icon" alt="Arrow submenu" />
                                        </div>
                                        <div className="submenu-option-div">
                                            <label className="submenu-option-text">COLLECTABLES</label>
                                            <img src={arrowSubmenu} className="submenu-option-icon" alt="Arrow submenu" />
                                        </div>
                                        <div className="submenu-option-div" onClick={() => { goTo("https://nftanvil.com/a00aa2d5f5f9738e300615f21104cd06bbeb86bb8daee215525ac2ffde621bed/lg/"); }}>
                                            <label className="submenu-option-text">MARKETPLACES</label>
                                            <img src={arrowSubmenu} className="submenu-option-icon" alt="Arrow submenu" />
                                        </div>
                                    </div>
                                    :
                                    <></>
                            }
                        </div>
                        <div>
                            <div className="menu-section-div" onClick={() => { setTokensOpen(!tokensOpen); }}>
                                <div className="menu-arrow-div">
                                    {
                                        tokensOpen ? 
                                            <img src={menuIconArrowOpen} className="icon-menu-arrow" alt="Icon arrow open" />
                                            :
                                            <img src={menuIconArrowClose} className="icon-menu-arrow" alt="Icon arrow close" />
                                    }
                                </div>
                                <label className="menu-section-title">TOKENS</label>
                            </div>
                            {
                                tokensOpen ? 
                                    <div className="submenu-div">
                                        <div className="submenu-option-div">
                                            <label className="submenu-option-text">SPIRAL</label>
                                            <img src={arrowSubmenu} className="submenu-option-icon" alt="Arrow submenu" />
                                        </div>
                                        <div className="submenu-option-div">
                                            <label className="submenu-option-text">NEUTRINOS</label>
                                            <img src={arrowSubmenu} className="submenu-option-icon" alt="Arrow submenu" />
                                        </div>
                                        <div className="submenu-option-div">
                                            <label className="submenu-option-text">COSMICRAFTS XP</label>
                                            <img src={arrowSubmenu} className="submenu-option-icon" alt="Arrow submenu" />
                                        </div>
                                    </div>
                                    :
                                    <></>
                            }
                        </div>
                        <div>
                            <div className="menu-section-div" onClick={() => { setInvestorOpen(!inverstorOpen); }}>
                                <div className="menu-arrow-div">
                                    {
                                        inverstorOpen ? 
                                            <img src={menuIconArrowOpen} className="icon-menu-arrow" alt="Icon arrow open" />
                                            :
                                            <img src={menuIconArrowClose} className="icon-menu-arrow" alt="Icon arrow close" />
                                    }
                                </div>
                                <label className="menu-section-title">INVESTOR</label>
                            </div>
                            {
                                inverstorOpen ? 
                                    <div className="submenu-div">
                                        <div className="submenu-option-div">
                                            <label className="submenu-option-text">DECK</label>
                                            <img src={arrowSubmenu} className="submenu-option-icon" alt="Arrow submenu" />
                                        </div>
                                        <div className="submenu-option-div" onClick={() => { goTo("https://wp.cosmicrafts.com"); }}>
                                            <label className="submenu-option-text">WHITEPAPER</label>
                                            <img src={arrowSubmenu} className="submenu-option-icon" alt="Arrow submenu" />
                                        </div>
                                    </div>
                                    :
                                    <></>
                            }
                        </div>
                    </div>
                </div>
                :
                <>
                    <div className="menu-open-icon-div" onClick={() => { setOpen(!open); }}>
                        <img src={menuIconOpen} className="menu-open-icon" alt="Menu open" />
                    </div>
                </>
        }
        </>
    );
}