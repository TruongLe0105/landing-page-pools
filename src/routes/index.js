import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import CommunityPage from '../pages/Community';
import HomePage from '../pages/Home';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/community" element={<CommunityPage />} />
            </Route>
        </Routes>
    )
}

export default Router;