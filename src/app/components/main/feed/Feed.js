import React from 'react';
import { fetchPosts } from '../../../../services/postService';
import FeedList from '../feed/FeedList';
import { deletePost } from "./../../../../services/postService";
import NewPost from "./NewPost";
import FilterButton from "./FilterButton";
import Loader from '././../../Loader';

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            postType: ""
        }
    }


    filterPosts = (postType) => {
        this.setState({
            postType: postType
        })
    }


    onLoadPosts = () => {
        fetchPosts()
            .then((fetchedPosts) => {
                this.setState({ posts: fetchedPosts });
                console.log("*************************");
            })
    }

    onDeletePosts = (id) => {
        deletePost(id)
        this.onLoadPosts();
    }



    componentDidMount() {
        this.onLoadPosts();
    }

    render() {
        if (!this.state.posts.length) {
            return <Loader/>
        }

        const filteredPosts = this.state.posts.filter((post) => {
            return post.type.includes(this.state.postType);
        })
        console.log(filteredPosts)
        return (
            <>

                <FilterButton filterPosts={this.filterPosts} isModalVisible={this.state.isModalVisible} />
                <div className="padding-top" >
                    <FeedList posts={filteredPosts} className="post-container" onDeletePosts={this.onDeletePosts} />
                    <NewPost onReload={this.onLoadPosts} />
                </div>

            </>
        );

    }
}

export default Feed;


