import React from "react";
import { Link } from "react-router-dom";
import ArrowIcon from './common/arrowIcon'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand ml-4" to="/home">
          <span className="navColor">S</span>hare
          <span className="navColor">S</span>tory
        </Link>
        <button
          className="navbar-toggler"
          style={{ border: "none" }}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <ArrowIcon />
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <nav className="navbar">
              <NavLink
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/stories"
              >
                Stories
              </NavLink>
              <NavLink
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/contact"
              >
                Contact
              </NavLink>
            </nav>
          </div>
        </div>
        <div>
          <button className="btn btn-outline mr-2 login">LOGIN</button>
          <button
            className="btn btn-outline"
            style={{ color: "white", backgroundColor: "#FF5C00" }}
          >
            SIGN IN
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
