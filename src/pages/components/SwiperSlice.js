import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-flip';

import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';


import nft1 from '../../assets/nfts/lamis.gif';
import nft2 from '../../assets/nfts/caley.gif';
import nft3 from '../../assets/nfts/aaron.gif';
import nft4 from '../../assets/nfts/tomo.gif';
import nft5 from '../../assets/nfts/ted.gif';


function SlideNFT() {
    SwiperCore.use([Autoplay]);
    const [slide, setSlide] = useState(1);

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
    ];

    const deviceWidth = window.innerWidth;
    let [mySwiper, setMySwiper] = useState(null)

    useEffect(() => {
        if (deviceWidth > "500px" && deviceWidth < "800px") {
            setSlide(2);
        } else if (deviceWidth < "1500px") {
            setSlide(4);
        } else if (deviceWidth > "1500px") {
            setSlide(5.5);
        }
    }, [deviceWidth]);

    return (
        <Swiper
            spaceBetween={35}
            grabCursor={true}
            breakpoints={{
                0: {
                    slidesPerView: 1
                },
                600: {
                    slidesPerView: 2.5
                },
                991: {
                    slidesPerView: 4
                },
                1200: {
                    slidesPerView: 4.5
                },
                1500: {
                    slidesPerView: 5.5
                },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            observer={true}
            observeParents={true}
            shortSwipes={false}
            longSwipes={false}
            allowTouchMove={true}
            autoplay={{
                delay: 0.3
            }}
            freeMode={true}
            speed={2000}
        >
            {
                arrElement.map((nft, index) => (
                    <SwiperSlide key={index} className='wrapper-box'>
                        <div className={"image-box" + " " + nft.className}>
                            <img src={nft.img} alt="" className='image' />
                            <div className="content">
                                <a href="#">{nft.name}</a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default SlideNFT;