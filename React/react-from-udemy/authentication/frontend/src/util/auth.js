import { redirect } from "react-router-dom";

export const getTokenDuartion = () => {
    const expiration = localStorage.getItem('expiration');
    const expirationDate = new Date(expiration);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
};

export const getAuthToken = () => {
    const token = localStorage.getItem('token');
    if(!token){
        return null;
    }
    const tokenDuration = getTokenDuartion();
    if(tokenDuration < 0){
        return 'EXPIRED';
    }
    return token;
};

export const tokenLoader = () => {
    return getAuthToken();
}

export const checkAuthLoader = () => {
    const token = getAuthToken();
    if(!token){
        return redirect('/auth');
    }
    return null;
};