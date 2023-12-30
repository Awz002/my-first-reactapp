import React from "react";
import { Link } from "react-router-dom";

// import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mood}`} style={{borderBottom:"2px solid white",height:"82px"}} >
        <div className="container-fluid">
          <Link className={`nav-a  text-${props.textCol}  navbar-brand` } style={{fontSize:"2rem"}}  to="/home">
            Company Logo
          </Link>
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
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link  text-${props.textCol} `} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  text-${props.textCol}`} to="/about" >
                  Link
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link dropdown-toggle text-${props.textCol}`}
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Drop Down
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Linkedaccordina">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Linkedaccordina">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li  >
                    <Link className="dropdown-item"  to="/Linkedaccordina">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link  className={`nav-link text-${props.textCol} `} to="/accordian" aria-disabled="true">
                  Disabled
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

              <div className="d-flex ">
              <div className="bg-primary rounded mx-2 border " onClick={()=>{props.toggleMood2('primary')}} style={{height:"30px",width:"30px",cursor:"pointer"}} >&nbsp;</div>
              <div className="bg-danger rounded mx-2 border" onClick={()=>{props.toggleMood2('danger')}} style={{height:"30px",width:"30px",cursor:"pointer"}} >&nbsp;</div>
              <div className="bg-success rounded border mx-2" onClick={()=>{props.toggleMood2('success')}} style={{height:"30px",width:"30px",cursor:"pointer"}} >&nbsp;</div>
              <div className="bg-warning rounded border mx-2" onClick={()=>{props.toggleMood2('warning')}} style={{height:"30px",width:"30px",cursor:"pointer"}} >&nbsp;</div>
              </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMood}
              />
              <label  className={`form-check-label  text-${()=>{props.toggleMood(null)}} ` } htmlFor="flexSwitchCheckDefault"  onClick={props.toggleMood} >
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
