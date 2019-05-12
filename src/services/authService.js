import BASE_URL from "./../shared/baseUrl";
import jwt_decode from 'jwt-decode';


const fetchLogin = (body) => {
    return fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V",
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())

}

const loginUser = token => localStorage.setItem("key", token);

const fetchRegister = (body) => {
    return fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V",
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())

}

const isAuth = () => {
    return !!localStorage.getItem('key')
}

const getAuthUserId = () => {
    const token = localStorage.getItem('key');
    const user = jwt_decode(token);

    return user.id;  //vraca user id iz tokena
}
const getUserToken = () => {
    return `Bearer ${localStorage.getItem("key")}`;
}

export {
    fetchRegister,
    fetchLogin,
    isAuth,
    getAuthUserId,
    getUserToken,
    loginUser
} 
