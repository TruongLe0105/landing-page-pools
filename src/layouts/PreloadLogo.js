import React, { useEffect } from 'react'

const PreloadLogo = () => {
    useEffect(() => {
        const preload = document.getElementById("preload");
        setTimeout(() => {
            preload.style.display = "none";
        }, 1000);
    }, []);

    return (
        <div className="preload preload-container" id="preload">
            <div className="preload-logo"></div>
        </div>
    )
}

export default PreloadLogo