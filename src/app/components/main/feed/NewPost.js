import React, { Component } from "react";
import {createPost} from "./../../../../services/postService";
import M from "materialize-css";
import { Modal } from "react-materialize";
import PostForm from "./../feed/PostForm";

class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postType: '',
            text: "",
            imageUrl: "",
            videoUrl: "",
            modalVisible: false
        }
    }

    componentDidMount() {
        const createModals = document.querySelectorAll(".modal");
        this.instances = M.Modal.init(createModals)

        const actionButton = document.querySelectorAll('.fixed-action-btn');
        const instancesOfActionButton = M.FloatingActionButton.init(actionButton, {
            direction: "top",
        });
    }


    onCreateText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onPostText = () => {
        const body = {
            type: 'text',
            text: this.state.text,
            isPublic: true
        }
        createPost(body)
            .then(() => {
                this.setState({
                    text: "",

                })
                this.props.onReload();
            })
        this.modalToggle()
    }

    onChangePostText = () => {
        this.setState(prevState => {
            return {
                postType: "text",
                modalVisible: !prevState.modalVisible
            }
        })
        const $button = document.querySelector(".waves-effect");
        $button.style.display = "none";
    }


    onCreateImg = (e) => {
        this.setState({ imageUrl: e.target.value })
    }


    onChangePostImg = () => {
        this.setState(prevState => {
            return {
                postType: "imageUrl",
                modalVisible: !prevState.modalVisible
            }
        })
        const $button = document.querySelector(".waves-effect");
        $button.style.display = "none";
    }



    onPostImage = () => {
        const body = {
            type: "image",
            imageUrl: this.state.imageUrl,
            isPublic: true
        }
        const $err = document.getElementById("errorMes");
        const $input = document.querySelector(".getRed");

        if (this.state.imageUrl.slice(0, 5) === "https") {
            createPost(body).then(() => {
                this.setState((prevState) => {
                    return ({
                        imageUrl: "",
                    })
                })
                this.props.onReload();
            })
            this.modalToggle()
        } else {
            $err.textContent = "image must have valid url"
            $err.style.color = "red"
            $input.style.borderBottom = "1px solid red"
        }
    }


    onCreateVid = (e) => {
        this.setState({ videoUrl: e.target.value })
    }



    onPostVideo = () => {
        const body = {
            type: "video",
            videoUrl: this.state.videoUrl,
            isPublic: true
        }
        createPost(body)
            .then(() => {
                this.setState({
                    videoUrl: ""
                })
                this.props.onReload();
            })
        this.modalToggle()
    }


    onChangePostVid = () => {
        this.setState(prevState => {
            return {
                postType: "videoUrl",
                modalVisible: !prevState.modalVisible
            }
        })
        const $button = document.querySelector(".waves-effect");
        $button.style.display = "none";
    }



    modalToggle = () => {
        this.setState((prevState) => {
            return {
                modalVisible: !prevState.modalVisible
            }
        })
        const $button = document.querySelector(".waves-effect");
        $button.style.display = "none";
    }



    render() {
        return (
            <>
                <div className="fixed-action-btn plus">
                    <a className="btn-floating btn-large red">+
                        <i className="large material-icons"></i>
                    </a>
                    <ul>
                        <li><a className="btn-floating #68b6f4" ><i className="material-icons fa fa-text-width" onClick={this.onChangePostText}></i></a></li>
                        <li><a className="btn-floating green darken-1" onClick={this.onChangePostImg}><i className="material-icons fa fa-image"></i></a></li>
                        <li><a className="btn-floating red "><i className="material-icons fa fa-video" onClick={this.onChangePostVid}></i></a></li>
                    </ul>
                </div>

                <Modal open={this.state.modalVisible} className="feed-modal">
                    {this.state.postType === 'text' && <PostForm postName="Text Post"
                        onPost={this.onPostText}
                        onCreate={this.onCreateText}
                        disabled={!this.state.text.length}
                        value={this.state.text}
                        click={this.modalToggle}
                    />}
                    {this.state.postType === 'imageUrl' && <PostForm postName="Image Post"
                        onPost={this.onPostImage}
                        onCreate={this.onCreateImg}
                        disabled={!this.state.imageUrl.length}
                        value={this.state.imageUrl}
                        click={this.modalToggle}
                    />}
                    {this.state.postType === 'videoUrl' && <PostForm postName="Video Post"
                        onPost={this.onPostVideo}
                        onCreate={this.onCreateVid}
                        disabled={!this.state.videoUrl.length}
                        value={this.state.videoUrl}
                        click={this.modalToggle}
                    />}
                </Modal>
            </>
        )
    }
}

export default CreatePost;