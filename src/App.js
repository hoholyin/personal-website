import './App.css';
import React from "react";
import Navbar from "./components/navbar";
import MobileNavbar from "./components/mobileNavbar";

function App() {
  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  isMobile = isMobile || document.documentElement.clientWidth < 400;
  return (
    <div className="App">
        <link href='http://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css' />
        {isMobile ? <MobileNavbar /> : <Navbar />}
        <div className="name-card">
            <div className="name-card-box">
            </div>
        </div>
    </div>
  );
}

export default App;
