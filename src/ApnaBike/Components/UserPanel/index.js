import React from 'react'
import { Col, Row, Navbar, NavbarBrand, Nav, NavItem, NavLink, Card, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './userPanel.scss';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/scss/styles.scss';


export default function UserPanel() {
    return (
        <div>
            <Row>
                <Col md="3">
                    <ProSidebar className="sidebar" >
                        <SidebarHeader className="sidebarHeader">
                            {/* <img src='logo.png' ></img> */}
                            <h3>ApnaBike</h3>
                        </SidebarHeader>
                        <SidebarHeader className="sidebarHeader">
                            <img src='boyImg2.jpg' ></img>
                            <h4>Danish</h4>
                        </SidebarHeader>

                        <SidebarContent >
                            <Menu iconShape="square" className="menu">
                                <MenuItem className="menu-item active"><i className="fas fa-tachometer-alt mr-3"></i>Dashboard</MenuItem>
                                <MenuItem className="menu-item"><i className="fas fa-sign-out-alt mr-3"></i>Logout</MenuItem>
                            </Menu>
                        </SidebarContent>
                    </ProSidebar>

                </Col>
                <Col md="9" classname="userDashboard">
                    <div className="breadcrumbDiv">
                        <h4>Dashboard</h4>
                        <div className="breadcrumb" >
                            <li className="breadcrumb-item">Dashboard</li>
                            <li className="breadcrumb-item" active>Profile</li>
                        </div>
                    </div>
                    <Row style={{ marginLeft: '-40px', margin: '20px' }}>
                        <Col md="6">
                            <Card style={{ padding: '2px', backgroundColor: 'rgb(157, 157, 223)' }}>
                                <div className="activeBookings">
                                    <div>
                                        <h4>02</h4>
                                        <p>Active Bookings</p>
                                    </div>
                                    <i className="fas fa-biking fa-3x"></i>
                                </div>
                                <div className="moreinfo">
                                    <p>More info <i className="fas fa-arrow-circle-right"></i></p>
                                </div>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card style={{ padding: '2px', backgroundColor: 'rgb(36, 160, 42)' }}>
                                <div className="activeBookings">
                                    <div>
                                        <h4>12</h4>
                                        <p>Total Bookings</p>
                                    </div>
                                    <i className="fas fa-biking fa-3x"></i>
                                </div>
                                <div className="moreinfo2" style={{ backgroundColor: 'rgb(16, 73, 19) !important' }}>
                                    <p>More info <i className="fas fa-arrow-circle-right"></i></p>
                                </div>
                            </Card>
                        </Col>
                    </Row>

                </Col>
            </Row>
            {/* <div class="sidebar">
                <div>
                    <img src="boy.png" alt="logo" />
                    <h3>ApnaBike</h3>
                </div>
                <p></p>
                <div className="userInfo">
                    <img src="boyImg2.jpg" alt="user" />
                    <h4>Danish</h4>
                </div>
                <p></p>
                <a class="active mt-4 m-2" href="#home">Bookings</a>
            </div>
            <div className="content">
                <div className="dashboard-content">
                </div>
            </div> */}


        </div>
    )
}
