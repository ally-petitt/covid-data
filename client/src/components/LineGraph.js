import React, { useEffect, useState } from 'react'
import axios from "axios"
import CanvasJSReact from "../lib/canvasjs/canvasjs.react";
import { ResponsiveStream } from '@nivo/stream'
// import {XYPlot, LineSeries, XAxis, YAxis, HorizontalGridLines, VerticalGridLines} from 'react-vis';

function LineGraph() {
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const [options, setOptions] = useState({})
    const [wasError, setWasError] = useState(false);

    // useEffect(async () => {
    //     let response;
    //     let dataPoints_cases=[];
    //     let dataPoints_deaths=[];

    //     try {
    //         const result = await axios.get("http://localhost:4000/graph/year").then((res) => {
    //             response = res.data;
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })  

    //         for (var i = 0; i< response.length; i++) {
    //             // add items to array with required properties
    //             dataPoints_cases[i] ={
    //                 x: new Date(response[i].date.year,response[i].date.month, response[i].date.day ),
    //                 y: response[i].cases
    //             }

    //             dataPoints_deaths[i] = {
    //                 x: new Date(response[i].date.year,response[i].date.month, response[i].date.day ),
    //                 y: response[i].deaths
    //             }
    //         }

    //         let data = {
    //         title: {
    //             text: "Number of COVID-19 Cases and Deaths"
    //         },
    //         axisY: {
    //             title: "People"
    //         },
    //         axisX: {
    //             title: "Date"
    //         },
    //         data: [{				
    //                     type: "area",
    //                     legendText: "Cases",
    //                     showInLegend: true,
    //                     dataPoints: dataPoints_cases
    //         },
    //             {
    //             type: "area",
    //             legendText: "Deaths",
    //             showInLegend: true,
    //             dataPoints: dataPoints_deaths
    //             }]
    //         }

    //         setOptions(data);
    //     } catch (err) {
    //         setWasError(true);
    //     }
    // }, []);

const data = [
  {
    "Raoul": 159,
    "Josiane": 129,
    "Marcel": 87,
    "René": 19,
    "Paul": 144,
    "Jacques": 133
  },
  {
    "Raoul": 39,
    "Josiane": 191,
    "Marcel": 43,
    "René": 158,
    "Paul": 154,
    "Jacques": 177
  },
  {
    "Raoul": 47,
    "Josiane": 51,
    "Marcel": 199,
    "René": 62,
    "Paul": 195,
    "Jacques": 163
  },
  {
    "Raoul": 84,
    "Josiane": 83,
    "Marcel": 74,
    "René": 112,
    "Paul": 39,
    "Jacques": 117
  },
  {
    "Raoul": 165,
    "Josiane": 196,
    "Marcel": 27,
    "René": 27,
    "Paul": 45,
    "Jacques": 28
  },
  {
    "Raoul": 41,
    "Josiane": 79,
    "Marcel": 70,
    "René": 150,
    "Paul": 15,
    "Jacques": 176
  },
  {
    "Raoul": 139,
    "Josiane": 184,
    "Marcel": 115,
    "René": 12,
    "Paul": 17,
    "Jacques": 25
  },
  {
    "Raoul": 169,
    "Josiane": 181,
    "Marcel": 41,
    "René": 10,
    "Paul": 145,
    "Jacques": 69
  },
  {
    "Raoul": 48,
    "Josiane": 41,
    "Marcel": 182,
    "René": 78,
    "Paul": 167,
    "Jacques": 150
  }
]


       return (
        <div className="w-100 p-5" style={{ height: "600px"}}>
            {/* {options == {} || wasError ? null: <CanvasJSChart options={options} />}
            {wasError ? 
            <p className="text-danger mt-5">
                Could not fetch data at this time.
            </p> 
            : null} */}
    <ResponsiveStream
        data={data}
        keys={[ 'Raoul', 'Josiane', 'Marcel', 'René', 'Paul', 'Jacques' ]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            tickValues: "every day",
            legend: '',
            legendOffset: 36
        }}
        axisLeft={{ orient: 'left', tickSize: 5, tickPadding: 5, tickRotation: 0, legend: '', legendOffset: -40 }}
        offsetType="diverging"
        colors={{ scheme: 'nivo' }}
        fillOpacity={0.85}
        borderColor={{ theme: 'background' }}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 100,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999999',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000000'
                        }
                    }
                ]
            }
        ]}
    />
        </div>
    )
}

export default LineGraph
