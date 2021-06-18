import React from 'react'
import BarGraph from "../../images/BarGraph.svg"

function Description() {
    return (
        <div className="d-flex w-100 flex-column justify-content-center align-items-center flex-md-row-reverse justify-content-md-around p-5" >
            <div className="mx-3 mb-3 w-40 d-flex flex-column">
                <h2>Analyze</h2>
                <ul className="text-left my-auto">
                    <li className="my-2 my-md-3">Visualize the initial impact of COVID-19</li>
                    <li className="my-2 my-md-3">Find real-time data on the country of your choosing</li>
                    <li className="my-2 my-md-3">Get current statistics on worldwide COVID-19 cases</li>
                </ul>
            </div>
            <img src={BarGraph} alt="Bar graph" 
                style={{objectFit: "contain", width: "40%"}} />
        </div>
    )
}

export default Description
