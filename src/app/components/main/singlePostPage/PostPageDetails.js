import React from "react";
import { fetchSinglePost } from "./../../../../services/postService";
import { fetchComments, createComment } from "./../../../../services/commentService";
import SinglePostItem from "./postDetails/SinglePostItem";
import {deleteComment} from "./../../../../services/commentService";


class PostPageDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      comments: [],
      commentValue: ""
    };
    this.onCreateComment = this.onCreateComment.bind(this);
    this.onChangeCommentValue = this.onChangeCommentValue.bind(this);
  }


  onLoadPosts() {
    const postId = this.props.match.params.id;
    fetchSinglePost(postId).then(post => {
      this.setState({
        post: post
      });
    });
  }

  onChangeCommentValue(e) {
    this.setState({ commentValue: e.target.value });
  }

  onLoadComments = () => {
    const postId = this.props.match.params.id;
    fetchComments(postId)
      .then(comments => {
        this.setState({
          comments: comments
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onCreateComment() {
    const postId = this.props.match.params.id;
    createComment(this.state.commentValue, postId).then(() => {
      this.onLoadComments();
      this.setState({
        commentValue: ""
      });
    });
  }



  onDeleteComment = (id) => {
    deleteComment(id).then(response => {
    })
    this.onLoadComments()
  }



  componentDidMount() {
    this.onLoadPosts();
    this.onLoadComments();
  }

  render() {
    if (!this.state.post) {
      return (
        <div className="sk-fading-circle">
          <div className="sk-circle1 sk-circle"></div>
          <div className="sk-circle2 sk-circle"></div>
          <div className="sk-circle3 sk-circle"></div>
          <div className="sk-circle4 sk-circle"></div>
          <div className="sk-circle5 sk-circle"></div>
          <div className="sk-circle6 sk-circle"></div>
          <div className="sk-circle7 sk-circle"></div>
          <div className="sk-circle8 sk-circle"></div>
          <div className="sk-circle9 sk-circle"></div>
          <div className="sk-circle10 sk-circle"></div>
          <div className="sk-circle11 sk-circle"></div>
          <div className="sk-circle12 sk-circle"></div>
        </div>)
    }

    return (
      <div className="padding-top">
        <SinglePostItem
          onCreateComment={this.onCreateComment}
          onChangeCommentValue={this.onChangeCommentValue}
          commentValue={this.state.commentValue}
          post={this.state.post}
          comments={this.state.comments}
          disabled={!this.state.commentValue.length}
          onDeleteComment={this.onDeleteComment}
        />
      </div>
    );
  }
}

export default PostPageDetails;
