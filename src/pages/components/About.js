import React, { useContext } from 'react';
import appContext from '../../appContext';

import { NFTs } from '../../assets/ExportImg';

const AboutComponent = () => {
    const { Element } = useContext(appContext);
    const {
        AaronNFT,
        TedNFT,
        TomoNFT,
        CaleyNFT,
        LamisNFT
    } = NFTs;

    return (
        <Element name="about" className="tf-section tf-about pb-mobie" id="content-about">
            <div className="ab-home">
                <div className="tf-title st2 align-center">
                    <p className="tt-about">About POOLS Phone Project</p>
                    <span className='text-project'>A project created with users</span>
                    <h6 className=" title_about" style={{ color: "#6CFFCA" }}>"You are the maker of POOLS Phone"</h6>
                </div>
                <div className="image-group">
                    <div className="relative lamis">
                        <img alt="img" src={LamisNFT} className="nft-img" />
                    </div>
                    <div className="relative caley">
                        <img alt="img" src={CaleyNFT} className="nft-img" />
                    </div>
                    <div className="relative aaron">
                        <img alt="img" src={AaronNFT} className="nft-img" />
                    </div>
                    <div className="relative tomo">
                        <img alt="img" src={TomoNFT} className="nft-img" />
                    </div>
                    <div className="relative ted">
                        <img alt="img" src={TedNFT} className="nft-img" />
                    </div>
                </div>
                <p className="description_homePage">Be the owner of POOLS Phone
                    <br />Waiting for 10,000 POOLS NFT holders
                    with a first-come, <br /> first-served basis.
                </p>
                {/* </p> */}
                <a className="tf-button st2 btn-effect" href="/NFT-roulette">
                    <span className="boder-fade"></span>
                    <span className="effect">GET POOLS PHONE NFT</span>
                </a>
            </div>
        </Element>
    )
};

export default AboutComponent;