import React, { useContext, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import videoPhone from '../assets/videos/poolsPhoneTeaser.mp4';

import "../app/bootstrap/css/bootstrap.css";
import "../app/swiper/swiper-bundle.min.css";
import "../app/dist/app.css";
import "../assets/font/font-awesome.css";

import SlideNFT from './components/SwiperSlice';
import { images } from '../assets/ExportImg';
import FAQs from './components/FAQs';
import appContext from '../appContext';
import AboutComponent from './components/About';
import Roadmap from './components/Roadmap';
import Partner from './components/Partner';
import VideoHome from './components/VideoHome';


const { PHONE } = images;

function HomePage() {
  return (
    <div className="header-fixed main">
      <VideoHome />
      <section className="tf-section pb-mobie first-world">
        <div className="smartphone-wrapper">
          <div className="content">
            <div className="content-left">
              <h4>All that 'Phone to Earn' in POOLS</h4>
              <h1 className="title_fist_home">The world's first Phone to Earn Smartphone</h1>
              <p>Pool's goal is for users to earn money like a fortune hunter using the POOLS <br />
                Smartphone and to live an enjoyable life where rewards become a daily routine.</p>
              <a className="tf-button st2 btn-effect" target="_blank" href="https://poolsmobility.com/" rel="noreferrer">
                <span className="boder-fade"></span>
                <span className="effect">Go to POOLS Phone</span>
              </a>
            </div>
            <img src={PHONE} alt="phone" className="phone-image" />
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
            <video className="video-teaser" controls autoPlay muted loop src={videoPhone}></video>
          </div>
        </div>
      </section>

      <AboutComponent />

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

      <SlideNFT />
      <Roadmap />
      <Partner />
      <FAQs />
    </div>
  )
}

export default HomePage;