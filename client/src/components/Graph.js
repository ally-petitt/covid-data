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
                type: "area",
                dataPoints: [
                    { x: 1,  y: 10  },
                    { x: 2, y: 15  },
                    { x: 3, y: 25  },
                    { x: 4,  y: 30  },
                    { x: 5,  y: 28  }
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
