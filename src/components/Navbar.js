import React from "react";
// import { Link } from "react-router-dom";

// import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mood}`}>
        <div className="container-fluid">
          <a className={`nav-a  text-${props.textCol}   navbar-brand` } href="#">
            Company Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link  text-${props.textCol} active`} aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link  text-${props.textCol}`} href="#" >
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle text-${props.textCol}`}
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Drop Down
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li  >
                    <a className="dropdown-item"  href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a  className={`nav-link text-${props.textCol} disabled`} href="#" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMood}
              />
              <label  className={`form-check-label  text-${props.mood==="light"?"dark":"light"} ` } htmlFor="flexSwitchCheckDefault"  onClick={props.toggleMood} >
                {props.mood==="light"?"Go to Dark Mood":"Go to Light Mood" }
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

// Navbar.propTypes = {
//   companyLogo: PropTypes.string.isRequired,
//   dropDown: PropTypes.string.isRequired,
// };

// Navbar.defaultProps = {
//   companyLogo: "Company Logo ",
//   dropDown:"DropDown"
// };
