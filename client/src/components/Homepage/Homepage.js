import React from 'react'
import "./homepage.css"

import Hero from "./Hero";
import Description from "./Description"
import Footer from "./Footer";

function Homepage() {
    return (
        <div className="w-100">
            <Hero />
            <Description />
            <Footer />
        </div>
    )
}

export default Homepage
