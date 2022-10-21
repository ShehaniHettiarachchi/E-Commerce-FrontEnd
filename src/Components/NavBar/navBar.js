import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const navBar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("uID");
    localStorage.removeItem("email");
    localStorage.removeItem("permissionLevel");
    window.location.href = "/";
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        expands="sm"
        bg="dark"
        variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/">E-Comm</Nav.Link>
              <Nav.Link href="#">Products</Nav.Link>

              {localStorage.getItem("permissionLevel") == "USER" ? (
                <Nav.Link href="/customer-profile">My Profile</Nav.Link>
              ) : (
                <></>
              )}

              {localStorage.getItem("permissionLevel") == "USER" ? (
                <Nav.Link href="/review">Reviews</Nav.Link>
              ) : (
                <></>
              )}

              {localStorage.getItem("permissionLevel") == "ADMIN" ? (
                <Nav.Link href="/customer">Users</Nav.Link>
              ) : (
                <></>
              )}

              {localStorage.getItem("permissionLevel") == "ADMIN" ? (
                <Nav.Link href="/purchase">Purchase History</Nav.Link>
              ) : (
                <></>
              )}

              {localStorage.getItem("permissionLevel") == "ADMIN" ? (
                <Nav.Link href="#">Orders</Nav.Link>
              ) : (
                <></>
              )}

              {localStorage.getItem("permissionLevel") == "ADMIN" ? (
                <Nav.Link href="/review">Reviews</Nav.Link>
              ) : (
                <></>
              )}

              {localStorage.getItem("permissionLevel") == "ADMIN" ? (
                <Nav.Link href="/wishlist">Wish List</Nav.Link>
              ) : (
                <></>
              )}

              {localStorage.getItem("token") ? (
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              ) : (
                <>
                  <Nav.Link href="/customer-login">Login</Nav.Link>
                  <Nav.Link href="/customer-register">Signup</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default navBar;
