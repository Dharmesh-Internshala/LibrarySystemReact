import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"

function Header() {
    return(
        <>
                <header className="header-container">
                <div className="logo">
                <img src={logo} alt="" />
                </div>
                <div className="nav">
                    <ul className="nav-heading">
                        <Link to="/" className="Home-btn">Home</Link>
                        <Link to="/browsebook" className="browsebook-btn">BrowseBook</Link>
                        <Link to="addbook" className="addbook-btn">Add Books</Link>
                    </ul>
                </div>
            </header>
   
        </>
    )
}

export default Header;