import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import appContext from '../appContext';
import MultiLanguage from './MultiLanguage';


const Header = ({ setOpenModal, setIsOpen, isOpen }) => {
    const location = useLocation().pathname;
    const navigate = useNavigate();
    const { Link } = useContext(appContext);

    const openPDF = () => {
        setOpenModal(true);
    };

    const handleNavigate = (route) => {
        navigate(route);
        setIsOpen(false);
    }

    const showOptions = (e, option) => {
        e.preventDefault();
        const poolsNFT = document.getElementById("pools-nft");
        const poolsPhone = document.getElementById("pools-phone");

        const iconPools = document.getElementById("icon-pools");
        const iconLanding = document.getElementById("icon-landing");

        if (option === "poolsPage") {
            poolsNFT.classList.add("pools-nft");
            poolsPhone.classList.remove("pools-landing");

            iconPools.classList.add("toggle-nft-up");
            iconLanding.classList.remove("toggle-nft-up");
        } else if (option === "landingPage") {
            poolsNFT.classList.remove("pools-nft");
            poolsPhone.classList.add("pools-landing");

            iconPools.classList.remove("toggle-nft-up");
            iconLanding.classList.add("toggle-nft-up");
        }
    }

    const MenuMobile = () => {
        return (
            <div className="link-header-mobile">
                <div
                    className="mobile-container animate__animated animate__backInDown"
                    id="mobile-container"
                >
                    <li>
                        {
                            location === "/" ?
                                <Link to="home" className='title-header'>Home</Link> :
                                <a href="/" className='title-header'>Home</a>
                        }
                    </li>
                    <li >
                        {
                            location === "/" ?
                                <Link to="about" className='title-header'>About</Link> :
                                <a href="/about" className='title-header'>About</a>
                        }
                    </li>
                    <li>
                        <a href="/community">
                            How to draw
                        </a >
                    </li>
                    <li onClick={(e) => showOptions(e, "poolsPage")}>
                        <div className='wrapper-content'>
                            <span>POOLS Phone NFT</span>
                            <i className="fa-solid fa-chevron-down" id="icon-pools"></i>
                        </div>
                        <ul id="pools-nft" className="bg-dark">
                            <li onClick={() => handleNavigate("/information")}>NFT Information</li>
                            <span style={{}} onClick={() => handleNavigate("/draw-nft")}>POOLS Phone NFT</span>
                        </ul>
                    </li>
                    <li>
                        {
                            location === "/" ?
                                <Link to="roadmap" className='title-header'>Road Map</Link> :
                                <a href="/roadmap" className='title-header'>Road Map</a>
                        }
                    </li>
                    <li>
                        <div className='wrapper-content' onClick={(e) => showOptions(e, "landingPage")}>
                            <span>Pools Phone</span>
                            <i className="fa-solid fa-chevron-down " id="icon-landing"></i>
                        </div>
                        <ul id="pools-phone" className='bg-dark'>
                            <li className="text-white" id="instruction" onClick={openPDF}>
                                Information
                            </li>
                            <li>
                                <a className="text-white" href="https://poolsmobility.com/" target="_blank" rel="noreferrer">Landing
                                    Page</a>
                            </li>
                        </ul>
                    </li>
                </div >
            </div >
        );
    };

    return (
        <>
            <nav id="main-nav" className="main-nav">
                <ul id="menu-primary-menu" className="menu">
                    {
                        location === "/" ?
                            <Link to="home" className='title-header'>Home</Link> :
                            <a href="/" className='title-header'>Home</a>
                    }
                    <li className="menu-item">
                        {
                            location === "/" ?
                                <Link to="about" className='title-header'>About</Link> :
                                <a href="/about" className='title-header'>About</a>
                        }
                    </li>
                    <li className="menu-item">
                        <a href="/community">How to draw</a>
                    </li>
                    <li className="menu-item menu-item-has-children">
                        <a href="#">POOLS Phone NFT</a>
                        <ul className="sub-menu bg-dark">
                            <li className="menu-item color-hover"><a className="text-white"
                                href="/information">NFT Information</a></li>
                            <li className="menu-item">
                                <a className="text-white" href="/draw-nft">POOLS Phone NFT</a>
                            </li>
                        </ul>
                    </li>
                    {
                        location === "/" ?
                            <Link to="roadmap" className='title-header'>Road Map</Link> :
                            <a href="/roadmap" className='title-header'>Road Map</a>
                    }
                    <li className="menu-item menu-item-has-children">
                        <a href="#">Pools Phone</a>
                        <ul className="sub-menu bg-dark" style={{ letterSpacing: "1px" }}>
                            <li className="menu-item color-hover" onClick={openPDF}>
                                <a href="#" className="text-white" id="instruction">
                                    Information
                                </a>
                            </li>
                            <li className="menu-item">
                                <a className="text-white" href="https://poolsmobility.com/" target="_blank" rel="noreferrer">Landing
                                    Page</a>
                            </li>
                        </ul>
                    </li>
                    <MultiLanguage />
                </ul>
            </nav>
            {isOpen && <MenuMobile />}
        </>
    )
}

export default Header