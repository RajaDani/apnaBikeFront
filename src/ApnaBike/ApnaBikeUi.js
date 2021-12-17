import React, { useState } from 'react'
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
import Scrollbar from './Components/scrollbar';
import Checkout from './Components/Checkout';
import OrderPlaced from './Components/Checkout/orderPlaced';
import Error404 from './Components/Errors/404';
import MainPage from './Components/userControlPanel/mainPage';
import UserHeader from './Components/userControlPanel/Header';
import Sidebar from './Components/userControlPanel/Sidebar';
import PagesStarter from './Components/userControlPanel/pages-starter';
import AllBookings from './Components/userControlPanel/AllBookings';

export default function ApnaBikeUi(props) {
    return (

        <Router>
            <div style={{ overflow: 'hidden' }}>
                <Switch>
                    <Route exact path='/'>
                        <Header />
                        <MiddlePart />
                        {/* <Scrollbar /> */}
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
                        {/* <Scrollbar /> */}
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
                    <Route exact path='/availablebikes/pickUpDate=:pickUpDate/dropoff=:dropoff/city=:city'>
                        <Header />
                        <AvailableBikes />
                        <Scrollbar />
                        <Footer />
                    </Route>
                    <Route exact path="/pricing">
                        <Header />
                        <Pricing />
                        {/* <Scrollbar /> */}
                        <Footer />
                    </Route>
                    <Route exact path="/whyApnaBike">
                        <Header />
                        <WhyusComponent />
                        {/* <Scrollbar /> */}
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
                        {/* <Scrollbar /> */}
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
                        {/* <Scrollbar /> */}
                        <Footer />
                    </Route>
                    <Route exact path="/checkout">
                        <Header />
                        <Checkout />
                        <Footer />
                    </Route>
                    <Route exact path="/summary">
                        <Header />
                        <OrderPlaced />
                        <Footer />
                    </Route>
                    <Route exact path="/UserPanel/:userId">
                        <MainPage />
                    </Route>
                    <Route exact path="/UserPanel/Allbookings/:userId">
                        <UserHeader />
                        <Sidebar />
                        <AllBookings />
                    </Route>
                    <Route exact path="/Error404">
                        <Error404 />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
