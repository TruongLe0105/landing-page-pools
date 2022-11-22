import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import video from '../assets/images/common/NFT-item/Web_Landingpage_Texture_1.mp4';
import videoPhone from '../assets/videos/poolsPhoneTeaser.mp4';

import phoneImg from '../assets/images/backgroup/phone.png';
import AaronNFT from '../assets/nfts/aaron.gif';
import TedNFT from '../assets/nfts/ted.gif';
import TomoNFT from '../assets/nfts/tomo.gif';
import CaleyNFT from '../assets/nfts/caley.gif';
import LamisNFT from '../assets/nfts/lamis.gif';

import bg1 from '../assets/images/backgroup/bg-ft.png';
import bg2 from '../assets/images/backgroup/bg-ft2.png';

import logo from '../assets/images/footer/footer-logo-icon.png';

import "../app/bootstrap/css/bootstrap.css";
import "../app/swiper/swiper-bundle.min.css";
import "../app/dist/app.css";
import "../assets/font/font-awesome.css";

import SlideNFT from './components/SwiperSlice';
import { images } from '../assets/ExportImg';


const { VNG, RED, SOTATEK, TELKOM, SINGTEL, TWIINNING, EQBR, phone } = images;

const Q_A = [
  {
    title: "How Can I Get Started With Pools Phone NFT?",
    description: "Please visit our Pools Phone NFT Tutorial",
    link: "https://phone.poolsplay.store/community.html"
  },
  {
    title: "Can I Purchase More Than One NFT?",
    description: "Each user can draw as many times as they wish, but they can only buy one NFT."
  },
  {
    title: "What Benefits Does Pools Phone NFT Provide To NFT Owners?",
    description: "Users can view their Pools Phone NFT benefit offer",
    link: "https://phone.poolsplay.store/nft-information.html"
  },
  {
    title: "Can I Change The NFT Once I've Drawn It?",
    description: "You certainly can. Users can draw again and again until they select their favorite one by clicking the 'Draw Again' button. Please keep in mind that each additional draw will cost 10 CORK."
  },
  {
    title: "In Pools Phone NFT, How Many NFT Classes Are There?",
    description: "Pools Phone NFT features five classes, each with its own set of benefits."
  },
  {
    title: "Where Can I Buy CORK To Participate In Pools Phone NFT?",
    description: "CORK can be swapped on Winery Swap. Click HERE to swap",
    link: "https://winery.finance/amm/#/trade/swap?inputCurrency=ETH&outputCurrency=0xe7EAdA32CAF827d3bA8Cb1074830d803C9bD48c3"
  },
];

