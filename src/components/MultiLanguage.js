import React, { useState } from 'react';


export const deleteCookies = () => {
    var allCookies = document.cookie.split(';');
    // The "expire" attribute of every cookie is 
    // Set to "Thu, 01 Jan 1970 00:00:00 GMT"
    for (var i = 0; i < allCookies.length; i++)
        document.cookie = allCookies[i] + "=;expires="
            + new Date(0).toUTCString();
};

export const translateLanguage = (language) => {
    deleteCookies();
    document.cookie = `googtrans=/en/${language};domain=.poolsplay.store`;
    window.location.reload();
};

const MultiLanguage = () => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(!open);
    }

    return (
        <div className="translate" id="container-language" onClick={openModal}>
            <div style={{ cursor: "pointer" }} className='notranslate'>LANGUAGE</div>
            <i className="far fa-solid fa-language"></i>
            {
                open && (
                    <div className="wrapper-languages" id="languages">
                        <div onClick={(e) => translateLanguage("vi")}>
                            Vietnam
                        </div>
                        <div onClick={(e) => translateLanguage("en")}>
                            English
                        </div>
                        <div onClick={(e) => translateLanguage("ko")}>
                            Korean
                        </div>
                    </div>
                )
            }
        </div>
    )
};

export default MultiLanguage;