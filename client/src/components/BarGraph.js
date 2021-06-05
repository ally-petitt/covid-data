import React, { useEffect } from 'react'
import axios from "axios"
import CanvasJSReact from "../lib/canvasjs/canvasjs.react";

function BarGraph() {
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const dataPoints_cases = [];
    const dataPoints_deaths = [];

    let response;
    let country = "italy";

    useEffect(async () => {
        const result = await axios.get(`http://localhost:4000/graph/country/italy`).then((res) => {
            response = res.data;
            console.log(res.body)
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    const options = {
      title: {
        text: `COVID-19 Statistics in ${response.country}`
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

    return (
        <div>
            <CanvasJSChart options = {options} />
        </div>
    )
}

export default BarGraph
