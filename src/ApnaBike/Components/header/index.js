import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import "../MobileMenu/style.css";
import "./headerStyle.scss";

const Header = () => {
  let user = localStorage.getItem("username");
  const [popover, setpopover] = useState(false);
  const [popoverSmall, setpopoverSmall] = useState(false);

  const togglePopover = () => {
    setpopover(!popover);
  };
  const togglePopoverSmall = () => {
    setpopoverSmall(!popoverSmall);
  };

  return (
    <div className="middle-header header-style-3">
      <div className="container">
        <div className="header-content">
          <div className="row">
            <div className="col-lg-3 col-md-10 col-sm-10 col-10 BrandLogo">
              <div className="logo">
                <img
                  src={process.env.PUBLIC_URL + "/images/logo.png"}
                  alt=""
                  width="90"
                  height="50"
                />
                &nbsp;
                <Link to="/home" className="brandName">
                  {" "}
                  ApnaBike
                </Link>
              </div>
            </div>
            <div className="col-lg-7 d-lg-block d-none">
              <nav>
                <ul>
                  <li>
                    <Link className="navLink " to="/home" title="">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="navLink"
                      to="/whyApnaBike"
                      title="/whyApnaBike"
                    >
                      Why ApnaBike
                    </Link>
                  </li>
                  <li>
                    <Link className="navLink" to="/pricing" title="">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link className="navLink" to="/faq" title="">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link className="navLink" to="/contact" title="">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {user ? (
              <div className="col-lg-2 userName userLarge">
                <span
                  className="far fa-user"
                  id="Popover1"
                  onClick={() => togglePopover()}
                >
                  <Popover
                    placement="bottom"
                    className="popover"
                    isOpen={popover}
                    target="Popover1"
                    toggle={() => togglePopover()}
                    style={{ marginTop: "10px", backgroundColor: "#f7f7f7" }}
                  >
                    <PopoverHeader className="popoverHeader">
                      <i className="fas fa-user p-2"></i>
                      <h4>{user}</h4>
                    </PopoverHeader>
                    <PopoverBody className="popoverBody">
                      <Button
                        className="btn btn-secondary mt-2 p-2"
                        onClick={() => localStorage.clear()}
                        style={{ width: "100%", borderRadius: "30px" }}
                      >
                        Logout
                      </Button>
                      <Link to={"/UserPanel/" + localStorage.getItem("userId")}>
                        <Button
                          className="btn btn-success mt-2 p-2 mb-1"
                          style={{ width: "100%", borderRadius: "30px" }}
                        >
                          My Account
                        </Button>
                      </Link>
                    </PopoverBody>
                  </Popover>
                </span>
                <h4>{user}</h4>
              </div>
            ) : (
              <div className="col-lg-2 d-lg-block d-none mt-3 pt-1 loginSignup">
                <Link to="/login">
                  <Button className="btn btn-success mr-2">login</Button>
                </Link>
                <Link to="/signup">
                  <Button className="btn btn-secondary">Signup</Button>
                </Link>
              </div>
            )}

            <div className="col-md-2 col-sm-2 col-2">
              {user ? (
                <div className="col-lg-2 userName d-block d-lg-none userSmall">
                  <span
                    className="far fa-user"
                    id="PopoverS"
                    onClick={() => togglePopoverSmall()}
                  >
                    <Popover
                      placement="bottom"
                      className="popover"
                      isOpen={popoverSmall}
                      target="PopoverS"
                      toggle={() => togglePopoverSmall()}
                      style={{ marginTop: "10px", backgroundColor: "#f7f7f7" }}
                    >
                      <PopoverHeader className="popoverHeaderSmall">
                        <i className="fas fa-user p-2"></i>
                        <h4>{user}</h4>
                      </PopoverHeader>
                      <PopoverBody className="popoverBodySmall">
                        <Button
                          className="btn btn-secondary mt-2 p-2"
                          onClick={() => localStorage.clear()}
                          style={{ width: "100%", borderRadius: "30px" }}
                        >
                          Logout
                        </Button>
                        <Link
                          to={"/UserPanel/" + localStorage.getItem("userId")}
                        >
                          <Button
                            className="btn btn-success mt-2 p-2 mb-1"
                            style={{ width: "100%", borderRadius: "30px" }}
                          >
                            My Account
                          </Button>
                        </Link>
                      </PopoverBody>
                    </Popover>
                  </span>
                </div>
              ) : null}
              <MobileMenu user={user} />
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
