import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css"

function Navbar() {


    const handleClick = (e) => {
        let a = e.target.innerText;
    }

    return (
        <nav className="p-4">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link className="nav-link text-info" 
                    aria-current="page" 
                    to="/year"
                    onClick={handleClick}
                    >Year</Link>
                </li>
                  <li className="nav-item">
                    <Link className="nav-link text-info" 
                    to="/country"
                    onClick={handleClick}
                    >Country</Link>
                </li>
                <li className="nav-item">
                    <Link 
                    className="nav-link text-info" 
                    to="/total"
                    onClick={handleClick}
                    >Total</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
