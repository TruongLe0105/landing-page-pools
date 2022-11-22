import React, { useState } from 'react';
import video from '../assets/videos/poolsPhoneGuide.mp4'
import ModalPDF from '../components/ModalPDF';

function CommunityPage() {
  const [openModal, setOpenModal] = useState();

  return (
    <>
      <section className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumbs" data-aos="zoom-in" data-aos-duration="800">
                <h3 style={{ letterSpacing: "0.3rem" }}>HOW TO DRAW</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-video pb-mobie" style={{ overflowY: "hidden" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-about m-b51 mobie-40">
                <div className="tf-title pd22" data-aos="fade-up" data-aos-duration="800">
                  <p className="title-community">BUY CORK, DRAW THE POOLS PHONE NFT AND GET YOUR DESTINED NFT</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="video" data-aos="fade-up" data-aos-duration="800">
              <div className="video_intro">
                <video
                  className="video_intro_item"
                  autoPlay
                  controls
                  src={video}
                  muted
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-about pb-mobie" style={{ overflowY: "hidden" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 d-flex">
              <div className="wrap-about" data-aos="fade-up" data-aos-duration="800">
                <div className="box-text corner-box box-community">
                  <div className="num_community">01</div>
                  <div className="h7">Register and purchase tokens</div>
                  <p>
                    The minting participants need to purchase at least 10 CORK
                    tokens from the Winery Swap Dex Exchange and send them to
                    their Metamask.
                  </p>
                </div>

              </div>
            </div>
            <div className="col-md-6 col-lg-6 d-flex">
              <div className="wrap-about" data-aos="fade-up" data-aos-duration="800">
                <div className="box-text corner-box box-community">
                  <div className="num_community">02</div>
                  <div className="h7">Draw A Random NFT In Pools Phone NFT</div>
                  <p className="fix_height_top">You can draw a card from any class in Pools Phone NFT. Every
                    draw
                    costs 10 CORK.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 d-flex">
              <div className="wrap-about" data-aos="fade-up" data-aos-duration="800">
                <div className="box-text corner-box box-community">
                  <div className="num_community">03</div>
                  <div className="h7">Purchase The Desired NFT</div>
                  <p>When a new card is issued, participants can purchase it by clicking on
                    "Own This NFT" or "Draw Again" if they don't like that card and want to
                    draw a new one.Note: The "Draw Again" action will cost another 10 CORK,
                    and the current NFT cannot be restored.
                  </p>
                </div>

              </div>
            </div>

            <div className="col-md-6 col-lg-6 d-flex">
              <div className="wrap-about" data-aos="fade-up" data-aos-duration="800">
                <div className="box-text corner-box box-community">
                  <div className="num_community">04</div>
                  <div className="h7">Own NFT</div>
                  <p className="fix_height_bottom">Participants can view transaction history by clicking the
                    "History" button after purchasing the NFT.
                  </p>
                </div>
              </div>
            </div>
            <div className="button_home_community">
              <a href="https://winery.finance/amm/#/trade/swap?inputCurrency=0x98649fde88981790b574c9A6066004D5170Bf3EF&outputCurrency=0x51151b5C321c584d26C0DEeD57ee9de8e40A03A9"
                target="_blank" className="button_home_item button_home_item_community tf-button-st2 btn-effect"
                style={{ marginRight: "1%" }} rel="noreferrer"><span className="effect">BUY CORK</span></a>
              <div
                className="button_home_item button_home_item_community tf-button btn-effect"
                id="instruction-under"
                onClick={() => setOpenModal(true)}
              >
                <span className="effect">INSTRUCTION PDF FILE</span>
              </div>
            </div>
          </div>
        </div>
        {
          openModal && <ModalPDF setOpenModal={setOpenModal} />
        }
      </section>
    </>
  )
}

export default CommunityPage;