import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Button,
  Form,
  Nav,
} from "reactstrap";
import "./navbar.css";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function Header() {
  const [newBikeOpen, setNewBikeOpen] = useState(false);
  const [rentBikeOpen, setrentBikeOpen] = useState(false);
  const [brandsOpen, setbrandsOpen] = useState(false);
  const toggle1 = () => setNewBikeOpen(!newBikeOpen);
  const toggle2 = () => setrentBikeOpen(!rentBikeOpen);
  const toggle3 = () => setbrandsOpen(!brandsOpen);

  function openNav() {
    document.getElementById("open").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("open").style.width = "0%";
  }

  return (
    <>
      <div>
        <Navbar expand="md" light className="container">
          <NavbarBrand>
            <img src="./logo.png" alt="" width="90" height="50" />
            &nbsp;<a> ApnaBike</a>
          </NavbarBrand>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <Nav navbar className="navbarItems">
              <NavItem>
                <NavLink className="nav-link">Home</NavLink>
              </NavItem>
              <Dropdown isOpen={newBikeOpen} toggle={toggle1}>
                <NavItem className="navItem">
                  <DropdownToggle className="dropdownBtn">
                    New Bikes <span className="fas fa-angle-down"></span>
                  </DropdownToggle>
                </NavItem>
                <DropdownMenu className="dropMenu mt-3">
                  <Dropdown isOpen={brandsOpen} toggle={toggle3}>
                    <DropdownToggle className="dropdownBtn list-group-item">
                      Popular Brands{" "}
                      <span className="fas fa-angle-right"></span>
                    </DropdownToggle>
                    <DropdownMenu className="dropMenu mt-3">
                      <DropdownItem
                        className="list-group-item"
                        style={{ marginTop: "-10px" }}
                      >
                        70cc Bikes
                      </DropdownItem>
                      <DropdownItem className="list-group-item">
                        100cc Bikes
                      </DropdownItem>
                      <DropdownItem className="list-group-item">
                        125cc Bikes
                      </DropdownItem>
                      <DropdownItem className="list-group-item">
                        200cc Bikes
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <DropdownItem className="list-group-item">
                    Latest Bikes
                  </DropdownItem>
                  <DropdownItem className="list-group-item">
                    Upcoming Bikes
                  </DropdownItem>
                  <DropdownItem className="list-group-item">
                    Electric Bikes&nbsp;
                    <span class="badge bg-secondary">New</span>
                  </DropdownItem>
                  <DropdownItem className="list-group-item">
                    Service Center
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavItem>
                <NavLink className="nav-link">Accessories</NavLink>
              </NavItem>
              <Dropdown isOpen={rentBikeOpen} toggle={toggle2}>
                <NavItem className="navItem">
                  <DropdownToggle className="dropdownBtn">
                    Rent a Bike <span className="fas fa-angle-down"></span>
                  </DropdownToggle>
                </NavItem>
                <DropdownMenu className="dropMenu mt-3">
                  <DropdownItem
                    className="list-group-item"
                    style={{ marginTop: "-10px" }}
                  >
                    70cc Bikes
                  </DropdownItem>
                  <DropdownItem className="list-group-item">
                    100cc Bikes
                  </DropdownItem>
                  <DropdownItem className="list-group-item">
                    125cc Bikes
                  </DropdownItem>
                  <DropdownItem className="list-group-item">
                    200cc Bikes
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavItem>
                <NavLink className="nav-link">Why us</NavLink>
              </NavItem>
            </Nav>
            <Button className="signinBtn" outline>
              Signin
            </Button>
            <Button>
              <span className="fab fa-wpforms"></span>&nbsp;Feedback
            </Button>
          </div>
        </Navbar>
      </div>
    </>
  );
}
