import React, { useState, useEffect } from 'react'
import axios from "axios"
import CanvasJSReact from "../lib/canvasjs/canvasjs.react";

const BarGraph = ({ country }) => {
    const [options, setOptions] = useState({});
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    let response;

    useEffect(async () => {
        const result = await axios.get(`http://localhost:4000/graph/country/${country}`)
            .then((res) => {
                response = res.data;
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            })

        let data = {
            title: {
                text: `COVID-19 Statistics in ${response.country}`
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

        setOptions(data);
    }, []);

    return (
        <div>
            {options == {} ? null: <CanvasJSChart options={options} />}
        </div>
    )
}

export default BarGraph
