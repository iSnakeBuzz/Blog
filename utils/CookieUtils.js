export const parseCookie = (cookies) => {
    var jCookies = {};

    /* Separating each cookie */
    cookies.split(/\s*;\s*/).forEach((cookie) => {
        /* Getting key and value */
        let pair = cookie.split(/\s*=\s*/);
        jCookies[pair[0]] = pair.splice(1).join('=');
    });

    return jCookies;
}