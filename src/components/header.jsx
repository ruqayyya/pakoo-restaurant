import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/images/PAkoo restaurant-depositphotos-bgremover.png';


const Header = () => {
  return (
    <header className="header">
      <div className="container ">
        <nav className="navbar row ">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="navlist row">
            <li className="item">
              <NavLink to={'/'}>About</NavLink>
            </li>
            <li className="item">
              <NavLink to={'/Menu'}>Menu</NavLink>
            </li>
            <li className="item">
              <NavLink to={'/Contact'}>contact</NavLink>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;
