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

export const deleteCookie = (name) => {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

export const setCookie = (name, value, exp) => {
    let date = new Date();
    date.setTime(date.getTime() + (exp * 60 * 60 * 1000));

    let expires = "expires=" + date.toUTCString();

    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}