import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import LoginForm from "./LoginForm";
import LoginInfo from "./LoginInfo";
import { fetchLogin, loginUser } from "../../../../../services/authService";


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            error: '',
        }
    }


    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }


    onLogin = (e) => {
        e.preventDefault();

        const body = {
            email: this.state.email,
            password: this.state.password
        };

        fetchLogin(body)
            .then((response) => {
                if(response.message){
                   this.setState({error:response.message}) 
                } else {
                    loginUser(response.accessToken)
                    this.props.history.push('/feed/')
                }
                
            })
    }


    render() {

        return (
            <div className="row container margin-top">
                <LoginInfo />
                {this.props.children}
                <LoginForm
                    name={this.state}
                    onInputChange={this.onInputChange}
                    onLogin={this.onLogin}
                    error={this.state.error}
                />
            </div>
        )

    }
}



export default withRouter(Login);