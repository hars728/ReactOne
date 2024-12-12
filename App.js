import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://imgs.search.brave.com/jtJLvj-gHuaHg-6hRBY-s8yTVBWImiri3Vay4eytjVw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzAx/OTQvNTU2My85NjUy/L3QvMTIvYXNzZXRz/L2VYUkdVWVR5Ulkt/YWxwaGEtbW90by1s/b2dvLXBuZy5wbmc_/dj0xNTk1Nzg5NzYy" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contect Us</li>
                    <li>login</li>
                </ul>

            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />

        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

