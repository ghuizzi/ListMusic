/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { routes } from '../../router/routes';
import { Capitalize } from '../../utils';
import './navBar.css';

function Nav() {
  return (
    <div className="navContent">
      <Container>
        <Row>
          <Col>
            {routes[0].children.map((route, index) => (
              <NavLink
                key={index}
                to={route.path}
                // className="nav-link"
                activeClassName="active"
              >
                {route.path === '' ? 'Home' : Capitalize(route.path)}
              </NavLink>
            ))}
            <a>Favorites</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Nav;
