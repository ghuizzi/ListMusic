import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Error404() {
  return (
    <>
      <h1>404</h1>
      <p>Page not found</p>
      <NavLink to="/">
        <Button>Go to Home</Button>
      </NavLink>
    </>
  );
}

export default Error404;
