import React from 'react';
import linkedinIcon from '../images/linkedin-logo.png'
import githubIcon from '../images/github-logo.png'
import gmailIcon from '../images/gmail_icon.png'

const Footer = () => {
    return (
        <footer className="fixed-footer"> 
            <div className="left-container">
                <p>© 2020 by Tiffany Dow</p>
            </div>
            <div className="right-container">
                <div className="phone-div">
                    <p className="title">Call</p>
                    <p>709-769-7159</p>
                </div>
                <div className="email-div">
                    <p className="title">Email</p>
                    <p>tiffanyjdow@gmail.com</p>
                </div>
                <div className="social-div">
                    <p className="title">Connect</p>
                    <div className="icon-container">
                        <img src={linkedinIcon} alt="linkedIn icon" />
                        <img src={githubIcon} alt="github icon" />
                        <img src={gmailIcon} alt="gmail icon" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;