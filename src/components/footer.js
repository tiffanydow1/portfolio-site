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
                    <a href="tel:+1-709-769-7159">
                        <p>709-769-7159</p>
                    </a>
                </div>
                <div className="email-div">
                    <p className="title">Email</p>
                    <a href="mailto: tiffanyjdow@gmail.com">
                        <p>tiffanyjdow@gmail.com</p>
                    </a>
                </div>
                <div className="social-div">
                    <p className="title">Connect</p>
                    <div className="icon-container">
                        <a href="https://www.linkedin.com/in/tiffany-dow" target="_blank">
                            <img src={linkedinIcon} alt="linkedIn icon" />
                        </a>
                        <a href="https://github.com/tiffanydow1" target="_blank">
                            <img src={githubIcon} alt="github icon" />
                        </a>
                        <a href="mailto: tiffanyjdow@gmail.com">
                            <img src={gmailIcon} alt="gmail icon" />
                        </a>      
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;