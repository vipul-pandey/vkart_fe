import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Image, Offcanvas } from 'react-bootstrap';
import { toast } from 'react-toastify';

import logo from '../assets/logo.png';

import {
  Navbar,
  Badge,
  Nav,
  NavDropdown,
  Button,
  Container,
} from 'react-bootstrap';

import SearchBox from './SearchBox';
import { Store } from '../Store';
import { getError } from '../utils';
const _ = require('lodash');

const Header = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };
  return (
    <div className="flex-column zindex">
      <header>
        <Navbar bg="light" expand="lg" fixed="top" className="p-0">
          <Container fluid style={{ maxWidth: '100%' }}>
            <Button
              variant="light"
              onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
            >
              <i className="fas fa-bars"></i>
            </Button>

            <Navbar.Brand clasksName="m-1" href="/">
              <Image src={logo} width="130px" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <SearchBox />
              <Nav className="left-nav justify-content-end">
                <Nav.Link href="/cart" className="nav-item">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Nav.Link>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/profile">
                      User Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/orderhistory">
                      History
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                )}
                {userInfo && !userInfo.isAdmin && (
                  <NavDropdown title="Admin" id="admin-nav-dropdown">
                    <NavDropdown.Item href="/admin/dashboard">
                      Dashboard
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/admin/products">
                      Products
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/admin/orders">
                      Orders
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/admin/users">
                      Users
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <Offcanvas
        show={sidebarIsOpen}
        onHide={() => setSidebarIsOpen(false)}
        className="side-navbar"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {categories.map((category) => (
            <Nav.Item key={category} className="nav-item">
              <LinkContainer
                to={{ pathname: '/search', search: `category=${category}` }}
                onClick={() => setSidebarIsOpen(false)}
                className="link-item"
              >
                <Nav.Link>{_.startCase(category)}</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Header;
