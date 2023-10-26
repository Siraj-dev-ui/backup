import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import logo from "../assets/Opulent-logo.png";

// Define the CSS for the navigation bar
const navStyle = {
  backgroundColor: "#fbf9f5", // Background color
  color: "#627571", // Text color
};

const navLinkStyle = {
  color: "#627571", // Text color for links
};

export default function Navbar({ setDisplayProducts }) {
  const [showBasic, setShowBasic] = useState(false);

  const handleProductsClick = () => {
    setDisplayProducts(true);
  };

  return (
    <MDBNavbar expand="lg" light style={navStyle}>
      {" "}
      {/* Apply the defined styles */}
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <img src={logo} alt="Logo" height="30" />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">About Us</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              {/* <Link to="/form" className="nav-link" style={navLinkStyle}></Link> */}
              <Link
                to="/product-list"
                className="nav-link"
                style={navLinkStyle}
              >
                Products
              </Link>
              {/* Use Link to navigate to the "/form" route */}
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to="/cart" className="nav-link" style={navLinkStyle}>
                Cart
              </Link>
              {/* Add a link to the Cart page */}
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className="d-flex input-group w-auto">
            {/* ... Search input and button ... */}
          </form>

          <MDBIcon icon="shopping-cart" size="lg" className="mx-3" />
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
