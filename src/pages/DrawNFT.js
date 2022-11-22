import React from 'react';
import { images } from '../assets/ExportImg';
import video from '../assets/videos/poolsPhoneGuide.mp4';
import FAQs from './components/FAQs';

const DrawNFTPage = () => {
    const { GUIDEIMG, GUIDEBTN } = images;

    return (
        <div className="hero_imation">
            <div className="container_imation">
                <div className="title_imation">
                    <h1 className="title">Pools Phone NFT</h1>
                    <h3 className="title_item_imation">SEEKING FOR YOUR POOLS PHONE DESTINED NFT
                    </h3>
                    <span className="description">POOLS PHONE NFT is one of the most effective ways to own our phone and earn
                        significant special benefits. Participants can win the rarest NFT from a special collection only
                        offered on POOLS for ONLY 10 CORK.
                    </span>

                    <div className="button_imation">
                        <span className="desription_button_imation">Buy CORK, press DRAW NFT and get your destined Pools Phone
                            NFT now!</span>
                        <div className="button_home_imation">
                            <a href="https://winery.finance/amm/#/trade/swap?inputCurrency=0x98649fde88981790b574c9A6066004D5170Bf3EF&outputCurrency=0x51151b5C321c584d26C0DEeD57ee9de8e40A03A9"
                                target="_blank" className="button_home_item button_home_item_imation tf-button-st2 btn-effect"
                                style={{ marginRight: "1%" }} rel="noreferrer"><span className="effect effect_fix_imation">BUY CORK</span></a>
                            <a href="/poolsphonenft"
                                className="button_home_item button_home_item_imation tf-button btn-effect fix_button_width">
                                <span className="boder-fade"></span>
                                <span id="draw-nft-text" className="effect effect_fix_imation">draw nft <br /> (10 cork/
                                    draw)</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="img_right_item">
                    <img src={GUIDEIMG} alt="" />
                    <a className="popup-youtube fix_image_imation_bottom" href={video}>
                        <img className="image_imation_bottom_item"
                            src={GUIDEBTN} alt="" />
                    </a>
                </div>
            </div>

            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
                aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="custom_popup">
                                <img className="img_popup" src="./assets/images/common/NFT-item/popup.png" alt="" />
                                <h5 className="modal-title" id="exampleModalLongTitle">MAINTENANCE</h5>
                            </div>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ul className="list_poppup">
                                <li className="list_popup_item">Pools Phone NFT is under maintenance</li>
                                <li className="list_popup_item">We apologize for this inconvenience</li>
                                <li className="list_popup_item">and thank you for your understanding.</li>
                                <li className="list_popup_item">Please stay tuned for the return of Pools Phone NFT</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <FAQs />
        </div>
    )
};

export default DrawNFTPage;