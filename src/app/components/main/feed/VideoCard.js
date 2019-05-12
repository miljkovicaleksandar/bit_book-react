import React from 'react';
import { Link } from 'react-router-dom';
import { fetchSinglePostComment } from './../../../../services/commentService';
import { getAuthUserId } from './../../../../services/authService';

class VideoCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: []
        }
    }
    onLoadComments() {
        fetchSinglePostComment(this.props.post.id)
            .then((comments) => {
                this.setState({ comments: comments })
            })
    }

    componentDidMount() {
        this.onLoadComments();
    }
    render() {
        const { content, id, userId, avatarUrl } = this.props.post;
        return (
            <>
                <div className="row">
                    <div className="col s8 offset-s2 ">
                        <div className="card">
                            <div className="card-style white-text center">
                                <iframe width="100%" height="300" src={content} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="post-info">
                                <span className="valign-wrapper"><Link to={`/user/${userId}`}><img src={`${avatarUrl}`} className="circle profile-pic-post"/></Link><i className="fas fa-video valign-wrapper"></i> Video post</span>
                                {
                                    getAuthUserId() == userId ?
                                    <i className="fas fa-trash-alt" onClick={() => this.props.onDeletePosts(id)}></i>
                                        :
                                       ""
                                }
                                
                                <Link to={`/post/${id}`} className="post-link"><span className="right"><i className="far fa-comment"></i> {this.state.comments.length} Comments</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default VideoCard;