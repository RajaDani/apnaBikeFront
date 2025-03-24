import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./ApnaBike/Components/header";
import Footer from "./ApnaBike/Components/footer";
import CounterSection from "./ApnaBike/Components/counter";
import Pricing from "./ApnaBike/Components/pricing";
import Login from "./ApnaBike/Components/login";
import Location from "./ApnaBike/Components/location/location";
import WhyApnaBike from "./ApnaBike/Components/Whyus";
import Signup from "./ApnaBike/Components/Signup";
import ContactPage from "./ApnaBike/Components/Contactpage";
import Aboutus from "./ApnaBike/Components/Aboutus";
import FAQ from "./ApnaBike/Components/FAQ";
import HowItWorks from "./ApnaBike/Components/HowItWorks";
import AvailableBikes from "./ApnaBike/Components/AvailableBikes";
import SelectedBike from "./ApnaBike/Components/SelectedBike";
import RentalFeatures from "./ApnaBike/Components/RentalFeatures";
import HomeRent from "./ApnaBike/Components/HomeRent";
import Experience from "./ApnaBike/Components/Experience";
import RideWithus from "./ApnaBike/Components/Ridewithus";
import Feedback from "./ApnaBike/Components/Feedback";
import WhyusComponent from "./ApnaBike/Components/whyusComponent";
import MiddlePart from "./ApnaBike/Components/MiddlePart";
import Scrollbar from "./ApnaBike/Components/scrollbar";
import Checkout from "./ApnaBike/Components/Checkout";
import OrderPlaced from "./ApnaBike/Components/Checkout/orderPlaced";
import Error404 from "./ApnaBike/Components/Errors/404";
import MainPage from "./ApnaBike/Components/userControlPanel/mainPage";
import UserHeader from "./ApnaBike/Components/userControlPanel/Header";
import Sidebar from "./ApnaBike/Components/userControlPanel/Sidebar";
import AllBookings from "./ApnaBike/Components/userControlPanel/AllBookings";
import Stripe from "./ApnaBike/Components/Checkout/Payment/Stripe";
import Payment from "./ApnaBike/Components/Checkout/Payment/Payment";
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <>
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
            </>
          }
        />
        <Route
         path="/availablebikes"
          element={
            <>
              <Header />
              <AvailableBikes />
              <Scrollbar />
              <Footer />
            </>
          }
        />
        <Route path="/pricing" element={<><Header /><Pricing /><Footer /></>} />
        <Route path="/whyApnaBike" element={<><Header /><WhyusComponent /><Footer /></>} />
        <Route path="/contact" element={<><Header /><ContactPage /><Footer /></>} />
        <Route path="/aboutus" element={<><Header /><Aboutus /><Footer /></>} />
        <Route path="/faq" element={<><Header /><FAQ /><Footer /></>} />
        <Route path="/selectedBike" element={<><Header /><SelectedBike /><Footer /></>} />
        <Route path="/checkout" element={<><Header /><Checkout /><Footer /></>} />
        <Route path="/summary" element={<><Header /><OrderPlaced /><Footer /></>} />
        <Route path="/UserPanel/:userId" element={<MainPage />} />
        <Route path="/UserPanel/Allbookings/:userId" element={<><UserHeader /><Sidebar /><AllBookings /></>} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/checkout/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
