import React, { useEffect, useState } from 'react'
import axios from "axios";

import BarGraph from './BarGraph';

export default function Totals() {
    const [hasFetchedData, setHasFetchedData] = useState(false);
    const [data, setData] = useState();
    const [wasError, setWasError] = useState(false);

    useEffect(async() => {
        let response; 
        
        try {
            const result = await axios.get(`http://localhost:4000/graph/totals/world`)
                .then((res) => {
                    response = res.data[0];
                })
                .catch((err) => {
                    setWasError(true)
                })

        let options = [
                {
                    "description": "Confirmed",
                    "confirmed": response.confirmed,
                },
                {
                    "description": "Deaths",
                    "deaths": response.deaths,
                },
                {
                    "description": "Critical",
                    "critical": response.critical,
                },
                {
                    "description": "Recovered",
                    "recovered": response.recovered,
                },
            ]

            setData(options)
            console.log(data);
            setHasFetchedData(true);
        } catch (err) {
            setWasError(true);
        }
    }, []);

    return (
        <div className="w-100 p-5">
            {!hasFetchedData || wasError ? null: 
                <BarGraph data={data} errorMessage="Could not fetch data at this time." wasError={wasError} key={data} />
            }
        </div>
    )
}
