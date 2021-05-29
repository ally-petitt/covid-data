import React, { useEffect } from 'react'
import axios from "axios"
import CanvasJSReact from "../lib/canvasjs/canvasjs.react";

function Graph() {
    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    let data = [];

    useEffect(() => {
        axios.get("http://localhost:4000/").then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err);
        })  
    }, []);

    // const dataPoints = [];
    // for (var i = 0; i< data.length; i++) {
    //     console.log(data[i])
    // }

    // const options = {
    //   title: {
    //     text: "Basic Column Chart in React"
    //   },
    //   data: [{				
    //             type: "area",
    //             dataPoints: dataPoints
    //    }]
    // }

    
       return (
           <div></div>
        // <div>
        //     <h2>Graph</h2>
        //     <div>
        //         <CanvasJSChart options = {options}
        //             /* onRef = {ref => this.chart = ref} */
        //         />
        //     </div>
        // </div>
    )
}

export default Graph
