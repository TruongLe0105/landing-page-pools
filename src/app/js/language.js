const modal = document.getElementById("container-language");
const modalMobile = document.getElementById("mobile-language");

const language = document.getElementById("languages");
const languageMobile = document.getElementById("mobile");

const VIETNAM = document.getElementById("VIETNAM");
const ENGLISH = document.getElementById("ENGLISH");
const KOREAN = document.getElementById("KOREAN");

const VN_Mobile = document.getElementById("VNMOBILE");
const EN_Mobile = document.getElementById("ENMOBILE");
const KO_mobile = document.getElementById("KOMOBILE");

function deleteCookies() {
    var allCookies = document.cookie.split(';');

    // The "expire" attribute of every cookie is 
    // Set to "Thu, 01 Jan 1970 00:00:00 GMT"
    for (var i = 0; i < allCookies.length; i++)
        document.cookie = allCookies[i] + "=;expires="
            + new Date(0).toUTCString();
}

document.addEventListener("click", (event) => {
    const clickInside = modal.contains(event.target);

    if (!clickInside) {
        language.classList.remove("show-modal");
    }
})

document.addEventListener("click", (event) => {
    const clickInside = modalMobile.contains(event.target);

    if (!clickInside) {
        languageMobile.classList.remove("show-modal");
    }
})

modal.addEventListener("click", () => {
    language.classList.add("show-modal");
})

modalMobile.addEventListener("click", () => {
    languageMobile.classList.add("show-modal");
})

VIETNAM.addEventListener("click", () => {
    deleteCookies();
    document.cookie = "googtrans=/en/vi;domain=.poolsplay.store";
    window.location.reload();
})

ENGLISH.addEventListener("click", () => {
    deleteCookies();
    document.cookie = "googtrans=/en/en;domain=.poolsplay.store";
    window.location.reload();
})

KOREAN.addEventListener("click", () => {
    deleteCookies();
    document.cookie = "googtrans=/en/ko;domain=.poolsplay.store";
    window.location.reload();
})

VN_Mobile.addEventListener("click", () => {
    deleteCookies();
    document.cookie = "googtrans=/en/vi;domain=.poolsplay.store";
    window.location.reload();
})

EN_Mobile.addEventListener("click", () => {
    deleteCookies();
    document.cookie = "googtrans=/en/en;domain=.poolsplay.store";
    window.location.reload();
})

KO_mobile.addEventListener("click", () => {
    deleteCookies();
    document.cookie = "googtrans=/en/ko;domain=.poolsplay.store";
    window.location.reload();
})
