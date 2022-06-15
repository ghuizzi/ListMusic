import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../styles/error.css";
function Error404() {
  return (
    <div className="contentError">
      <div>
        <h1 className="erro texto_3d">404</h1>
        <p>Page not found</p>
        <NavLink to="/">
          <Button classname="go">Go to Home</Button>
        </NavLink>
      </div>
    </div>
  );
}

export default Error404;
