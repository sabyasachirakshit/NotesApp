import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const textColor = isDarkMode ? "light" : "dark";
  const bgColor = isDarkMode ? "dark" : "light";

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${bgColor} bg-${bgColor}`}
      >
        <div className="container-fluid">
          <a className={`navbar-brand text-${textColor}`} href="/">
            <b>SR Notes App</b>
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
              <li className={`nav-item`}>
                <Link
                  className={`nav-link text-${textColor} ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link
                  className={`nav-link text-${textColor} ${
                    location.pathname === "/mynotes" ? "active" : ""
                  }`}
                  to="/mynotes"
                >
                  My Notes
                </Link>
              </li>
            </ul>
            <form className="d-flex" style={{ paddingRight: "15px" }}>
              <input
                className={`form-control me-2 bg-${bgColor} text-${textColor}`}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className={`btn btn-outline-success`} type="submit">
                Search
              </button>
            </form>
            <button
              className={`btn btn-outline-${textColor}`}
              onClick={handleDarkMode}
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
