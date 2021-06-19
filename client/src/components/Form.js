import React, { useState } from 'react'
import BarGraph from './BarGraph'

function Form() {
    const [input, setInput] = useState();
    const [data, setData] = useState();
    const [wasError, setWasError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getData(input);
    }

    const getData = () => {
            let response; 
            
            try {
                // const result = await axios.get(`http://localhost:4000/graph/country/${country}`)
                //     .then((res) => {
                //         response = res.data;
                //     })
                //     .catch((err) => {
                //         setWasError(true)
                //     })

            let options = [
                    {
                        "description": "AD",
                        "confirmed": 149,
                    },
                    {
                        "description": "AE",
                        "deaths": 146,
                    },
                    {
                        "description": "AF",
                        "critical": 36,
                    },
                    {
                        "description": "AG",
                        "recovered": 44,
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
            {isSubmitted ? <BarGraph data={data} wasError={wasError} key={data} /> : null}
        </div>
    )
}

export default Form
