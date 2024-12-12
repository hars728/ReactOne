import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://imgs.search.brave.com/kVwV-lOR8T-feom3kwV_6vHhmOhR-XT-VXtVEn7Q69g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/em9vcGluZGlhLmNv/bS9fbmV4dC9pbWFn/ZT91cmw9aHR0cHM6/Ly9tZWRpYS56b29w/aW5kaWEuY29tL291/dGxldHMtaW1hZ2Vz/LzU4MC53ZWJwJnc9/NTgwJnE9NzU.jpeg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contect Us</li>
                    <li>Login</li>
                </ul>

            </div>
        </div>
    );
};

const ResturentCard = () => {
    return (
        <div className="res-card">
            <div className="card-ima">
                <img className="card-img" src="https://imgs.search.brave.com/2RKhgXU_0fFFL-duNkjUJZi3NYlECckqvWBckggwIqs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL2pa/TTAxSnJPdmJWa2VT/TzVaTFVrN1dEODRw/czR3QTJjYTRZME5u/TkdhODVadVNnNjRn/XzFUaW9lTkVadUZO/TWlOd1ZhZWpmdmdu/bFREZ3dZVFBLWDc5/WVI2SzA9dzE5Mi1y/dw.jpeg" />
            </div>
            <h3>Sharma bhojnalaye</h3>
            <h4>Full-plate North-Indian</h4>
            <h4>4.5 Star Rating</h4>
            <h4>Dilevered in 30 min</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="card-container">
                <ResturentCard />
                <ResturentCard />
                <ResturentCard />
                <ResturentCard />
                <ResturentCard />
                <ResturentCard />
                <ResturentCard />
                <ResturentCard />
                <ResturentCard />
                <ResturentCard />
                <ResturentCard />
                <ResturentCard />
                <ResturentCard />
                <ResturentCard />
                <ResturentCard />
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <div className="footer">
            <h1>For better experience,download the app now</h1>
            <h2>© 2024 HarshKrGupta Limited</h2>
        </div>

    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

