import React, { useEffect } from 'react'
import { Questions } from './questions';
import { Link } from 'react-router-dom';
import './style.scss';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function FAQ() {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    return (
        <div data-aos="zoom-out" data-aos-once="true">

            <div className="pricingJumbo" style={{ backgroundImage: 'url(bikefleet.jpg)' }}>
                <img src="middle2.png" alt="icon"></img>
                <div className="flexItems">
                    <h1>FAQ</h1>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link className="link" to="/home">HOME</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">FAQ</li>
                    </ol>
                </div>
            </div>

            <div className="container QA p-5 mt-5 ">
                <h4>How does ApnaBike works ?</h4>
                <p>We are a platform that cooperates with more than 1650 bike rental partners all over the
                    world. To make a reservation, please follow these 3 steps:</p>
                <ol>
                    <li>Select the city or country of your destination and, if you’d like, specify the type of bike you want to rent.</li>
                    <li>Compare the various rental points to find the perfect match for you.</li>
                    <li>Easily book your bike online.</li>
                </ol>
                {Questions.map(question =>
                    <div className="QA">
                        <h4>{question.question}</h4>
                        <p>{question.answer}</p>
                    </div>
                )}

            </div>
        </div >
    )
}
