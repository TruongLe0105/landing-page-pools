import React from 'react'
import { images } from '../../assets/ExportImg';

const Partner = () => {
    const { VNG, RED, SOTATEK, TELKOM, SINGTEL, TWIINNING, EQBR } = images;

    return (
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
    )
}

export default Partner