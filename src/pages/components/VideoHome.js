import React, { useContext } from 'react';

import appContext from '../../appContext';
import video from '../../assets/images/common/NFT-item/Web_Landingpage_Texture_1.mp4';

const VideoHome = () => {
    const { Element } = useContext(appContext);

    return (
        <div id="wrapper">
            <Element name="home" className="pb-mobie" id="hero">
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
                                <p className="sub_title_fix">Join the Pools Phone NFT take advantage of winning FREE Pools Phone and other financial benefits.</p>
                                <div className="button_home">
                                    <a href="nft-roulette.html" className="button_home_item tf-button-st2 btn-effect"
                                        style={{ marginRight: "5%" }}><span className="effect">draw nft</span></a>
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
            </Element>
        </div>
    )
}

export default VideoHome