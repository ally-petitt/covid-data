import React from 'react'
import BarGraph from "../../images/BarGraph.svg"

function Description() {
    return (
        <div className="d-flex w-100 flex-row-reverse justify-content-around" >
            <div className="mr-3 w-40">
                <h2>Analyze</h2>
                <ul>
                    <li></li>
                    <li>Find real-time data on the country of your choosing</li>
                    <li>Get current statistics on </li>
                </ul>
            </div>
            <img src={BarGraph} alt="Bar graph" 
                style={{objectFit: "contain", width: "40%"}} />
        </div>
    )
}

export default Description
