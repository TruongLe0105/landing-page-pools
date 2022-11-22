import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const MultiLanguage = () => {
    const [open, setOpen] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

    const deleteCookies = () => {
        var allCookies = document.cookie.split(';');
        // The "expire" attribute of every cookie is 
        // Set to "Thu, 01 Jan 1970 00:00:00 GMT"
        for (var i = 0; i < allCookies.length; i++)
            document.cookie = allCookies[i] + "=;expires="
                + new Date(0).toUTCString();
    };

    const translateLanguage = (e, language) => {
        // e.stopPropagation();
        // deleteCookies();
        // document.cookie = `googtrans=/en/${language};domain=.poolsplay.store`;
        setCookie('googtrans', `/en/${language}`)
        // setCookie(language);
        window.location.reload();
    };

    const openModal = () => {
        setOpen(!open);
    }

    useEffect(() => {
        console.log(cookies)
    }, [cookies]);

    return (
        <div className="translate" id="container-language" onClick={openModal}>
            <span>TRANSLATE</span>
            <i className="far fa-solid fa-language"></i>
            {
                open && (
                    <div className="wrapper-languages" id="languages">
                        <div id="VIETNAM" onClick={(e) => translateLanguage(e, "vi")}>
                            Vietnam
                        </div>
                        <div id="ENGLISH" onClick={(e) => translateLanguage(e, "en")}>
                            English
                        </div>
                        <div id="KOREAN" onClick={(e) => translateLanguage(e, "ko")}>
                            Korean
                        </div>
                    </div>
                )
            }
        </div>
    )
};

export default MultiLanguage;