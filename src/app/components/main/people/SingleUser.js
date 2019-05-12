import React from 'react';
import { Link } from "react-router-dom";

const SingleUser = (props) => {
    const { description, firstName, lastName, photo, postTime, id } = props;
    return (
        <li className="collection-item avatar">
            <Link to={`/user/${id}`}><img src={photo} alt="" className="circle" /></Link>
            <Link to={`/user/${id}`}><span className="title"><strong>{firstName} {lastName}</strong></span></Link>
            <p>{description}</p>
            <p className="secondary-content"><i className="material-icons">{postTime != "No posts to display" ? new Date(postTime).toLocaleDateString() : "No posts to display"}</i></p>
        </li>
    )
}


export default SingleUser;