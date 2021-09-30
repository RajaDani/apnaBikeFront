import React from 'react'
import { Link } from 'react-router-dom'
import Newsletter from '../Newsletter';
import './style.css'

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className="wpo-site-footer">
            <Newsletter />
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">

                                <p>Build and Earn with your online store with lots of cool and exclusive wpo-features </p>
                                <ul className="mt-3" style={{ marginLeft: '-20px' }}>
                                    <li><Link onClick={ClickHandler} to="/home"><i className="fab fa-facebook"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/home"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/home"><i className="fab fa-instagram"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/home"><i className="fab fa-google"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget resource-widget">
                                <div className="widget-title">
                                    <h3>Top News</h3>
                                </div>
                                <div className="news-wrap">
                                    <div className="news-text">
                                        <h3><Link onClick={ClickHandler} to="/blog">Education for all poor children</Link></h3>
                                        <span>12 Nov, 2020</span>
                                    </div>
                                </div>
                                <div className="news-wrap">

                                    <div className="news-text">
                                        <h3><Link onClick={ClickHandler} to="/blog">Education for all poor children</Link></h3>
                                        <span>12 Nov, 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul style={{ marginLeft: '-20px' }}>
                                    <li><Link onClick={ClickHandler} to="/about"><span className="fas fa-angle-right"></span>  &nbsp;About Us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/case"><span className="fas fa-angle-right"></span>  &nbsp;Our Causes</Link></li>
                                    <li><Link onClick={ClickHandler} to="/case"><span className="fas fa-angle-right"></span>  &nbsp;Our Mission</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact"><span className="fas fa-angle-right"></span>  &nbsp;Contact Us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/event"><span className="fas fa-angle-right"></span>  &nbsp;Our Event</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 offset-lg-1 col-md-6 col-sm-12 col-12">
                            <div className="widget market-widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <p>online store with lots of cool and exclusive wpo-features</p>
                                <div className="contact-ft">
                                    <ul style={{ marginLeft: '-35px' }}>
                                        <li><i className="fad fa-map-marker-alt-slash"></i>  &nbsp;&nbsp;28 Street, New York City, USA</li>
                                        <li><i className="fas fa-phone-volume"></i>  &nbsp;&nbsp;+000123456789</li>
                                        <li><i className="fas fa-envelope"></i> &nbsp;&nbsp;nasarna@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright">&copy; 2020 Nasarna. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;