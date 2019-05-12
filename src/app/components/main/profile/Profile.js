import React from "react";
import { fetchUser } from "../../../../services/userService";
import { Modal, Button } from "react-materialize";
import M from "materialize-css";
import ModalContent from "./ModalContent";
import { getAuthUserId } from '../../../../services/authService';
import UserProfile from './UserProfile';
import Loader from '././../../Loader';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      modalVisible: false
    };

    this.modalToggle = this.modalToggle.bind(this)
  }

  onLoadUser = () => {

    fetchUser(this.props.match.params.id)
      .then(user => {
        this.setState({
          user: user
        });
      })
      .catch(error => console.log(error));
  }

  modalToggle() {
    this.setState((prevState) => {
      return {
        modalVisible: !prevState.modalVisible
      }
    })
  }

  componentDidUpdate(prevProps) {
    const id = this.props.match.params.id;
    const prevId = prevProps.match.params.id
    console.log(this.state.user);
    if (id !== prevId) {
      this.onLoadUser(id);
    }
  }

  componentDidMount() {
    this.onLoadUser()
  }
    
  render() {
    const editButton =
      this.props.match.params.id == getAuthUserId() ? <Button onClick={this.modalToggle} className="edit-buton-position">Edit Profile</Button> : "";

    if (!this.state.user) {
      return <Loader/>
    }

    return (
      <>
        {editButton}
        <Modal open={this.state.modalVisible} options={{ dismissible: false }}>
          <ModalContent
            click={this.modalToggle}
            firstName={this.state.user.firstName}
            lastName={this.state.user.lastName}
            imageUrl={this.state.user.photo}
            description={this.state.user.description}
            id={this.props.match.params.id}
            onLoadUser={this.onLoadUser} />
        </Modal>
        <UserProfile user={this.state.user}/>
      </>
    );
  }
}

export default Profile;
