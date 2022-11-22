import React, { useEffect } from 'react'

function MainHeader() {
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

  useEffect(() => {
    scroll();
  }, []);

  return (
    <header id="header_main" className="header">
      <div className="container">
        <div id="site-header-inner">
          <div className="header__logo">
            <a href="/index.html"><img src="assets/images/logo/logopool.png" alt="" /></a>
          </div>
          <nav id="main-nav" className="main-nav">
            <ul id="menu-primary-menu" className="menu">
              <li className="menu-item">
                <a href="/index.html">Home</a>
              </li>
              <li className="menu-item">
                <a href="/index.html#content-about">About</a>
              </li>
              <li className="menu-item">
                <a href="/community.html">How to mint</a>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#">NFT Roulette</a>
                <ul className="sub-menu bg-dark">
                  <li className="menu-item color-hover"><a className="text-white"
                    href="/nft-information.html">NFT Information</a></li>
                  <li className="menu-item">
                    <a className="text-white" href="/nft-roulette.html">NFT Roulette</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="/index.html#roadmap-content">Road Map</a>
              </li>
              <li className="menu-item">
                <a href="/assets/images/file_pdf/Pools_intro.pdf" target="_blank">Pools Phone</a>
              </li>
              <li className="menu-item">
                <a href="/nft-roulette.html">My NFT</a>
              </li>
              <div className="translate" id="container-language">
                <span>TRANSLATE</span>
                <i className="far fa-solid fa-language"></i>
                <div className="wrapper-languages" id="languages">
                  <div id="VIETNAM">
                    Vietnam
                  </div>
                  <div id="ENGLISH">
                    English
                  </div>
                  <div id="KOREAN">
                    Korean
                  </div>
                </div>
              </div>
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
    </header>
  )
}

export default MainHeader;