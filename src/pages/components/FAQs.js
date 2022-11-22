import React, { useContext, useState } from 'react';
import appContext from '../../appContext';

const Q_A = [
    {
        title: "How Can I Get Started With Pools Phone NFT?",
        description: "Please visit our Pools Phone NFT Tutorial",
        link: "https://phone.poolsplay.store/community.html"
    },
    {
        title: "Can I Purchase More Than One NFT?",
        description: "Each user can draw as many times as they wish, but they can only buy one NFT."
    },
    {
        title: "What Benefits Does Pools Phone NFT Provide To NFT Owners?",
        description: "Users can view their Pools Phone NFT benefit offer",
        link: "https://phone.poolsplay.store/nft-information.html"
    },
    {
        title: "Can I Change The NFT Once I've Drawn It?",
        description: "You certainly can. Users can draw again and again until they select their favorite one by clicking the 'Draw Again' button. Please keep in mind that each additional draw will cost 10 CORK."
    },
    {
        title: "In Pools Phone NFT, How Many NFT Classes Are There?",
        description: "Pools Phone NFT features five classes, each with its own set of benefits."
    },
    {
        title: "Where Can I Buy CORK To Participate In Pools Phone NFT?",
        description: "CORK can be swapped on Winery Swap. Click HERE to swap",
        link: "https://winery.finance/amm/#/trade/swap?inputCurrency=ETH&outputCurrency=0xe7EAdA32CAF827d3bA8Cb1074830d803C9bD48c3"
    },
];

const FAQs = () => {
    const [currActive, setActive] = useState(0);
    const { Element } = useContext(appContext);

    const handleClick = (index) => {
        setTimeout(() => {
            setActive(index);
        }, 100);
    }

    return (
        <Element name="FAQs" className="flat-accordion" id="FAQs">
            <div className="container px-120">
                <div>
                    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                        <div className="title-QA">Q&A</div>
                        {Q_A.map((box, index) => (
                            <div
                                key={index}
                                className={`flat-toggle + box-text corner-box qa-container ${currActive === index && "active"}`}
                                onClick={() => handleClick(index)}
                            >
                                <div className="h7 toggle-title">{box.title}</div>
                                <p className="toggle-content"
                                    style={{
                                        display: currActive === index && "block"
                                    }}>
                                    {box.description}
                                    {
                                        box.link && (
                                            <a className="link-navigate" target="_blank"
                                                href="https://phone.poolsplay.store/community.html" rel="noreferrer">HERE.</a>
                                        )
                                    }
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default FAQs;