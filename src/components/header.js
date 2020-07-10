import React from 'react'
import '../styles/layout.scss'

const Header = (props) => {
    return (
        <div className="page-title">
            <div className="colored-box"></div>
            <h1>{props.headerText}</h1>
        </div>
    )
}

export default Header;


