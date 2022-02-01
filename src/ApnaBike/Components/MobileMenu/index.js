import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import "./style.css";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/home",
  },

  {
    id: 2,
    title: "Why ApnaBike",
    link: "/whyApnaBike",
  },

  {
    id: 3,
    title: "Pricing",
    link: "/pricing",
  },
  {
    id: 4,
    title: "FAQ",
    link: "/faq",
  },
  {
    id: 7,
    title: "Contact",
    link: "/contact",
  },
];

export default class MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: 0,
  };

  menuHandler = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    });
  };

  setIsOpen = (id) => () => {
    this.setState({
      isOpen: id === this.state.isOpen ? 0 : id,
    });
  };

  render() {
    const { isMenuShow } = this.state;

    return (
      <div>
        <div
          id="smallHeader"
          className={`mobileMenu ${isMenuShow ? "show" : ""}`}
        >
          <span
            className="fas fa-times mt-2 mr-2 float-right "
            onClick={() => this.menuHandler()}
          ></span>
          <div className="d-flex pt-3 pl-3">
            <img src="/logo.png" alt="" width="65" height="40" />
            <p className="mt-2 ml-2">ApnaBike</p>
          </div>

          {this.props.user && (
            <div className="col-lg-2 userName mt-3">
              <h4>{this.props.user}</h4>
            </div>
          )}
          <ul className="responsivemenu">
            {menus.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={item.link}>{item.title}</Link>
                </li>
              );
            })}

            {!this.props.user ? (
              <div className="mt-3 pt-1 loginSignup">
                <Link to="/login">
                  <Button className="btn btn-success loginMobile">login</Button>
                </Link>
                <Link to="/signup">
                  <Button className="btn btn-secondary signupMobile">
                    Signup
                  </Button>
                </Link>
              </div>
            ) : null}
          </ul>
        </div>

        <div className="showmenu" onClick={this.menuHandler}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}
