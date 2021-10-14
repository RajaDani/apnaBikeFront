import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container mt-5 pt-4">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <p>APNABIKE IS HERE TO REDEFINE THE WAY YOU TRAVEL!
                                    RENT A BIKE ON AN HOURLY, DAILY, WEEKLY OR EVEN MONTHLY BASIS.</p>
                                <ul className="mt-3" style={{ marginLeft: '-30px' }}>
                                    <li><Link onClick={ClickHandler} to="/home"><i className="fab fa-facebook"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/home"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/home"><i className="fab fa-instagram"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/home"><i className="fab fa-google"></i></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>ApnaBike</h3>
                                </div>
                                <ul style={{ marginLeft: '-20px' }}>
                                    <li><Link onClick={ClickHandler} to="/aboutus"><span className="fas fa-angle-right"></span>  &nbsp;About Us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/faq"><span className="fas fa-angle-right"></span>  &nbsp;FAQS</Link></li>
                                    <li><Link onClick={ClickHandler} to="/pricing"><span className="fas fa-angle-right"></span>  &nbsp;Pricing</Link></li>
                                    <li><Link onClick={ClickHandler} to="/offers"><span className="fas fa-angle-right"></span>  &nbsp;Offers</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget resource-widget">
                                <div className="widget-title ml-5">
                                    <h3>Policies</h3>
                                </div>
                                <ul style={{ marginLeft: '0px' }}>
                                    <li><Link onClick={ClickHandler} to="/termsofuse">   <span className="fas fa-angle-right"></span> &nbsp;Terms Of Use</Link></li>
                                    <li><Link onClick={ClickHandler} to="/privacypolicy"><span className="fas fa-angle-right"></span> &nbsp;Privacy Policy</Link></li>
                                    <li><Link onClick={ClickHandler} to="/pricingpolicy"><span className="fas fa-angle-right"></span> &nbsp;Pricing Policy</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-3 offset-lg-1 col-md-6 col-sm-12 col-12">
                            <div className="widget market-widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <h6>ApnaBike. A Rent a Bike</h6>
                                <div className="contact-ft">
                                    <ul style={{ marginLeft: '-35px' }}>
                                        <li><i className="fad fa-map-marker-alt-slash"></i>  &nbsp;&nbsp;28 Street, New York City, USA</li>
                                        <li><i className="fas fa-phone-volume"></i>  &nbsp;&nbsp;+92 340 0576761</li>
                                        <li><i className="fas fa-envelope"></i> &nbsp;&nbsp;danishimran889@gmail.com</li>
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
                            <p className="copyright">&copy; 2021 Dansih. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;