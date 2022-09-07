import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LoginButton from './LoginBtn';
import LogoutButton from './Logout';

import "./Style.css"

class Header extends React.Component {
  render() {
    return (
      <div className='navigation'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className='logo' href='/'>My Favorite Books</Navbar.Brand>
        <div className='navBar'>
        <NavItem ><Link to="/" className="nav-link">Home</Link></NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
        <NavItem><Link to="/About" className="nav-link">About</Link></NavItem>
        <NavItem><Link to="/Profile" className="nav-link">Profile</Link></NavItem>
        <NavItem><LoginButton className="btn"/></NavItem>
        <NavItem><LogoutButton className="btn"/></NavItem>
        {/* <NavItem><Profile /></NavItem> */}
        </div>
      </Navbar>
      </div>
    )
  }
}

export default Header;
