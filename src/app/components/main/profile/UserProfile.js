import React from 'react';


const UserProfile = (props) => {
    const {photo, comments, firstName, lastName, description, posts, job } = props.user;
    return (
        <div className="singleUser ">
            <div className="center" style={{ marginTop: " 150px" }}>
                <img src={photo} alt="..." />
                <h4>
                    {firstName} {lastName}
                </h4>
                <p>
                    <b>Bio: </b> {description}
                </p>
                <p>
                    <b>Job: </b>
                    {job}
                </p>
                <div className="postComments">
                    <div className="chip">
                        <div className="lg-chip-icon">C</div>
                        {posts.length} Posts
                    </div>
                    <div className="chip">
                        <div className="lg-chip-icon">C</div>
                        {comments.length} Comments
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UserProfile;
