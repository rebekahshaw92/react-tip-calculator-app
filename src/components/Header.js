import React, { Component } from 'react';
import Logo from '../images/logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="header">
             <img src={Logo} alt="logo" />   
            </header>
        )
    }
}

export default Header;