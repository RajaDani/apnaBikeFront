// import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarContent from "./SidebarContent";

function Sidebar(props) {

  function tToggle() {
    var body = document.body;
    body.classList.toggle("vertical-collpsed");
    body.classList.toggle("sidebar-enable");
  }

  return (
    <React.Fragment>
      <div className="vertical-menu" style={{ width: '260px', backgroundColor: '#1c2742' }}>
        <div className="navbar-brand-box" style={{ backgroundColor: '#1c2742' }}>
          <Link to="/" className="logo logo-dark">
            {/* <span className="logo-sm mb-2">
              <img src='/team2.jpg' alt="" height="22" />
            </span> */}
            <span className="logo-lg d-flex align-items-center" style={{ marginTop: '18px' }}>
              <img src='/team2.jpg' alt="" style={{ height: '30px', borderRadius: '10px' }} />
              <h5 id="userName" className="ml-2 mt-1">Danish</h5>
            </span>
          </Link>
          {/* <Link to="/" className="logo logo-light">
            <span className="logo-sm">
              <img src='/logo.png' alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src='/logo.png' alt="" height="20" />
            </span>
          </Link> */}
        </div>
        <button
          onClick={() => {
            tToggle();
          }}
          type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn sidebarToggle">
          <i className="fa fa-fw fa-bars"></i>
        </button>
        <div data-simplebar className="h-100">
          {props.type !== "condensed" ? <SidebarContent /> : <SidebarContent />}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
