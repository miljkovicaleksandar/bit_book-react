import React from 'react';
import { Link } from "react-router-dom";
import { getAuthUserId } from './../../../../../services/authService';

const SingleComment = (props) => {

    return (
        <ul className="collection">
            <li className="collection-item avatar">
                <Link to={`/user/${props.comment.userId}`}><img src={props.comment.avatarUrl} alt="" className="circle" /></Link>
                <Link to={`/user/${props.comment.userId}`}> <span className="title"><b>{props.comment.name}</b></span></Link>
                {
                    getAuthUserId() == props.comment.userId ?
                        <p>{props.comment.body} <i class="fas fa-trash-alt right" onClick={() => props.onDeleteComment(props.comment.id)}></i></p> 
                        : 
                        <p>{props.comment.body} </p>
                }

            </li>

        </ul>
    )
}


export default SingleComment;




