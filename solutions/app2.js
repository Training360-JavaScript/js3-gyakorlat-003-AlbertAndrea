'use strict'

const setCookie = (name, value) => {
    const now = new Date();
    now.setTime(now.getTime() + (15 * 60 * 1000));
    const expires = now.toUTCString();
    document.cookie = `${name} = ${value}; expires = ${expires}`;
}

setCookie('viewed', '5');
setCookie('uid', '354774631237');
setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF');

const cookieHandler = {
    getAll(){
        let getCookieNames = {};
        document.cookie.split('; ')
            .forEach(item => getCookieNames[item.split('=')[0]] = item.split('=')[1]);
        return getCookieNames;
    },

    toSessionStorage() {
        document.cookie.split('; ')
            .forEach(item => sessionStorage.setItem(item.split('=')[0], item.split('=')[1]))
    },

    flush() {
        const deletCookie = document.cookie.split('; ');
        for (let i = 0; i < deletCookie.length; i++) {
            document.cookie = `${deletCookie[i]} =; expires = Thu, 01 Jan 1970 00:00:00 UTC;`

        }
    }
}

export { cookieHandler };

