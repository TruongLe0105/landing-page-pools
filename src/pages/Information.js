import React from 'react';
import { images } from '../assets/ExportImg';

const InformationPage = () => {
    const { TABLE, HAND, SUPPLY, WALLET, GIFT, TEAM } = images;
    return (
        <>
            <div id="wrapper">
                <div className="hero">
                    <div className="wrap_box wrap_box_rps">
                        <div className="content_hero content_hero_rps">
                            <p className="title_information title_rps">Probability & quantity</p>
                            <p className="desc">The probability of randomizing one of five NFTs in the Pools Phone NFT Collection is
                                shown in this table below. </p>
                        </div>
                        <div className="table_hero table_hero_rps">
                            <img src={TABLE} alt="data" />
                        </div>
                    </div>
                </div>
            </div>
            <section id="block_data_release">
                <div className="wrap_data_release row">
                    <div className="col-md-12">
                        <p className="title_data_release">Every POOLS Phone NFT holder get a free POOLS Phone upon release,
                            regardless of the NFT card class
                        </p>
                    </div>
                    <div className="img_table mt-3">
                        <div className="table_content" style={{ minWidth: "1431px" }}>
                            <div className="column">
                                <div className="row"> class</div>
                                <div className="row"> class D</div>
                                <div className="row"> class C</div>
                                <div className="row"> class B</div>
                                <div className="row"> class A</div>
                                <div className="row"> class S</div>
                            </div>
                            <div className="column">
                                <div className="row">Free phone include</div>
                                <div className="row">1 phone </div>
                                <div className="row">1 phone </div>
                                <div className="row">1 phone </div>
                                <div className="row">1 phone </div>
                                <div className="row">1 phone </div>
                            </div>
                            <div className="column">
                                <div className="row">NFT Discount Rate</div>
                                <div className="row">10% <br /> $ 450</div>
                                <div className="row">20% <br /> $ 400</div>
                                <div className="row">30% <br /> $ 350</div>
                                <div className="row">40% <br /> $ 300</div>
                                <div className="row">50% <br /> $ 250</div>
                            </div>
                            <div className="column">
                                <div className="row">Phone Sale Reward</div>
                                <div className="row">1 % of total sales (NFT class Group 1/n)</div>
                                <div className="row">2 % of total sales (NFT class Group 1/n)</div>
                                <div className="row">3 % of total sales (NFT class Group 1/n)</div>
                                <div className="row">4 % of total sales (NFT class Group 1/n)</div>
                                <div className="row">5 % of total sales (NFT class Group 1/n)</div>
                            </div>
                            <div className="column">
                                <div className="row">App Store Revenue Reward</div>
                                <div className="row">14% of total store sales <br /> 10% (NFT class Group 1/n)</div>
                                <div className="row">14% of total store sales <br /> 15% (NFT class Group 1/n)</div>
                                <div className="row">14% of total store sales <br /> 20% (NFT class Group 1/n)</div>
                                <div className="row">14% of total store sales <br /> 25% (NFT class Group 1/n)</div>
                                <div className="row">14% of total store sales <br /> 30% (NFT class Group 1/n)</div>
                            </div>
                            <div className="column">
                                <div className="row">Phone Purchase Referral Reward</div>
                                <div className="row">6% of total referral purchases</div>
                                <div className="row">7% of total referral purchases</div>
                                <div className="row">8% of total referral purchases</div>
                                <div className="row">9% of total referral purchases</div>
                                <div className="row">10% of total referral purchases</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tf-section tf-member_benefit pb-mobie-40">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-title tf-mg4 rps_fix" data-aos="fade-up" data-aos-duration="800">
                                <h4 className="title title_member_rps">NFT Member Benefits</h4>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row mt-5 tf-mg4">
                                <div className="col-1">
                                    <img src={HAND} alt="" />
                                </div>
                                <div className="col-11">
                                    <p className="intro-desc">Free supply of 1 phone for the first time</p>
                                    <p>Holders of POOLS Phone NFT will receive one POOLS Phone free of charge when it is
                                        released from May to July 2023.</p>
                                </div>
                            </div>
                            <div className="row mt-5 tf-mg4">
                                <div className="col-1">
                                    <img src={SUPPLY} alt="" />
                                </div>
                                <div className="col-11">
                                    <p className="intro-desc">NFT Purchase Discount </p>
                                    <p>When purchasing through Pools Phone NFT, participants receive five Classes of
                                        differential
                                        discounts. (10~50%)</p>
                                </div>
                            </div>
                            <div className="row mt-5 tf-mg4">
                                <div className="col-1">
                                    <img src={GIFT} alt="" />
                                </div>
                                <div className="col-11">
                                    <p className="intro-desc">POOLS Phone Sales Reward </p>
                                    <p>During the POOLS Phone sale, holders of 10,000 NFTs receive a sales dividend. When a
                                        POOLS Phone NFT card is transferred the cardholder's dividend is lost, and this dividend
                                        is distributed to the person who received the transfer. </p>
                                </div>
                            </div>
                            <div className="row mt-5 tf-mg4">
                                <div className="col-1">
                                    <img src={WALLET} alt="" />
                                </div>
                                <div className="col-11">
                                    <p className="intro-desc">POOLS Phone App Store Revenue Reward</p>
                                    <p>POOLS Phone automatically compensates a portion of the revenue generated by the POOLS App
                                        store. The compensation ratio is applied differently depending on the NFT class. </p>
                                </div>
                            </div>
                            <div className="row mt-5 tf-mg4 mb-5">
                                <div className="col-1">
                                    <img src={TEAM} alt="" />
                                </div>
                                <div className="col-11">
                                    <p className="intro-desc">Phone Purchase Referral Reward</p>
                                    <p>NFT holders are given a referral code from the POOLS Phone pre-sale site and will receive
                                        a portion of the sales incentives when someone uses their code to make a purchase. The
                                        incentives, however, differ depending on he class.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default InformationPage;