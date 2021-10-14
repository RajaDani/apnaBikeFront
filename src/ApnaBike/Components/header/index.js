import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import MobileMenu from '../MobileMenu';
import '../MobileMenu/style.css';
import './style.css'

const Header = () => {

    return (
        <div className="middle-header header-style-3" >
            <div className="container">
                <div className="header-content">
                    <div className="row">
                        <div className="col-lg-3 col-md-10 col-sm-10 col-10">
                            <div className="logo">
                                <img src="/logo.png" alt="" width="90" height="50" />
                                &nbsp;<Link to="/home" className="brandName"> ApnaBike</Link>
                            </div>
                        </div>
                        <div className="col-lg-7 d-lg-block d-none">
                            <nav>
                                <ul>
                                    <li><Link className="active" to="/home" title="">Home</Link></li>
                                    <li><Link to="/whyApnaBike" title="">Why ApnaBike</Link></li>
                                    <li><Link to="/pricing" title="">Pricing</Link></li>
                                    <li><Link to="/faq" title="">FAQ</Link></li>
                                    <li><Link to="/contact" title="">Contact</Link></li>
                                </ul>

                            </nav>
                        </div>
                        <div className="col-lg-2 d-lg-block d-none mt-3 pt-1 loginSignup" >
                            <Link to="/login"><Button className="btn btn-success mr-2">login</Button></Link>
                            <Link to="/signup"><Button className="btn btn-secondary">Signup</Button></Link>
                        </div>

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