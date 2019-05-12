import React from "react";
import InputField from "./InputField";
import { Button } from "react-materialize";
import { editProfile } from '../../../../services/userService'

class ModalContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: this.props.firstName,
      avatarUrl: this.props.imageUrl,
      description: this.props.description
    }

    this.onUpdateProfile = this.onUpdateProfile.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.firstName !== this.props.firstName) {
      this.setState({
        fullName: this.props.firstName,
        avatarUrl: this.props.imageUrl,
        description: this.props.description
      })
    }
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onUpdateProfile(e) {
    const { fullName, avatarUrl, description } = this.state;
    const { id, onLoadUser } = this.props;

    e.preventDefault();

    if (!this.validate().valid) {
      return;
    }

    this.props.click();

    editProfile(id, fullName, avatarUrl, description)
      .then(() => {
        onLoadUser();
      })
  }

  validate = () => {
    const { fullName, avatarUrl, description } = this.state;

    const validationResult = {
      valid: true,
      errors: {},
    };

    const setError = (field, message) => {
      validationResult.valid = false;
      validationResult.errors[field] = message;
    }

    if (!fullName) {
      setError('fullName', 'Full name is required!')
    } else if (fullName.length < 3) {
      setError('fullName', 'Min length is 3!');
    }

    if (!avatarUrl) {
      setError('avatarUrl', 'Avatar url is required!');
    }

    if (!description) {
      setError('description', 'Description is required!');
    }

    return validationResult;
  }

  // validateFullName = (name) => {
  //   if (!name) {
  //     return 'Full name is required!';
  //   } else if (name.length < 3) {
  //     return 'Min length is 3!';
  //   }

  //   return null;
  // }


  render() {
    const { errors } = this.validate();
    const { props } = this;

    return (
      <form className="row" onSubmit={e => e.preventDefault()}>
        <div className="row">
          <h4 className="col s5 offset-s2">Update profile</h4>
        </div>

        <InputField
          type="text"
          name="fullName"
          value={this.state.fullName}
          placeholder="Enter full name"
          onInputChange={this.onInputChange}
          error={errors.fullName}
        />

        <InputField
          type="url"
          name="avatarUrl"
          value={this.state.avatarUrl}
          placeholder="Enter image URL"
          onInputChange={this.onInputChange}
          error={errors.avatarUrl}
        />

        <InputField
          type="text"
          name="description"
          value={this.state.description}
          placeholder="Enter bio"
          onInputChange={this.onInputChange}
          error={errors.description}
        />

        <div className="col s2"></div>
        <Button onClick={this.onUpdateProfile}>Update</Button>

        <Button onClick={props.click} className="modal-button-space">Close</Button>

      </form>
    );
  }

};

export default ModalContent;
