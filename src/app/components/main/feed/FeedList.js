import React from 'react'
import VideoCard from './VideoCard';
import ImageCard from './ImageCard';
import TextCard from './TextCard';

const FeedList = (props) => {
    const postsJSX = props.posts.map((post) => {
        if (post.type === 'video') {
            return <VideoCard post={post} key={post.id} onDeletePosts={props.onDeletePosts} />
        } else if (post.type === "image") {
            return <ImageCard post={post} key={post.id} onDeletePosts={props.onDeletePosts} />
        } else {
            return <TextCard post={post} key={post.id} onDeletePosts={props.onDeletePosts} />
        }

    })

    return (

        <div className="row">
            {postsJSX}
        </div>

    );
}

export default FeedList;