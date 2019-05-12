import React from "react";
import SingleVideoPost from "./SingleVideoPost";
import SingleImagePost from "./SingleImagePost";
import SingleTextPost from "./SingleTextPost";
import SingleComment from "./SingleComment";

const SinglePostItem = props => {
  const postItem = () => {
    if (props.post.type === "video") {
      return <SingleVideoPost post={props.post} />;
    } else if (props.post.type === "image") {
      return <SingleImagePost post={props.post} />;
    } else {
      return <SingleTextPost post={props.post} />;
    }
  };

  return (
    <>
      {postItem()}
      <form>
        <div className="row">
          <div className="input-field col s12">
            <textarea
              onChange={props.onChangeCommentValue}
              value={props.commentValue}
              id="textarea2"
              className="materialize-textarea"
              data-length="120"
            />
            <label htmlFor="textarea2" />
            <button
              onClick={props.onCreateComment}
              className="right btn"
              disabled={props.disabled}
            >
              Post Comment
            </button>
          </div>
        </div>
      </form>

      {!props.comments.length ? (
        <h1 className="center">No comments</h1>
      ) : (
          props.comments.map(comment => {
            return <SingleComment comment={comment} key={comment.id} onDeleteComment={props.onDeleteComment} />;
          })
        )}
    </>
  );
};

export default SinglePostItem;
