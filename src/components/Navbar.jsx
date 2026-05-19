import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return (
        <div className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
            <NavLink to="/" className="text-blue-500 ml-25 ">
                Home
            </NavLink>
            <NavLink to="pastes" className="text-blue text-xl font-semibold mr-4 hover:text-pink-400 transition duration-300">
                 Pastes
            </NavLink>
        </div>
    )
}

export default Navbar