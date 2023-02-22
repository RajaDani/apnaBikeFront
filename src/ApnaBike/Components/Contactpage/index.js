import React, { useEffect } from "react";
import ContactForm from "../ContactFrom";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Contactpage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div data-aos="zoom-out" data-aos-once="true">
      <div
        className="pricingJumbo"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/bikefleet.jpg"
          })`,
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/middle2.png"}
          alt="icon"
        ></img>
        <div className="flexItems">
          <h1>CONTACT</h1>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link className="link" to="/home">
                HOME
              </Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              CONTACT
            </li>
          </ol>
        </div>
      </div>

      <section className="wpo-contact-form-map section-padding mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="contact-form">
                    <h2>Get In Touch</h2>
                    <ContactForm />
                  </div>
                </div>
                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="contact-map">
                    <iframe src="https://goo.gl/maps/CMrz4w2tRuawL6ht6"></iframe>
                  </div>
                </div>
              </div>
              <div className="wpo-contact-info">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="info-item">
                      <h2>Chakwal,Pakistan</h2>
                      <div className="info-wrap">
                        <div className="info-icon">
                          <i
                            className="fas fa-map-marker-alt"
                            style={{ color: "teal" }}
                          ></i>
                        </div>
                        <div className="info-text">
                          <span>Office Address</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="info-item">
                      <h2>danishimran889@gmail.com</h2>
                      <div className="info-wrap">
                        <div className="info-icon-2">
                          <i className="fas fa-envelope-open-text"></i>
                        </div>
                        <div className="info-text">
                          <span>Official Mail</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="info-item">
                      <h2>+92 340 0576761</h2>
                      <div className="info-wrap">
                        <div className="info-icon-3">
                          <i className="fas fa-phone"></i>
                        </div>
                        <div className="info-text">
                          <span>Official Phone</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactpage;
