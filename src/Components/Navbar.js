import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
        Wordy.com
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                    <a className="dropdown-item" href="/">
                      Link
                    </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Help
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div>
            Toggle Themes : 
            <button type="button" title="Blue Theme" className="btn cool m-2 btn-primary" onClick={props.toggleBlue}></button>
            <button type="button" title="Grey Theme" className="btn cool m-2 btn-secondary" onClick={props.toggleGrey}></button>
            <button type="button" title="Green Theme" className="btn cool m-2 btn-success" onClick={props.toggleGreen}></button>
            <button type="button" title="Red Theme" className="btn cool m-2 btn-danger" onClick={props.toggleRed}></button>
            <button type="button" title="Yellow Theme" className="btn cool m-2 btn-warning" onClick={props.toggleYellow}></button>
          </div>
          <div className={`nav-item  form-check form-switch text-${props.mode === 'dark' ? 'light' : 'light' || props.mode === 'light' ? 'dark' : 'dark'} `}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.togglendis} Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}


