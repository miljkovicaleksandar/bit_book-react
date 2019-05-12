import BASE_URL from './../shared/baseUrl';
import Person from '../entities/Person';
import {getUserToken} from './authService';
const USERS_URL = '/users/?_embed=posts';

const fetchUsers = () => {
    return fetch(`${BASE_URL}${USERS_URL}`,
        {
            headers: {
                "Content-Type": "application/ json",
                "x-api-key": "B1tD3V",
                'Authorization': getUserToken()
            }
        }).then(response => response.json())
        .then(response => response.map((user) => new Person(user)))
}


const fetchUser = (id) => {
    return fetch(`${BASE_URL}/users/${id}?_embed[]=comments&_embed[]=posts`, {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V",
            'Authorization': getUserToken()
        }
    })
        .then(response => {
            return response.json()
        })
        .then(user => {

            if (user.error) {
                throw user.message;
            }

            return new Person(user)
        })
}


const editProfile = (id, fullName, imageUrl, bio) => {

    const updateObject = {
        avatarUrl: imageUrl,
        name: {
            first: fullName,
        },
        about: {
            bio: bio,
        }
    }

    return fetch(`${BASE_URL}/users/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V",
            'Authorization': getUserToken()
        },
        body: JSON.stringify(updateObject)
    })
        .then(response => {
            return response.json()
        })
}

export  {fetchUsers,
        fetchUser,
        editProfile
        }