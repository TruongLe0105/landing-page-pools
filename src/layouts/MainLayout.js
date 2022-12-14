import React from 'react';
import { Outlet } from 'react-router-dom';

import MainFooter from './MainFooter';
import MainHeader from './MainHeader';
import PreloadLogo from './PreloadLogo';

function MainLayout() {
    return (
        <div style={{ minWidth: "100%" }}>
            <MainHeader />
            <Outlet />
            <PreloadLogo />
            <MainFooter />
        </div>
    )
}

export default MainLayout;