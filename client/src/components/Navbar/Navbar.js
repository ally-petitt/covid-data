import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./navbar.css"

function Navbar() {
    const [activeElem, setActiveElem] = useState(false);

    const handleClick = (e) => {
        setActiveElem(e.target.innerText)
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <nav className="p-3">
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
                        className={`nav-link text-info ${activeElem=="World Totals" ? "active text-light bg-info" : null}`}
                        to="/totals/world"
                        onClick={handleClick}
                        >World Totals</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
