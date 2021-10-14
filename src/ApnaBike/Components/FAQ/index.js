import React from 'react'
import { Questions } from './questions';
import './style.css';

export default function FAQ() {
    return (
        <div>
            <div className="container">
                <h3>Frequently Ask Questions</h3>
                <h6 className="underline"></h6>
            </div>
            <div className="container QA pl-5 mt-5 mb-5">
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
        </div>
    )
}
