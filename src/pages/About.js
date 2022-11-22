import React, { useContext } from 'react';
import appContext from '../appContext';
import AaronNFT from '../assets/nfts/aaron.gif';
import TedNFT from '../assets/nfts/ted.gif';
import TomoNFT from '../assets/nfts/tomo.gif';
import CaleyNFT from '../assets/nfts/caley.gif';
import LamisNFT from '../assets/nfts/lamis.gif';
import AboutComponent from './components/About';

const AboutPage = () => {
    const { Element } = useContext(appContext);

    return (
        <AboutComponent />
    )
};

export default AboutPage;