import React from 'react'
import { Link } from 'react-router-dom'
import Newsletter from '../Newsletter'
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
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget-title">
                                <h3>ApnaBike</h3>
                            </div>
                            <div className="widget about-widget">
                                <p>APNABIKE IS HERE TO REDEFINE THE WAY YOU TRAVEL!
                                    RENT A BIKE ON AN HOURLY, DAILY, WEEKLY OR EVEN MONTHLY BASIS.</p>
                                <ul className="">
                                    <li><Link onClick={ClickHandler} to="/home"><i className="fab fa-facebook"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/home"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/home"><i className="fab fa-instagram"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/home"><i className="fab fa-google"></i></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget resource-widget">
                                <div className="widget-title">
                                    <h3>Policies</h3>
                                </div>
                                <ul>
                                    <li className="mt-3"><Link onClick={ClickHandler} to="/termsofuse">   <i className="fas fa-angle-right mr-1"></i>Terms Of Use</Link></li>
                                    <li className="mt-3"><Link onClick={ClickHandler} to="/privacypolicy"><i className="fas fa-angle-right mr-1"></i>Privacy Policy</Link></li>
                                    <li className="mt-3"><Link onClick={ClickHandler} to="/pricingpolicy"><i className="fas fa-angle-right mr-1"></i>Pricing Policy</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget link-widget">
                                    <div className="widget-title">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/whyApnaBike"> <i className="fas fa-angle-right mr-1"></i> About Us</Link></li>
                                        <li><Link onClick={ClickHandler} to="/faq">     <i className="fas fa-angle-right mr-1"></i> FAQS</Link></li>
                                        <li><Link onClick={ClickHandler} to="/pricing"> <i className="fas fa-angle-right mr-1"></i> Pricing</Link></li>
                                        <li><Link onClick={ClickHandler} to="/offers">  <i className="fas fa-angle-right mr-1"></i> Offers</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget market-widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <p>online store with lots of cool and exclusive wpo-features</p>
                                <div className="contact-ft" style={{ marginLeft: "-20px" }}>
                                    <ul>
                                        <li><i className="fad fa-map-marker-alt-slash mr-2"></i>28 Street, New York City, USA</li>
                                        <li><i className="fas fa-phone-volume mr-2"></i>+000123456789</li>
                                        <li><i className="fas fa-envelope mr-2"></i>nasarna @gmail.com</li>
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
                            <p className="copyright">&copy; 2021 Dansih.All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;