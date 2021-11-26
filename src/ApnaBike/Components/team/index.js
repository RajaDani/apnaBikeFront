import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const TeamSection = (props) => {
    return (
        <div className="wpo-team-area section-padding">
            <div className="container">
                <div className="row pb-4">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span style={{ color: 'rgb(122, 199, 129)', fontSize: '19px', fontWeight: 'bold', marginTop: '20px' }}>Meet Our Team</span>
                            <h2 style={{ marginTop: '10px', color: '#444' }}>Our Expert Team</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-team-wrap">
                            <div className="wpo-team-img">
                                <img src='team1.jpg' alt="" />
                            </div>
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h2><Link to="/volunteer">Smith Tomkin</Link> </h2>
                                    <span>CEO & Founder</span>
                                    <ul>
                                        <li><Link to="/volunteer"><i className="fab fa-facebook"></i></Link></li>
                                        <li><Link to="/volunteer"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="/volunteer"><i className="fab fa-google"></i></Link></li>
                                        <li><Link to="/volunteer"><i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-team-wrap">
                            <div className="wpo-team-img">
                                <img src='team2.jpg' alt="" />
                            </div>
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h2><Link to="/volunteer">Robert Honey</Link></h2>
                                    <span>Marketing Manager</span>
                                    <ul>
                                        <li><Link to="/volunteer"><i className="fab fa-facebook"></i></Link></li>
                                        <li><Link to="/volunteer"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="/volunteer"><i className="fab fa-google"></i></Link></li>
                                        <li><Link to="/volunteer"><i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-team-wrap">
                            <div className="wpo-team-img">
                                <img src='team3.jpg' alt="" />
                            </div>
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h2><Link to="/volunteer">Juliya Jossoy</Link></h2>
                                    <span>Seo Manager</span>
                                    <ul>
                                        <li><Link to="/volunteer"><i className="fab fa-facebook"></i></Link></li>
                                        <li><Link to="/volunteer"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="/volunteer"><i className="fab fa-google"></i></Link></li>
                                        <li><Link to="/volunteer"><i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamSection;