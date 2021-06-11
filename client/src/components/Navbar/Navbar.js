import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./navbar.css"

function Navbar() {
    const [activeElem, setActiveElem] = useState(false);

    const handleClick = (e) => {
        setActiveElem(e.target.innerText)
    }

    return (
        <nav className="p-4">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link className={`nav-link text-info ${activeElem=="Year" ? "active text-light bg-info" : null}`} 
                    aria-current="page" 
                    to="/year"
                    onClick={handleClick}
                    >Year</Link>
                </li>
                  <li className="nav-item">
                    <Link className={`nav-link text-info ${activeElem=="Country" ? "active text-light bg-info" : null}`} 
                    to="/country"
                    onClick={handleClick}
                    >Country</Link>
                </li>
                <li className="nav-item">
                    <Link 
                    className={`nav-link text-info ${activeElem=="Total" ? "active text-light bg-info" : null}`} 
                    to="/total"
                    onClick={handleClick}
                    >Total</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
