import React, { useState, useEffect } from 'react'
import axios from "axios"
import CanvasJSReact from "../lib/canvasjs/canvasjs.react";

const BarGraph = () => {
    const [isGettingData, setIsGettingData] = useState(true);
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    let response;
    let options;

    useEffect(async () => {
        // const result = await axios.get(`http://localhost:4000/graph/country/italy`).then((res) => {
        //     response = res.data;
        //     console.log(res.data)
        // })
        // .catch((err) => {
        //     console.log(err);
        // })

        // options = {
        //     title: {
        //         // text: `COVID-19 Statistics in ${response.country}`
        //         text: "test"
        //     },
        //     data: [{	
        //         type: "column",
        //         dataPoints: [
        //             {
        //                 // y: response.confirmed,
        //                 y: 8,
        //                 label: "Confirmed"
        //             }
        //         ]
        //     }]
        // }

        // options = {
        //     title: {
        //         text: "Basic Column Chart in React"
        //     },
        //     data: [{				
        //                 type: "column",
        //                 dataPoints: [
        //                     { label: "Apple",  y: 10  },
        //                     { label: "Orange", y: 15  },
        //                     { label: "Banana", y: 25  },
        //                     { label: "Mango",  y: 30  },
        //                     { label: "Grape",  y: 28  }
        //                 ]
        //     }]
        // }

        // almost there
        setIsGettingData(false);
        // set false
    }, []);

    options = {
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

        // the problem has to do with the options not being assigned as the component renders

    return (
        <div>
            {/* {!isGettingData ? <CanvasJSChart options={options} /> : null} */}
        </div>
    )
}

export default BarGraph
