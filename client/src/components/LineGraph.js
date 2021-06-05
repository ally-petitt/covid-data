import React, { useEffect } from 'react'
import axios from "axios"
import CanvasJSReact from "../lib/canvasjs/canvasjs.react";

function LineGraph() {
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const dataPoints_cases = [];
    const dataPoints_deaths = [];

    let data = [];

    useEffect(async () => {
        const result = await axios.get("http://localhost:4000/graph/year").then((res) => {
            data = res.data;
        })
        .catch((err) => {
            console.log(err);
        })  

        for (var i = 0; i< data.length; i++) {
            // add items to array with required properties
            dataPoints_cases[i] ={
                 x: new Date(data[i].date.year,data[i].date.month, data[i].date.day ),
                 y: data[i].cases
            }

            dataPoints_deaths[i] = {
                 x: new Date(data[i].date.year,data[i].date.month, data[i].date.day ),
                 y: data[i].deaths
            }
        }

    }, []);

    const options = {
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

    
       return (
        <div>
            <CanvasJSChart options = {options} />
        </div>
    )
}

export default LineGraph
