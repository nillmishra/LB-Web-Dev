import React from "react";
import logo from "../assets/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;



    return (
        <div className="flex bg-gray-800 p-4 text-white gap-4 items-center justify-evenly">
            <Link to="/">
                <img src={logo} alt="Logo" className="navbar-logo" />
            </Link>
            <nav className="">
                <ul className="flex gap-4 ml-4">
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/" >About</NavLink></li>
                    <li><NavLink to="/ ">Contact</NavLink></li>
                </ul>
            </nav>
            <div className="gap-4">
                {!isLoggedIn &&
                    <Link to="/login">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
                    </Link>
                }
                {!isLoggedIn &&
                    <Link to="/signup">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded ml-2">Sign Up</button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/logout">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
                            onClick={() => {
                                setIsLoggedIn(false);
                                toast.success("Logged Out")
                            }}>Logout</button>
                    </Link>
                }
                {
                    isLoggedIn &&
                    <Link to="/dashboard">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2">Dashboard</button>
                    </Link>

                }


            </div>

        </div>

    );
}

export default Navbar;