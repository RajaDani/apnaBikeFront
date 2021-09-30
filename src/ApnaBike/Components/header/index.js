import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import MobileMenu from '../MobileMenu';
import '../MobileMenu/style.css';
import './style.css'

const Header = () => {
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className="middle-header header-style-3" >
            {/* <HeaderTopbar /> */}
            <div className="container">
                <div className="header-content">
                    <div className="row">
                        <div className="col-lg-3 col-md-10 col-sm-10 col-10">
                            <div className="logo">
                                <img src="/logo.png" alt="" width="90" height="50" />
                                &nbsp;<a className="brandName"> ApnaBike</a>
                            </div>
                        </div>
                        <div className="col-lg-7 d-lg-block d-none">
                            <nav>
                                <ul>
                                    <li><Link className="active" to="/home" title="">Home</Link></li>
                                    <li><Link to="/event" title="">Why ApnaBike</Link></li>
                                    <li><Link to="/about" title="">Pricing</Link></li>
                                    <li><Link to="/case" title="">FAQ</Link></li>
                                    <li><Link to="/home" title="">Contact</Link></li>
                                </ul>

                            </nav>
                        </div>
                        <div className="col-lg-2 d-lg-block d-none mt-3 pt-1 ">
                            <Button className="btn btn-success mr-2">login</Button>
                            <Button className="btn btn-secondary">Signup</Button>
                        </div>
                        {/* <div className="contact">
                                <div className="cart-search-contact">
                                    <div className="header-search-form-wrapper">
                                        <button className="search-toggle-btn"><i className="fas fa-search fa-3x"></i></button>
                                        <div className="header-search-form">
                                            <form onSubmit={SubmitHandler}>
                                                <div>
                                                    <input type="text" className="form-control" placeholder="Search here..." />
                                                    <button type="submit"><i className="fa fa-search"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-md-2 col-sm-2 col-2">
                            <MobileMenu />
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    )
}

export default Header;