function HomePage() {
  const [currActive, setActive] = useState(0);

  useEffect(() => {
    const preload = document.getElementById("preload");
    setTimeout(() => {
      preload.style.display = "none";
    }, 2000);
  }, []);

  const handleClick = (index) => {
    setTimeout(() => {
      setActive(index);
    }, 100);
  }

  return (
    <div className="header-fixed main">
      {/* <!-- preloade --> */}
      <div className="preload preload-container" id="preload">
        <div className="preload-logo"></div>
      </div>
      {/* <!-- /preload --> */}
      <div id="wrapper">
        {/* <!-- end Header --> */}

        <section className="pb-mobie" id="hero">
          <video id="heroVideoBg" autoPlay loop muted src={video}>
          </video>
          <div id="heroContent">
            <div className="hero">
              <div className=" box_slide_fix">
                <div className="content_box_fix">
                  <h1 className="title_fist_home">BE THE OWNER OF POOLS PHONE MAKER.
                  </h1>
                  <h1 className="subtitle_fist_home">
                    YOU ARE "MAKER" OF POOLS PHONE.</h1>
                </div>
                <div className="img_fix">
                  <p className="sub_title_fix">Join the NFT ROULETTE take advantage of winning FREE Pools Phone
                    and other financial benefits.</p>
                  <div className="button_home">
                    <a href="nft-roulette.html" className="button_home_item tf-button-st2 btn-effect"
                      style={{ marginRight: "5%" }}><span className="effect">roulette nft</span></a>
                    <a href="/assets/images/common/NFT-item/Pools_Intro.mp4"
                      className="button_home_item tf-button btn-effect popup-youtube">
                      <span className="boder-fade"></span>
                      <span className="effect">watch video</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section class="tf-section pb-mobie first-world">
        <div class="smartphone-wrapper">
          <div class="content">
            <div class="content-left">
              <h4>All that 'Phone to Earn' in POOLS</h4>
              <h1 class="title_fist_home">The world's first Phone to Earn Smartphone</h1>
              <p>Pool's goal is for users to earn money like a fortune hunter using the POOLS <br />
                Smartphone and to live an enjoyable life where rewards become a daily routine.</p>
              <a href="https://poolsmobility.com/" target="_blank" class="navigate-btn">
                <div>Go to POOLS Phone</div>
              </a>
            </div>
            <img src={phone} alt="phone" class="phone-image" />
          </div>
        </div>
      </section>

      <section className="tf-leak pb-mobie">
        <div className="project-wrapper">
          <div className="content">
            <div className="content-left">
              <h1 className="title">Be the owner of</h1>
              <h5>POOLS Phone project</h5>
            </div>
            <video className="video-teaser" controls autoPlay loop src={videoPhone}></video>
          </div>
        </div>
      </section>

      <section className="tf-section tf-about pb-mobie" id="content-about">
        <div className="ab-home">
          <div className="tf-title st2 align-center">
            <p className="tt-about">About POOLS Phone Project</p>
            <span className='text-project'>A project created with users</span>
            <h6 className=" title_about" style={{ color: "#6CFFCA" }}>"You are the market of POOLS Phone"</h6>
          </div>
          <div className="image-group">
            <div className="relative aaron">
              <img alt="img" src={AaronNFT} className="nft-img" />
            </div>
            <div className="relative tomo">
              <img alt="img" src={TedNFT} className="nft-img" />
            </div>
            <div className="relative caley">
              <img alt="img" src={TomoNFT} className="nft-img" />
            </div>
            <div className="relative ted">
              <img alt="img" src={LamisNFT} className="nft-img" />
            </div>
            <div className="relative lamis">
              <img alt="img" src={CaleyNFT} className="nft-img" />
            </div>
          </div>
          <p className="description_homePage">Be the owner of POOLS Phone
            <br />Waiting for 10,000 POOLS NFT holders
            with a first-come, <br /> first-served basis.
          </p>
          {/* </p> */}
          <a className="tf-button st2 btn-effect" href="/nft-roulette.html">
            <span className="boder-fade"></span>
            <span className="effect">GET POOLS NFT</span>
          </a>
        </div>
      </section>

      <section className="tf-section tf-lifestyle">
        <div className="content_left " data-aos="fade-up" data-aos-duration="800">
          Earn more, <br />
          Consume wisely, <br />
          and Enjoy the True Web3.
        </div>
        <div className="content_right" data-aos="fade-up" data-aos-duration="800">
          <p className="title_pools">POOLS Lifestyle </p>
          <div className="list_lifestyle">
            <span>Lifestyle</span>
            <span>Platform</span>
            <span>Community</span>
          </div>
        </div>
      </section>

      <section className="tf-section tf-project pb-mobie">
        <div>
          <SlideNFT />
        </div>
      </section>

      <section className="tf-section tf-roadmap" id="roadmap-content">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-title m-b30" data-aos="fade-up" data-aos-duration="800">
                <h4 className="roadmap-text">ROADMAP</h4>
              </div>
            </div>
            <div className="col-md-12">
              <div className="roadmap scrol">
                <div className="box box-left">
                  <div className="rm-box style" data-aos="fade-right" data-aos-duration="1200">
                    <div className="corner-box">
                      <h5>Q3 2022</h5>
                      <ul style={{ color: "#FFFFFF" }}>
                        <li>Market Research/ Business Plan</li>
                        <li>POOLS Phone Business Plan</li>
                        <li>Platform Business Plan</li>
                        <li>POOLS Brand Strategic Plan</li>
                        <li>POOLS App store Plan</li>
                        <li>POOLS Main-net Development</li>
                      </ul>
                    </div>
                  </div>
                  <div className="rm-box style" data-aos="fade-left" data-aos-duration="1200">
                    <div className="corner-box">
                      <h5>Q1 2023</h5>
                      <ul style={{ color: "#FFFFFF" }}>
                        <li>POOLS Integrated Brand Launch Event</li>
                        <li>Sequential Design for POOLS Phone</li>
                        <li>Consortium Expansion</li>
                        <li>Embedded System Development</li>
                        <li>POOLS App-store Open Promotion</li>
                        <li>Main-net-based Wallet & Integrated ID Open-Beta</li>
                        <li>Phone Manufacturing Order</li>
                        <li>POOLS Phone Launch Event</li>
                        <li>1st Pre-purchase Booking & NFT sales</li>
                        <li>Angel & VC Funding</li>
                      </ul>
                    </div>
                  </div>

                  <div className=" rm-box style" data-aos="fade-right" data-aos-duration="1200">
                    <div className="corner-box">
                      <h5>Q3 2023</h5>
                      <ul style={{ color: "#FFFFFF" }}>
                        <li>Launch of POOLS Phone </li>
                        <li>NFT Buyer Product Shipment</li>
                        <li>Pre-purchase Scheduled Person Product Shipment</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="box box-right">
                  <div className="rm-box style" data-aos={"fade-right"} data-aos-duration={"1200"}>
                    <div className="corner-box">
                      <h5>Q4 2022</h5>
                      <ul style={{ color: "#FFFFFF" }}>
                        <li>Platform Plan & Design</li>
                        <li>Phone Design & Core Function Design</li>
                        <li>POOLS Consortium Launch</li>
                        <li>DAO Recruitment/ Community Setup</li>
                        <li>POOLS Phone NFT Issuance (10,000)</li>
                        <li>Completion of Main-net Development/Open-beta</li>
                        <li>Main-net Based POOLS Coin Issuance</li>
                      </ul>
                    </div>
                  </div>
                  <div className="rm-box style" data-aos="fade-left" data-aos-duration="1200">
                    <div className="corner-box">
                      <h5>Q2 2023</h5>
                      <ul style={{ color: "#FFFFFF" }}>
                        <li>2nd Pre-purchase Booking & NFT sales</li>
                        <li>POOLS Token Listing</li>
                        <li>Completion of Embedded System Development</li>
                        <li>Development of Dashboard for POOLS Phone</li>
                        <li> Security of A/S Network in Major Target Countries</li>
                        <li>Expansion of Sales/ Marketing in Major Target Countries</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section partner bg-st1 pb-mobie-40">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-title" data-aos="fade-up" data-aos-duration="800">
                <h4 className="title_homePage_parner">PARTNERS</h4>
              </div>
            </div>
            <div className="container text-center">
              <div className="row mt-5">
                <div className="col ">
                  <img src={VNG} alt="" />
                </div>
                <div className="col">
                  <img src={RED} alt="" />
                </div>
                <div className="col">
                  <img src={SOTATEK} alt="" />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col">
                  <img src={TELKOM} alt="" />
                </div>
                <div className="col">
                  <img src={SINGTEL} alt="" />

                </div>
                <div className="col">
                  <img src={TWIINNING} alt="" />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col">
                  <img src={EQBR} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flat-accordion">
        <div className="container px-120">
          <div>
            <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <div className="title-QA">Q&A</div>
              {Q_A.map((box, index) => (
                <div
                  key={index}
                  className={`flat-toggle + box-text corner-box qa-container ${currActive === index && "active"}`}
                  onClick={() => handleClick(index)}
                >
                  <div className="h7 toggle-title">{box.title}</div>
                  <p className="toggle-content"
                    style={{
                      display: currActive === index && "block"
                    }}>
                    {box.description}
                    {
                      box.link && (
                        <a className="link-navigate" target="_blank"
                          href="https://phone.poolsplay.store/community.html" rel="noreferrer">HERE.</a>
                      )
                    }
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer id="footer">
        <div className="footer-main">
          <img src={bg1} alt="" className="bg1" />
          <img src={bg2} alt="" className="bg2" />
          <div className="container">
            <img src={logo} alt="Logo" className="logo" />
            <h5 className="heading">Don’t miss out, join now for early access</h5>
            <p>
              Join our community
            </p>
            <ul className="widget-social">
              <li>
                <a href="https://twitter.com/pools_club" target="_blank">
                  <svg width="24" height="22" viewBox="0 0 24 22" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21.173 4.01621C22.2015 3.3728 22.971 2.35967 23.338 1.16598C22.3715 1.76605 21.3141 2.18875 20.2115 2.41581C18.6828 0.723595 16.2607 0.311787 14.2986 1.41049C12.3365 2.5092 11.3202 4.84642 11.8176 7.11616C7.85881 6.90819 4.17053 4.95138 1.67052 1.73267C0.365817 4.08755 1.03255 7.09789 3.19419 8.61211C2.41252 8.58582 1.64818 8.36436 0.964911 7.96619C0.964911 7.9878 0.964911 8.00941 0.964911 8.03102C0.965363 10.484 2.6175 12.597 4.91519 13.0832C4.19015 13.2896 3.42963 13.32 2.69165 13.172C3.33783 15.2698 5.18545 16.7069 7.29133 16.7498C5.54718 18.1823 3.39322 18.9591 1.17602 18.9553C0.783024 18.9559 0.390336 18.9322 0 18.8845C2.25152 20.3985 4.87202 21.2021 7.54833 21.1992C11.2717 21.226 14.85 19.6899 17.4828 16.9347C20.1156 14.1795 21.5832 10.4349 21.5573 6.53868C21.5573 6.31536 21.5523 6.09325 21.5424 5.87234C22.5067 5.1431 23.3389 4.2397 24 3.20461C23.1017 3.62129 22.1487 3.89486 21.173 4.01621Z"
                      fill="white" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100086429633297" target="_blank">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.80176 15.0759C1.80315 21.0155 6.09584 26.0728 11.9262 27.0037V18.5652H8.88176V15.0759H11.9298V12.4196C11.7935 11.161 12.2208 9.90656 13.0957 8.9966C13.9707 8.08664 15.2026 7.61545 16.4574 7.71081C17.358 7.72545 18.2564 7.80616 19.1454 7.95229V10.9213H17.6286C17.1064 10.8524 16.5814 11.026 16.2015 11.3929C15.8216 11.7599 15.6279 12.2806 15.675 12.8084V15.0759H19.0002L18.4686 18.5664H15.675V27.0037C21.9803 26.001 26.4019 20.207 25.7364 13.8191C25.0709 7.43115 19.5513 2.68558 13.1763 3.02033C6.80139 3.35508 1.80277 8.65295 1.80176 15.0759Z"
                      fill="white" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://t.me/Poolsclub" target="_blank">
                  <svg width="30" height="27" viewBox="0 0 30 27" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M28.8558 1.15613C28.3645 0.744 27.5929 0.685032 26.7951 1.0019H26.7938C25.9547 1.33498 3.04206 11.0576 2.10931 11.4548C1.93966 11.5131 0.458 12.0601 0.61062 13.2783C0.746864 14.3767 1.93769 14.8316 2.08311 14.884L7.9082 16.8572C8.29466 18.1299 9.71933 22.8253 10.0344 23.8284C10.2309 24.4537 10.5512 25.2754 11.1126 25.4445C11.6051 25.6325 12.0951 25.4607 12.4121 25.2145L15.9735 21.9466L21.7226 26.3822L21.8595 26.4632C22.2499 26.6343 22.6239 26.7198 22.9809 26.7198C23.2566 26.7198 23.5213 26.6686 23.7741 26.5662C24.6355 26.2163 24.98 25.4044 25.016 25.3123L29.3103 3.23038C29.5724 2.05102 29.2082 1.45097 28.8558 1.15613ZM13.0455 17.6465L11.0805 22.8305L9.11541 16.3505L24.1809 5.33444L13.0455 17.6465Z"
                      fill="white" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://discord.gg/sD4CbW4Ys8" target="_blank">
                  <svg width="30" height="22" viewBox="0 0 30 22" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M25.4083 2.56088C22.9162 0.555449 18.9738 0.215503 18.805 0.203274C18.5434 0.181264 18.2939 0.328003 18.1863 0.570123C18.1765 0.584796 18.0909 0.782894 17.9955 1.09105C19.6439 1.36985 21.6689 1.92991 23.5007 3.06713C23.7942 3.24811 23.8847 3.63452 23.7037 3.928C23.5838 4.12121 23.3809 4.22637 23.1705 4.22637C23.058 4.22637 22.9431 4.19458 22.8404 4.13099C19.6904 2.17692 15.7578 2.07909 14.9996 2.07909C14.2415 2.07909 10.3064 2.17692 7.15885 4.13099C6.86537 4.31442 6.47896 4.22393 6.29798 3.93045C6.11456 3.63452 6.20504 3.25056 6.49852 3.06713C8.33032 1.93235 10.3553 1.36985 12.0037 1.09349C11.9083 0.782895 11.8227 0.587242 11.8154 0.570123C11.7053 0.328003 11.4583 0.176373 11.1942 0.203274C11.0254 0.215503 7.08303 0.555448 4.55668 2.58779C3.23847 3.80817 0.599609 10.9397 0.599609 17.1052C0.599609 17.2152 0.628957 17.3204 0.682762 17.4158C2.50233 20.6147 7.46945 21.4511 8.60178 21.4878C8.60668 21.4878 8.61401 21.4878 8.62135 21.4878C8.82189 21.4878 9.01021 21.3924 9.1276 21.231L10.2722 19.656C7.1833 18.8587 5.60586 17.5038 5.51537 17.4231C5.25613 17.1957 5.23167 16.7995 5.46157 16.5402C5.68901 16.281 6.08521 16.2565 6.34445 16.484C6.38113 16.5182 9.28657 18.9834 14.9996 18.9834C20.7224 18.9834 23.6279 16.5084 23.6572 16.484C23.9165 16.259 24.3102 16.281 24.5401 16.5427C24.7675 16.8019 24.7431 17.1957 24.4838 17.4231C24.3934 17.5038 22.8159 18.8587 19.7271 19.656L20.8716 21.231C20.989 21.3924 21.1773 21.4878 21.3779 21.4878C21.3852 21.4878 21.3925 21.4878 21.3974 21.4878C22.5298 21.4511 27.4969 20.6147 29.3165 17.4158C29.3703 17.3204 29.3996 17.2152 29.3996 17.1052C29.3996 10.9397 26.7607 3.80817 25.4083 2.56088ZM10.93 14.6008C9.71945 14.6008 8.73874 13.4807 8.73874 12.0965C8.73874 10.7122 9.71945 9.59213 10.93 9.59213C12.1406 9.59213 13.1213 10.7122 13.1213 12.0965C13.1213 13.4807 12.1406 14.6008 10.93 14.6008ZM19.0692 14.6008C17.8586 14.6008 16.8779 13.4807 16.8779 12.0965C16.8779 10.7122 17.8586 9.59213 19.0692 9.59213C20.2798 9.59213 21.2605 10.7122 21.2605 12.0965C21.2605 13.4807 20.2798 14.6008 19.0692 14.6008Z"
                      fill="white" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/pools-contact-bb6636253/" target="_blank">
                  <svg width="30" height="22" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                    x="0px" y="0px" viewBox="0 0 310 310"
                  >
                    <g id="XMLID_801_" />
                    <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z" fill="white" />
                    <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z" fill="white" />
                    <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z" fill="white" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="wrap-fx">
              <div className="Copyright">
                <p>Pools Phone - ALL rights reserved</p>
              </div>
              <ul className="list">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage;