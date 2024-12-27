import { LOGO_URL } from "../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-200 shadow-lg m-2">
            <div className="logo-container">
                <Link to="/"><img className="w-36 px-4" src={LOGO_URL} /></Link>

            </div>
            <div className="flex items-center">
                <ul className=" flex p-4 m-4  items-center">
                    <li className="px-4">Online Status:{onlineStatus ? "🟢" : "🔴"}</li>

                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>

                    <button className="bg-pink-500 border border-solid rounded-md p-2"
                        onClick={() => {
                            btnNameReact === "Login"
                                ? setBtnNameReact("Logout")
                                : setBtnNameReact("Login");
                        }}
                    >
                        {btnNameReact}
                    </button>
                </ul>

            </div>
        </div>
    );
};

export default Header;