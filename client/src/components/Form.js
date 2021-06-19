import axios from 'axios';
import React, { useState } from 'react'
import BarGraph from './BarGraph'

function Form() {
    const [country, setCountry] = useState();
    const [data, setData] = useState();
    const [wasError, setWasError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setCountry(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getData(country);
    }

    const getData = async() => {
            let response; 
            
            try {
                const result = await axios.get(`http://localhost:4000/graph/country/${country}`)
                    .then((res) => {
                        response = res.data;
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
                setIsSubmitted(true);
            } catch (err) {
                setWasError(true);
            }
    }

    return (
        <div className="d-flex flex-column w-75">
            <h1>Real-Time Data</h1>
            <form onSubmit={handleSubmit} className="mb-5 d-flex flex-column align-items-center">
                <input 
                className="form-control mt-5"
                type="text"
                style={{width: "300px"}}
                placeholder="Enter a country"
                onChange={handleChange} />
                <button type="submit" className="btn btn-dark mt-4">View Statistics</button>
            </form>
            {isSubmitted ? <BarGraph data={data} wasError={wasError} key={data} errorMessage="Could not find data on this country." /> : null}
        </div>
    )
}

export default Form
