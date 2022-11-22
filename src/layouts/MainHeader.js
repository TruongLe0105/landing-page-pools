/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import appContext from '../appContext';
import { images } from '../assets/ExportImg';
import ModalPDF from '../components/ModalPDF';
import MultiLanguage from '../components/MultiLanguage';

function MainHeader() {
  const [openModal, setOpenModal] = useState(false);
  const { about, roadmap, Link } = useContext(appContext);
  const { LOGO } = images;
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const scroll = () => {
    const header = document.getElementById("header_main");
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        header.classList.add("appear-header");
      } else {
        header.classList.remove("appear-header");
      }
    })
  };

  const openPDF = () => {
    setOpenModal(true);
  }

  console.log(location)

  const navigateAbout = () => {
    if (location === "/") {
      window.scrollTo({
        top: about.current.offsetTop,
        left: 0,
        behavior: "smooth"
      })
    } else {
      navigate("/")
    }
  }

  useEffect(() => {
    scroll();
  }, [location]);

  return (
    <header id="header_main" className="header">
      <div className="container">
        <div id="site-header-inner">
          <div className="header__logo">
            {
              location === "/" ?
                <Link to="home" className='title-header'><img src={LOGO} alt="" /></Link> :
                <a href="/" className='title-header'><img src={LOGO} alt="" /></a>
            }
          </div>
          <nav id="main-nav" className="main-nav">
            <ul id="menu-primary-menu" className="menu">
              <li className="menu-item">
                {
                  location === "/" ?
                    <Link to="home" className='title-header'>Home</Link> :
                    <a href="/" className='title-header'>Home</a>
                }
              </li>
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
              <li className="menu-item">
                {
                  location === "/" ?
                    <Link to="roadmap" className='title-header'>Road Map</Link> :
                    <a href="/roadmap" className='title-header'>Road Map</a>
                }
              </li>
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
              {/* <li className="menu-item">
                <a href="/nft-roulette.html">My NFT</a>
              </li> */}
              <MultiLanguage />
            </ul>
          </nav>
          <div className="mobile-button"><span></span></div>
        </div>
        <div className="translate-mobile" id="mobile-language">
          <span>TRANSLATE</span>
          <i className="far fa-solid fa-language"></i>
          <div className="wrapper-languages" id="mobile">
            <div id="VNMOBILE">
              Vietnam
            </div>
            <div id="ENMOBILE">
              English
            </div>
            <div id="KOMOBILE">
              Korean
            </div>
          </div>
        </div>
      </div>
      {
        openModal && <ModalPDF setOpenModal={setOpenModal} />
      }
    </header>
  )
}

export default MainHeader;