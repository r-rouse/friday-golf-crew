// NavBar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">
                    FGC
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Courses
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="/course/1">lil rec</a></li>
                                <li><a className="dropdown-item" href="/course/2">bixby</a></li>
                                <li><a className="dropdown-item" href="/course/3">heartwell</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Players
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="/players/4">Boogs Collier</a></li>
                                <li><a className="dropdown-item" href="/players/2">Chad Huff</a></li>
                                <li><a className="dropdown-item" href="/players/3">Chap Bloodsoe</a></li>
                                <li><a className="dropdown-item" href="/players/1">Randy Rouse</a></li>
                                <li><a className="dropdown-item" href="/players/5">Will Cambell</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Forms
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="/form/1">add scorecard</a></li>
                                <li><a className="dropdown-item" href="/form/2">add player</a></li>
                                <li><a className="dropdown-item" href="/form/3">add course</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
