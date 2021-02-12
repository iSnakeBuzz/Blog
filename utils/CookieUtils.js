import Cookies from 'universal-cookie';

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
    const cookies = new Cookies();
    cookies.remove(name, { expires: new Date() })
}

export const setCookie = (name, value) => {
    const cookies = new Cookies();
    cookies.set(name, value, {})
}