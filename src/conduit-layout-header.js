import React from "react";

const ConduitLayoutHeader = (props) => (
  <div>
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          conduit
        </a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <a className="nav-link" href="/">
              {" "}
              Home{" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              {" "}
              Sign in{" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">
              {" "}
              Sign up{" "}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default ConduitLayoutHeader;
