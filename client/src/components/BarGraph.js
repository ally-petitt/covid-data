import React, { useState, useEffect } from 'react'
import axios from "axios"
import { ResponsiveBar } from '@nivo/bar'

const BarGraph = ({ data, wasError }) => {


    // data = [
    //     {
    //         "description": "AD",
    //         "confirmed": 149,
    //     },
    //     {
    //         "description": "AE",
    //         "deaths": 146,
    //     },
    //     {
    //         "description": "AF",
    //         "critical": 36,
    //     },
    //     {
    //         "description": "AG",
    //         "recovered": 44,
    //     },
    // ]

    return (
        <div style={{height: "600px"}}>
            {wasError ? null :
                    <ResponsiveBar
                        data={data}
                        keys={[ 'confirmed', 'deaths', 'critical', 'recovered' ]}
                        indexBy="description"
                        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                        padding={0.3}
                        valueScale={{ type: 'linear' }}
                        indexScale={{ type: 'band', round: true }}
                        colors={{ scheme: 'nivo' }}
                        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Cases',
                            legendPosition: 'middle',
                            legendOffset: 32
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Number of Cases',
                            legendPosition: 'middle',
                            legendOffset: -40
                        }}
                        labelSkipWidth={12}
                        labelSkipHeight={12}
                        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                        legends={[
                            {
                                dataFrom: 'keys',
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 120,
                                translateY: 0,
                                itemsSpacing: 2,
                                itemWidth: 100,
                                itemHeight: 20,
                                itemDirection: 'left-to-right',
                                itemOpacity: 0.85,
                                symbolSize: 20,
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={15}
                    />
                }

            {wasError ? 
            <p className="text-danger">
                Data on this country was not found.
            </p>
            : null}
        </div>
    )
}

export default BarGraph
