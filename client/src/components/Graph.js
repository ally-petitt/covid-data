import React, { useEffect } from 'react'
import axios from "axios"
import CanvasJSReact from "../lib/canvasjs/canvasjs.react";
// import {CanvasJSChart} from 'canvasjs-react-charts

function Graph() {
    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const dataPoints = [];

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
            dataPoints[i] ={
                 x: new Date(data[i].date.year,data[i].date.month, data[i].date.day ),
                 y: data[i].cases
            }
        }

    }, []);

    const options = {
      title: {
        text: "Basic Column Chart in React"
      },
      data: [{				
                type: "area",
                // for now, x=cases (will add second line)
                dataPoints: dataPoints // ex: x: new Date(2020, 6, 7), y: 10
       }]
    }

    
       return (
        <div>
            <h2>Graph</h2>
            <div>
                <CanvasJSChart options = {options}
                    /* onRef = {ref => this.chart = ref} */
                />
            </div>
        </div>
    )
}

export default Graph
