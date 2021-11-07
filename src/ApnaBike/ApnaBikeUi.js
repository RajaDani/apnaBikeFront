import React, { useEffect } from 'react'
import BodyComponent from './Components/body/BodyComponent';
import CounterSection from './Components/counter';
import Header from './Components/header';
import Footer from './Components/footer';
import Pricing from './Components/pricing';
import Login from './Components/login';
import Location from './Components/location/location';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import WhyApnaBike from './Components/Whyus';
import Signup from './Components/Signup';
import ContactPage from './Components/Contactpage';
import Aboutus from './Components/Aboutus';
import FAQ from '../ApnaBike/Components/FAQ';
import HowItWorks from './Components/HowItWorks';
import AvailableBikes from './Components/AvailableBikes';
import SelectedBike from './Components/SelectedBike';
import RentalFeatures from './Components/RentalFeatures';
import HomeRent from './Components/HomeRent';
import Experience from './Components/Experience';
import RideWithus from './Components/Ridewithus';
import Feedback from './Components/Feedback';
import WhyusComponent from './Components/whyusComponent';
import MiddlePart from './Components/MiddlePart';

export default function ApnaBikeUi(props) {

    return (
        <Router>
            <div style={{ overflow: 'hidden' }}>
                <Switch>
                    <Route exact path='/'>
                        <Header />
                        <MiddlePart />
                        <HowItWorks />
                        <RentalFeatures />
                        <HomeRent />
                        <WhyApnaBike />
                        <CounterSection />
                        <Experience />
                        <RideWithus />
                        <Location />
                        <Feedback />
                        <Footer />
                    </Route>
                    <Route exact path='/login'>
                        <Login />
                    </Route>
                    <Route exact path='/signup'>
                        <Signup />
                    </Route>
                    <Route exact path='/home'>
                        <Header />
                        <MiddlePart />
                        <HowItWorks />
                        <RentalFeatures />
                        <HomeRent />
                        <WhyApnaBike />
                        <CounterSection />
                        <Experience />
                        <RideWithus />
                        <Location />
                        <Feedback />
                        <Footer />
                    </Route>
                    <Route exact path='/availablebikes'>
                        <Header />
                        <AvailableBikes />
                        <Footer />
                    </Route>
                    <Route exact path="/pricing">
                        <Header />
                        <Pricing />
                        <Footer />
                    </Route>
                    <Route exact path="/whyApnaBike">
                        <Header />
                        <WhyusComponent />
                        <Footer />
                    </Route>
                    <Route exact path="/contact">
                        <Header />
                        <ContactPage />
                        <Footer />
                    </Route>
                    <Route exact path="/aboutus">
                        <Header />
                        <Aboutus />
                        <Footer />
                    </Route>
                    <Route exact path="/faq">
                        <Header />
                        <FAQ />
                        <Footer />
                    </Route>
                    <Route exact path="/selectedBike">
                        <Header />
                        <SelectedBike />
                        <Footer />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
