import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import CommunityPage from '../pages/Community';
import InformationPage from '../pages/Information';
import HomePage from '../pages/Home';
import DrawNFTPage from '../pages/DrawNFT';
import AboutPage from '../pages/About';
import RoadmapPage from '../pages/Roadmap';
import FAQsPage from '../pages/FAQs';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/information" element={<InformationPage />} />
                <Route path="/draw-nft" element={<DrawNFTPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/roadmap" element={<RoadmapPage />} />
                <Route path="/faqs" element={<FAQsPage />} />
            </Route>
        </Routes>
    )
}

export default Router;