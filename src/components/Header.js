import React from "react";
import "../styles/header.css"
import NavBar from "./NavBar";


export const Header = () => {


    return (
        <div className="component-container">
            <div className="header-container">
                <div className="header-logo">
                </div>
                <div className="nav-bar-container">
                </div>
            </div>
            <div className="logo-container">
                <NavBar />
            </div>
        </div>
    )
}