import React from 'react';

const Button = (props) => {
    return (
        <button className={`btn ${props.classname}`} onClick={props.action}>{props.text}</button>
    )
}

export default Button;