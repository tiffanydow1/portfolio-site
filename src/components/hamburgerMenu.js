import React from 'react';
import { bool, func } from 'prop-types';
import '../styles/mobileMenu.scss'

const HamburgerMenu = ({ open, setOpen }) => (
    <button className={`hamburger-menu-container ${open ? 'open' : ''}`} open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
    </button>
)
HamburgerMenu.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default HamburgerMenu;