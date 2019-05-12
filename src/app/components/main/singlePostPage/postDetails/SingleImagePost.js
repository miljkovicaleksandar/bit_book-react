import React from "react";

const SingleImagePost = (props) => {
    return (
        <>
            <div className="row">
                <div className="col s8 offset-s2">
                    <div className="card post-bg-color">
                        <div className="card-style">
                            <img alt="post-desc" src={props.post.content} className="postImg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleImagePost;