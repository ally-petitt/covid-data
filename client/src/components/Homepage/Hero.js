import React from 'react'

function Hero() {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <section className="hero bg-dark">
                    <div className="text text-light">
                        <h1>COVID-19 STATISTICS</h1>
                        <h3>All the data you could ever need.</h3>
                    </div>
                    <div id="triangle"></div>
                </section>
            </div>
            <section className="description">
                <div className="text">
                </div>
            </section>
        </div>
    )
}

export default Hero
