import React from "react";
import M from "materialize-css";
import InputField from "../../profile/InputField";



const RegisterForm = (props) => {

    return (
        <form className="col s4 offset-s1 formBorder">
            <InputField
                type="text"
                inputName="Name"
                name="name"
                onInputChange={props.onInputChange}
                value={props.name.name}
            />

            <InputField
                type="text"
                inputName="Email"
                name="email"
                onInputChange={props.onInputChange}
                value={props.name.email}
            />

            <InputField
                type="password"
                inputName="Password"
                name="password"
                onInputChange={props.onInputChange}
                value={props.name.password}
            />

            {props.error && <p>{props.error}</p>}
            {props.success && <p>{props.success}</p>}
            <button className="btn register right" onClick={props.onCreateRegister}>Register</button>
        </form>

    )
}




export default RegisterForm;





