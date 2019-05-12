import React from 'react';
import Register from './register/Register';
import Login from './login/Login';


class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { registerUi: true }
    }

    onToggleRegister = () => {
        this.setState((prevState) => {
            return {
                registerUi: !prevState.registerUi
            }
        })
    }

    buttons = () => {
        if (this.state.registerUi) {
            return (
                <div className="col s4 offset-s1">
                    <button onClick={this.onToggleRegister} className="btn left col s6 disabled">Register</button>
                    <button onClick={this.onToggleRegister} className="btn right col s6">Login</button>
                </div>)
        }
        return (
            <div className="col s4 offset-s1">
                <button onClick={this.onToggleRegister} className="btn left col s6">Register</button>
                <button onClick={this.onToggleRegister} className="btn right col s6 disabled">Login</button>
            </div>)
    }

    render() {
        return this.state.registerUi ?
            <Register>
                {this.buttons()}
            </Register> :
            <Login>
                {this.buttons()}
            </Login>
    }
}


export default LandingPage;