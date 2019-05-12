import React, { Component } from "react";
import RegisterForm from "./RegisterForm";
import RegisterInfo from "./RegisterInfo";
import { fetchRegister } from "../../../../../services/authService";


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
            error: '',
            success: ''
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }


    onCreateRegister = (e) => {
        e.preventDefault();

        const body = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };

        fetchRegister(body)
        .then((response) => {
            if(response.accessToken){
                this.setState({
                    name: "",
                    email: "",
                    password: "",
                    error: '',
                    success: "Register Successful!"
                })
            } else {
                this.setState({
                    success: "",
                    error:response.message
                })
            }
            
        })
        .catch((response) => {
           console.log(response.message); 
        })
        
    }


    render() {

        return (
            <div className="row container margin-top">
                <RegisterInfo />
                {this.props.children}
                <RegisterForm
                    name={this.state}
                    onInputChange={this.onInputChange}
                    onCreateRegister={this.onCreateRegister}
                    error={this.state.error}
                    success={this.state.success}
                />
            </div>
        )

    }
}



export default Register;