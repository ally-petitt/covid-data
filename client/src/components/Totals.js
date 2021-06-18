import React, { useEffect, useState } from 'react'
import axios from "axios";
import CanvasJSReact from "../lib/canvasjs/canvasjs.react";

export default function Totals() {
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const [options, setOptions] = useState({});
    const [wasError, setWasError] = useState(false);

    useEffect(async() => {
        let response;
        
        const result = await axios.get(`http://localhost:4000/graph/totals/world`)
            .then((res) => {
                response = res.data[0];
            })
            .catch((err) => {
                setWasError(true)
            })
        
        setData(response);

    }, []);

    const setData = (response) => {
        try {
            let data = {
                title: {
                    text: `Real-Time COVID-19 Statistics Worldwide`
                },
                data: [{	
                    type: "column",
                    dataPoints: [
                        {
                            y: response.confirmed,
                            label: "Confirmed"
                        },
                        {
                            y: response.recovered,
                            label: "Recovered"
                        },
                        {
                            y: response.critical,
                            label: "Critical"
                        },
                        {
                            y: response.deaths,
                            label: "Deaths"
                        }
                    ]
                }]
            }

            // assigned to another variable first to prevent infinite rendering loop
            setOptions(data);
        } catch (err) {
            setWasError(true);
        }
    }

    return (
        <div className="w-100 p-5">
            {options == {} || wasError ? null: <CanvasJSChart options={options} />}
            {wasError ? 
            <p className="text-danger mt-5">
                Could not fetch data at this time.
            </p> 
            : null}
        </div>
    )
}
