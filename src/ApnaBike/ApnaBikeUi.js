import React from 'react'
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

export default function ApnaBikeUi() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/'>
                        <Header />
                        <BodyComponent />
                        <HowItWorks />
                        <CounterSection />
                        <WhyApnaBike />
                        <Location />
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
                        <BodyComponent />
                        <HowItWorks />
                        <CounterSection />
                        <WhyApnaBike />
                        <Location />
                        <Footer />
                    </Route>
                    <Route exact path="/pricing">
                        <Header />
                        <Pricing />
                        <Footer />
                    </Route>
                    <Route exact path="/whyApnaBike">
                        <Header />
                        <WhyApnaBike />
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
                </Switch>
            </div>
        </Router>
    )
}
