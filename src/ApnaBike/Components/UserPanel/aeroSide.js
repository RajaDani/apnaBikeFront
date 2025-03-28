import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Sidebars() {
    // let admin = localStorage.getItem('adminName');

    return (

        <aside id="leftsidebar" className='sidebar' >
            <div class="navbar-brand mt-2">
                <button class="btn ls-toggle-btn" type="button"><i class="zmdi zmdi-menu"></i></button>
                <a href="" style={{ textDecoration: 'none' }} ><img src="/logo.png" width="50" height="30" alt="Aero" className="ml-2" /><span class="m-l-10">ApnaBike</span></a>
            </div>
            <div class="menu">
                <ul class="list">
                    <li>
                        <div className="user-info">
                            <a class="image " href="profile.html"><img src="boyImg2.jpg" alt="User" /></a>
                            <div class="detail">
                                <h4>Danish</h4>
                                <small>Super Admin</small>
                            </div>
                        </div>
                    </li>
                    <li><Link to='/admin' href="index.html"><i class="zmdi zmdi-home"></i><span>Dashboard</span></Link></li>
                    {/* <li><Link to='adminbikes' ><i class="zmdi zmdi-bike"></i><span>Bikes</span></Link></li>
                    <li> <Link to='/adminmanagebookings' ><i class="zmdi zmdi-assignment"></i><span>Manage Bookings</span></Link> </li>
                    <li><Link to='/admincalender'><i class="zmdi zmdi-calendar-check"></i><span>Calender</span></Link></li>
                    <li><Link to='/adminusers'><i class="zmdi zmdi-account"></i><span>Users</span></Link></li> */}

                    {/* <li><Link to="/chats"><i class="zmdi zmdi-inbox"></i><span>Chats</span></Link> </li> */}
                    <li ><Link ><i class="zmdi zmdi-lamp"></i><span>Dark Mode</span></Link> </li>
                    <li class="open_top"><Link to="/login"><i class="zmdi zmdi-map"></i><span>Logout</span></Link></li>

                </ul>
            </div>
        </aside>

    )
}
