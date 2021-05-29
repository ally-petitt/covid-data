import React, { useEffect } from 'react'
import CanvasJSReact from "../lib/canvasjs/canvasjs.react";

function Graph() {
    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const options = {
      title: {
        text: "Basic Column Chart in React"
      },
      data: [{				
                type: "column",
                dataPoints: [
                    { label: "Apple",  y: 10  },
                    { label: "Orange", y: 15  },
                    { label: "Banana", y: 25  },
                    { label: "Mango",  y: 30  },
                    { label: "Grape",  y: 28  }
                ]
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
