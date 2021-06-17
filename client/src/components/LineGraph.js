import React, { useEffect, useState } from 'react'
import axios from "axios"
import CanvasJSReact from "../lib/canvasjs/canvasjs.react";

function LineGraph() {
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const [options, setOptions] = useState({})

    useEffect(async () => {
        let response;
        let dataPoints_cases=[];
        let dataPoints_deaths=[];

        const result = await axios.get("http://localhost:4000/graph/year").then((res) => {
            response = res.data;
        })
        .catch((err) => {
            console.log(err);
        })  

        for (var i = 0; i< response.length; i++) {
            // add items to array with required properties
            dataPoints_cases[i] ={
                 x: new Date(response[i].date.year,response[i].date.month, response[i].date.day ),
                 y: response[i].cases
            }

            dataPoints_deaths[i] = {
                 x: new Date(response[i].date.year,response[i].date.month, response[i].date.day ),
                 y: response[i].deaths
            }
        }

        let data = {
        title: {
            text: "Number of COVID-19 Cases and Deaths"
        },
        axisY: {
            title: "People"
        },
        axisX: {
            title: "Date"
        },
        data: [{				
                    type: "area",
                    legendText: "Cases",
                    showInLegend: true,
                    dataPoints: dataPoints_cases
        },
            {
            type: "area",
            legendText: "Deaths",
            showInLegend: true,
            dataPoints: dataPoints_deaths
            }]
        }

        setOptions(data);

    }, []);

       return (
        <div className="w-100 p-4">
            {options == {} ? null: <CanvasJSChart options={options} />}
        </div>
    )
}

export default LineGraph
