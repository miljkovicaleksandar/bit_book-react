import React from "react";

const SingleTextPost = (props) => {
    return (
        <>
            <div className="row">
                <div className="col s8 offset-s2">
                    <div className="card post-bg-color">
                        <div className="card-content">
                            <p>{props.post.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleTextPost;