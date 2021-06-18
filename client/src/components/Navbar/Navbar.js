import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "./navbar.css"

function Navbar() {
    const [activePath, setActivePath] = useState(false);

    useEffect(() => {
        setActivePath(window.location.pathname);
    }, [])

    const handleClick = (e) => {
        setActivePath(e.target.getAttribute("href"));
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <nav className="p-3">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className={`nav-link text-info ${activePath=="/home" ? "active text-light bg-info" : null}`}
                        aria-current="page"
                        to="/home"
                        onClick={handleClick}
                        >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link text-info ${activePath=="/year" ? "active text-light bg-info" : null}`}
                        aria-current="page"
                        to="/year"
                        onClick={handleClick}
                        >Year</Link>
                    </li>
                      <li className="nav-item">
                        <Link className={`nav-link text-info ${activePath=="/country" ? "active text-light bg-info" : null}`}
                        to="/country"
                        onClick={handleClick}
                        >Country</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        className={`nav-link text-info ${activePath=="/totals/world" ? "active text-light bg-info" : null}`}
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
