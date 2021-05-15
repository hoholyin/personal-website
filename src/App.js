import './App.css';
import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home";
import Education from "./pages/education";

const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        || document.documentElement.clientWidth < 400;

const setPage = (page) => {
    const res = page.split("/");
    const path = res[res.length - 1]
    switch (path) {
        case "home":
            return <Home isMobile={isMobile}/>;
        case "education":
            return <Education isMobile={isMobile} />;
        case "projects":
            return;
        case "teaching":
            return;
        default:
            return <Home isMobile={isMobile}/>;
    }
}

const getPage = () => {
    const url = window.location.href.split("/");
    return url[url.length - 1];
}

const App = () => {
    const [currentPage, setCurrentPage] = useState(getPage());

    return (
        <div className="App">
            <link href='http://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css' />
            <Navbar isMobile={isMobile} callback={setCurrentPage}/>
            { setPage(currentPage) }
        </div>
    );
}

export default App;
