import PropTypes from "prop-types";
import React, { useState } from "react";
import "./_vertical.scss";

import { Button } from "reactstrap";

import { Link } from "react-router-dom";
import { Dropdown } from "reactstrap";
import PagesStarter from "./pages-starter";

function UserHeader(props) {
  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  function tToggle() {
    var body = document.body;
    body.classList.toggle("vertical-collpsed");
    body.classList.toggle("sidebar-enable");
  }

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header userPanel">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img
                    className="userPanelImg mt-5"
                    src={process.env.PUBLIC_URL + "/images/team2.jpg"}
                    alt=""
                    height="30"
                  />
                </span>
              </Link>
              {/* 
              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src='/boyImg2.jpg' alt="" height="22" />
                </span>
              </Link> */}
            </div>

            <button
              type="button"
              onClick={() => {
                tToggle();
              }}
              className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn headerToggle"
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars headerBars" />
            </button>
            <div className="container d-flex align-items-center ml-3">
              <img
                src={process.env.PUBLIC_URL + "/images/logo.png"}
                alt="logo"
                width="60"
                height="30"
              />
              <h4 style={{ marginLeft: "10px" }}>ApnaBike</h4>
            </div>
          </div>

          <Dropdown className="d-none d-lg-inline-block ms-1 p-3">
            <Link to="/home">
              {" "}
              <Button style={{ marginRight: "30px", width: "100px" }} outline>
                Home
              </Button>
            </Link>

            <button
              type="button"
              onClick={() => {
                toggleFullscreen();
              }}
              className="btn header-item noti-icon waves-effect"
              data-toggle="fullscreen"
            >
              <span className="fas fa-compress"></span>
            </button>
          </Dropdown>
        </div>
      </header>
    </React.Fragment>
  );
}

UserHeader.propTypes = {
  changeSidebarType: PropTypes.func,
  leftMenu: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func,
};

export default UserHeader;

// const mapStatetoProps = state => {
//   const {
//     layoutType,
//     showRightSidebar,
//     leftMenu,
//     leftSideBarType,
//   } = state.Layout;
//   return { layoutType, showRightSidebar, leftMenu, leftSideBarType };
// };

// export default connect(mapStatetoProps, {
//   showRightSidebarAction,
//   toggleLeftmenu,
//   changeSidebarType,
// })(withTranslation()(Header));
