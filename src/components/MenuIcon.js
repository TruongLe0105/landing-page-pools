import React from 'react';

const MenuIcon = ({ isOpenSideBar, onClick }) => {
    return (
        <div id={`nav-hambuger`} className={isOpenSideBar ? 'open' : ''} onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default MenuIcon;