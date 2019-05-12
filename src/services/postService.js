import BASE_URL from "./../shared/baseUrl";
import Post from '../entities/Post';
import { getUserToken } from './authService';

const POST_URL = '/posts?_embed=comments&_expand=user';


const createPost = (body) => {
    return fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: {
            "x-api-key": "B1tD3V",
            "Content-Type": "application/json",
            'Authorization': getUserToken()
        },
        body: JSON.stringify(body)
    })
}

const fetchPosts = () => {
    return fetch(`${BASE_URL}${POST_URL}`, {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V",
            'Authorization': getUserToken()
        }

    })
        .then((response) => response.json())
        .then((response) => {
            return response.map((post) => new Post (post)).reverse()
        })

}

const fetchSinglePost = (id) => {

    return fetch(`${BASE_URL}/posts/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V",
            'Authorization': getUserToken()
        }
    })
        .then((response) => response.json())
        .then((post) => new Post (post))
}
const deletePost = (id) => {

    return fetch(`${BASE_URL}/posts/${id}`, {
        method: "DELETE",
        headers: {
            "x-api-key": "B1tD3V",
            "Content-Type": "application/json",
            "Authorization": getUserToken()
        },
    })
        .then(response => {
            return response;
        })
}


export {
    createPost,
    fetchPosts,
    fetchSinglePost,
    deletePost
}