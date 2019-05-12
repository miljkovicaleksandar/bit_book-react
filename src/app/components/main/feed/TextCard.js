import React from 'react';
import { Link } from 'react-router-dom';
import { fetchSinglePostComment } from './../../../../services/commentService';
import {getAuthUserId} from './../../../../services/authService';

class TextCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: []
        }
    }

    onLoadComments () {
        fetchSinglePostComment(this.props.post.id)
        .then((comments) => {
            this.setState({comments:comments})
        })
    }

    componentDidMount(){
        this.onLoadComments();
    }

    render() {
        const {content, id, userId, avatarUrl } = this.props.post;
        console.log(this.props.post)
        return (
            <>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <div className="card">
                            <div className="card-content">
                                <p>{content}</p>
                            </div>
                            <div className=" post-info">
                                <span className="valign-wrapper"><Link to={`/user/${userId}`}><img src={`${avatarUrl}`} className="circle profile-pic-post"/></Link><i className="fas fa-file-alt valign-wrapper"></i> Text post</span>
                                {
                                    getAuthUserId() == userId ?
                                    <i className="fas fa-trash-alt" onClick={() => this.props.onDeletePosts(id)}></i>
                                        :
                                       ""
                                }
                                <Link to={`/post/${id}`}><span className="right post-link"><i className="far fa-comment"></i> {this.state.comments.length} Comments</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default TextCard;