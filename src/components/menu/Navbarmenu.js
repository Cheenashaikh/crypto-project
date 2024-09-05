import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import logo from '../../img/purple_logo_design_2-removebg-preview.png';
import "./navbar.css";

const Navbarmenu = () => {
    const [isMenu, setIsMenu] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null); // Track which submenu is active

    const toggleClass = () => {
        setIsMenu(!isMenu);
    };

    const toggleSubmenu = (submenu) => {
        setActiveSubMenu(activeSubMenu === submenu ? null : submenu);
    };

    return (
        <header className="header__middle">
            <div className="container">
                <div className="row">
                    <div className="header__middle__logo">
                        <NavLink exact activeClassName='is-active' to="/">
                            <img src={logo} alt="Logo" style={{ width: "26vh" }} />

                        </NavLink>
                    </div>
                    <div className="header__middle__menus">
                        <nav className="main-nav">
                            <span className="menubar__button" onClick={toggleClass}>
                                {isMenu ? <FiXCircle /> : <FiAlignRight />}
                            </span>
                            <ul className={`main-menu ${isMenu ? 'menuq2' : ''}`}>
                                <li className="menu-item">
                                    <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/Prices`}> Prices </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink onClick={toggleClass} activeClassName='is-active' to={`/University`}>University </NavLink>
                                </li>
                                <li className="menu-item sub__menus__arrows" onClick={() => toggleSubmenu('company')}>
                                    <Link to="#"> Company <FiChevronDown /></Link>
                                    <ul className={`sub__menus ${activeSubMenu === 'company' ? 'sub__menus__Active' : ''}`}>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/About`}> About Us</NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> Contact Us </NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Team`}> Team</NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/legalAndSecurity`}> Legal and Security</NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/blog`}> Blog </NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/press`}> Press</NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/logo`}> Logo guidelines </NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/hiring`}> We are Hiring</NavLink></li>
                                    </ul>
                                </li>
                                <li className="menu-item sub__menus__arrows" onClick={() => toggleSubmenu('product')}>
                                    <Link to="#"> Product <FiChevronDown /></Link>
                                    <ul className={`sub__menus ${activeSubMenu === 'product' ? 'sub__menus__Active' : ''}`}>
                                        <li className='heading' style={{ fontSize: '2px' }}><NavLink onClick={toggleClass} activeClassName='is-active' to="#"> For Traders</NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/spotTrading`}> Spot Trading </NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/tradingApi`}> Trading Api</NavLink></li>
                                        <li className='heading'><NavLink onClick={toggleClass} activeClassName='is-active' to="#"> For Everyone</NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/cryptoDebitCard`}> Crypto Debit Card <span>New</span></NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/instantBuy`}> Instant Buy</NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/wallet`}> Wallet </NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/earn`}> Earn</NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/CeDeFiSwap`}> CeDeFi Swap</NavLink></li>
                                        <li className='heading'><NavLink onClick={toggleClass} activeClassName='is-active' to="#"> For Business</NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/prime`}> Prime </NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbarmenu;

