import React from 'react'
import BodyComponent from './Components/BodyComponent';
import './Components/header.css';
// import CaseSlide from './Components/case';
// import './Components/case/style.css';
import Mission from './Components/mission';
import './Components/mission/style.css';
import CounterSection from './Components/counter';
import './Components/counter/style.css';
import Location from './Components/location';
// import Header from './Components/Navbar';
// import './Components/navbar.css';
import Header from './Components/header';
import './Components/header/style.css';
import Footer from './Components/footer';
import './Components/footer/style.css'

export default function ApnaBikeUi() {
    return (
        <div>
            <Header />
            <BodyComponent />
            <Mission />
            <CounterSection />
            <Location />
            <Footer />
        </div>
    )
}
