import React from "react";
import ApnaBikeUi from "./ApnaBike/ApnaBikeUi";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ApnaBikeUi />} />
      </Routes>
    </Router>
  );
}

export default App;
