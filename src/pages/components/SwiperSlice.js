import React from 'react';
import { Swiper, SwiperSlide, scrollbar } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import 'swiper/css/effect-flip';

import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';


import nft1 from '../../assets/nfts/lamis.gif';
import nft2 from '../../assets/nfts/caley.gif';
import nft3 from '../../assets/nfts/aaron.gif';
import nft4 from '../../assets/nfts/tomo.gif';
import nft5 from '../../assets/nfts/ted.gif';


function SlideNFT() {
    SwiperCore.use([Autoplay]);

    const arrElement = [
        {
            img: nft1,
            name: 'LAMIS',
            className: 'lamis'
        },
        {
            img: nft2,
            name: 'CALEY',
            className: 'caley'
        },
        {
            img: nft3,
            name: 'AARON',
            className: 'aaron'
        },
        {
            img: nft4,
            name: 'TOMO',
            className: 'tomo'
        },
        {
            img: nft5,
            name: 'TED',
            className: 'ted',
        },
        {
            img: nft1,
            name: 'LAMIS',
            className: 'lamis'
        },
        {
            img: nft2,
            name: 'CALEY',
            className: 'caley'
        },
        {
            img: nft3,
            name: 'AARON',
            className: 'aaron'
        },
        {
            img: nft4,
            name: 'TOMO',
            className: 'tomo'
        },
        {
            img: nft5,
            name: 'TED',
            className: 'ted',
        },
    ]

    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={5}
            autoplay
            modules={[Autoplay, Pagination, Navigation]}
        >
            {
                arrElement.map((nft, index) => (
                    <SwiperSlide key={index}>
                        <div className={"img-box" + " " + nft.className}>
                            <img src={nft.img} alt="" />
                            <div className="content">
                                <a href="#">{nft.name}</a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
            {/* <SwiperSlide>
                <div >
                    <div className="img-box">
                        <img src={nft1} alt="" />
                        <div className="content">
                            <a href="#">Aaron</a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div >
                    <div className="img-box">
                        <img src={nft2} alt="" />
                        <div className="content">
                            <a href="#">Aaron</a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div >
                    <div className="img-box">
                        <img src={nft3} alt="" />
                        <div className="content">
                            <a href="#">Aaron</a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div >
                    <div className="img-box">
                        <img src={nft4} alt="" />
                        <div className="content">
                            <a href="#">Aaron</a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div >
                    <div className="img-box">
                        <img src={nft5} alt="" />
                        <div className="content">
                            <a href="#">Aaron</a>
                        </div>
                    </div>
                </div>
            </SwiperSlide> */}
            {/* <SwiperSlide>
                <div >
                    <div className="img-box">
                        <img src={nft1} alt="" />
                        <div className="content">
                            <a href="#">Aaron</a>
                        </div>
                    </div>
                </div>
            </SwiperSlide> */}
            {/* <SwiperSlide>
                <div >
                    <div className="img-box">
                        <img src={nft1} alt="" />
                        <div className="content">
                            <a href="#">Aaron</a>
                        </div>
                    </div>
                </div>
            </SwiperSlide> */}
        </Swiper>
    )
}

export default SlideNFT;