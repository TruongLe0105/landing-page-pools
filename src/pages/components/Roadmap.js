import React, { useContext } from 'react';
import appContext from '../../appContext';

const Roadmap = () => {
    const { Element } = useContext(appContext);

    return (
        <Element name="roadmap" className="tf-section tf-roadmap" id="roadmap-content">
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
                                            <li>Completion of Main-net Development/Open-beta</li>
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
                                        </ul>
                                    </div>
                                </div>
                                <div className="rm-box style" data-aos="fade-left" data-aos-duration="1200">
                                    <div className="corner-box">
                                        <h5>Q2 2023</h5>
                                        <ul style={{ color: "#FFFFFF" }}>
                                            <li>2nd Pre-purchase Booking & NFT sales</li>
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
        </Element>
    )
};

export default Roadmap;