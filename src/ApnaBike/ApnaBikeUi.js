import React from "react";
import CounterSection from "./Components/counter";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Pricing from "./Components/pricing";
import Login from "./Components/login";
import Location from "./Components/location/location";
import WhyApnaBike from "./Components/Whyus";
import Signup from "./Components/Signup";
import ContactPage from "./Components/Contactpage";
import Aboutus from "./Components/Aboutus";
import FAQ from "../ApnaBike/Components/FAQ";
import HowItWorks from "./Components/HowItWorks";
import AvailableBikes from "./Components/AvailableBikes";
import SelectedBike from "./Components/SelectedBike";
import RentalFeatures from "./Components/RentalFeatures";
import HomeRent from "./Components/HomeRent";
import Experience from "./Components/Experience";
import RideWithus from "./Components/Ridewithus";
import Feedback from "./Components/Feedback";
import WhyusComponent from "./Components/whyusComponent";
import MiddlePart from "./Components/MiddlePart";
import Scrollbar from "./Components/scrollbar";
import Checkout from "./Components/Checkout";
import OrderPlaced from "./Components/Checkout/orderPlaced";
import Error404 from "./Components/Errors/404";
import MainPage from "./Components/userControlPanel/mainPage";
import UserHeader from "./Components/userControlPanel/Header";
import Sidebar from "./Components/userControlPanel/Sidebar";
import AllBookings from "./Components/userControlPanel/AllBookings";
import Stripe from "./Components/Checkout/Payment/Stripe";
import Payment from "./Components/Checkout/Payment/Payment";
import { Routes, Route } from "react-router-dom";

export default function ApnaBikeUi(props) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Routes>
        <Route path="/" element={<><Header /><MiddlePart /><HowItWorks /><RentalFeatures /><HomeRent /><WhyApnaBike /><CounterSection /><Experience /><RideWithus /><Location /><Feedback /><Footer /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<><Header /><MiddlePart /><HowItWorks /><RentalFeatures /><HomeRent /><WhyApnaBike /><CounterSection /><Experience /><RideWithus /><Location /><Feedback /><Footer /></>} />
        <Route path="/availablebikes/pickUpDate=:pickUpDate/dropoff=:dropoff/city=:city" element={<><Header /><AvailableBikes /><Scrollbar /><Footer /></>} />
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
    </div>
  );
}
