import React from "react";

const SingleVideoPost = (props) => {
    return (
        <>
            <div className="row">
                <div className="col s8 offset-s2">
                    <iframe width="100%" height="300" src={props.post.content} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </>
    )
}

export default SingleVideoPost;
