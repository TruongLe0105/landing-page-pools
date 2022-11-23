/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import appContext from '../appContext';
import { images } from '../assets/ExportImg';
import Header from '../components/Header';
import MenuIcon from '../components/MenuIcon';
import ModalPDF from '../components/ModalPDF';

function MainHeader() {
  const [openModal, setOpenModal] = useState(false);
  const [openTranslate, setOpenTranslate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { Link } = useContext(appContext);
  const { LOGO } = images;
  const location = useLocation().pathname;

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

  const openModalTranslate = () => {
    setOpenTranslate(!openTranslate)
  };

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    scroll();
    window.addEventListener("scroll", () => {
      setIsOpen(false);
    })
  }, [location]);

  return (
    <header id="header_main" className="header notranslate">
      <div className="container">
        <div id="site-header-inner">
          <div className="header__logo">
            {
              location === "/" ?
                <Link to="home" className='title-header'><img src={LOGO} alt="" /></Link> :
                <a href="/" className='title-header'><img src={LOGO} alt="" /></a>
            }
          </div>
          <Header setOpenModal={setOpenModal} setIsOpen={setIsOpen} isOpen={isOpen} />
          <MenuIcon onClick={openMenu} isOpenSideBar={isOpen} />
        </div>
        <div className="translate-mobile" id="mobile-language" onClick={openModalTranslate}>
          <span>TRANSLATE</span>
          <i className="far fa-solid fa-language"></i>
          {
            openTranslate && (
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
            )
          }
        </div>
      </div>
      {openModal && <ModalPDF setOpenModal={setOpenModal} />}
    </header>
  )
}

export default MainHeader;