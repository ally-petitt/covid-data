import React, { useState } from 'react'
import BarGraph from './BarGraph'

function Form() {
    const [country, setCountry] = useState();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setCountry(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    }

    return (
        <div>
            <h1>Real Time Data</h1>
            <form onSubmit={handleSubmit}>
                <input 
                className="form-control"
                type="text"
                onChange={handleChange} />
                <button type="submit" className="btn btn-dark">View Statistics</button>
            </form>
            {isSubmitted ? <BarGraph country={country} /> : null}
        </div>
    )
}

export default Form
