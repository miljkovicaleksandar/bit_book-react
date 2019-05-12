import React from 'react';


const InputField = (props) => {

    const modalClasses= "input-field col s7 offset-s2 center-modal-content";
    const landingPageClasses = "input-field col s12";
    const local = !!localStorage.getItem("key");

    return (
        <div className="row">
            <div className={local ? modalClasses : landingPageClasses}>
                {props.inputName} <input
                    id={props.name}
                    type={props.type}
                    name={props.name}
                    className={`validate ${props.error ? 'invalid' : ''}`}
                    value={props.value}
                    onChange={props.onInputChange}
                    autoComplete="off"
                />
                <label htmlFor={props.name} className="active">{props.placeholder}</label>
                <span className="helper-text" data-error={props.error || ''}></span>
            </div>
        </div>
    )
}
export default InputField;