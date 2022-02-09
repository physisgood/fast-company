
const TOKEN_KEY = "jwt-token";
const REFRESH_KEY = "jwt-refresh-token";
const EXPIRES_KEY = "jwt-expires";
const REGISTERED_KEY = "registered-value";

export function setTokens({ refreshToken, idToken, expiresIn = 3600, registered }) {
    const expiresDate = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem(TOKEN_KEY, idToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
    localStorage.setItem(EXPIRES_KEY, expiresDate);
    localStorage.setItem(REGISTERED_KEY, registered);
}

export function getAccessToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function getRefreshToken() {
    return localStorage.getItem(REFRESH_KEY);
}

export function getTokenExpiresDate() {
    return localStorage.getItem(EXPIRES_KEY);
}

export function getRegistratedValue() {
    return localStorage.getItem(REGISTERED_KEY);
}

const localStorageService = {
    setTokens,
    getTokenExpiresDate,
    getAccessToken,
    getRefreshToken
};

export default localStorageService;
