import BASE_URL from './../shared/baseUrl'
import Comment from "./../entities/Comment";
import {getUserToken} from './../services/authService';
import {getAuthUserId} from './../services/authService';

const fetchComments = (postId) => {

    return fetch(`${BASE_URL}/comments?postId=${postId}&_expand=user`, {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V",
            'Authorization': getUserToken()
        }
    })
        .then((response) => response.json())
        .then((response) => {
            return response.map(comment => {
                if(!!comment.user){
                return new Comment(comment.userId, comment.body, comment.user.name.first, comment.user.avatarUrl, comment.id)
            }
                return new Comment (comment.userId, comment.body, "Anonymus",'https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg', comment.id )
            })
            
        });

};

 const fetchSinglePostComment = (postId) => {

    return fetch(`${BASE_URL}/comments?postId=${postId}`, {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V",
            'Authorization': getUserToken()
        }
    }) 
    .then((comments) => comments.json());
};

const createComment = (commentText, postId) => {

    const apiComment = {
        postId: postId,
        userId: getAuthUserId(),
        body: commentText,
        isPublic: true
    }

    return fetch(`${BASE_URL}/comments`, {
        method: 'POST',
        headers: {
            "x-api-key": "B1tD3V",
            "Content-Type": "application/json",
            'Authorization': getUserToken(),
        },
        body: JSON.stringify(apiComment)
    })

};

const deleteComment = (id) => {
    return fetch(`${BASE_URL}/comments/${id}`, {
        method: "DELETE",
        headers: {
            "x-api-key": "B1tD3V",
            "Content-Type": "application/json",
            "Authorization": getUserToken()
        },
    }).
        then(response => {
            return response;
        })

}



export {fetchComments,
        createComment,
        fetchSinglePostComment,
        deleteComment
        }