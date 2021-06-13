import React, { useState } from 'react'
import BarGraph from './BarGraph'

function Form() {
    const [input, setInput] = useState();
    const [country, setCountry] = useState();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitted(true);
        setCountry(input);
    }

    return (
        <div>
            <h1>Real-Time Data</h1>
            <form onSubmit={handleSubmit} className="mb-5">
                <input 
                className="form-control"
                type="text"
                placeholder="Enter a country"
                onChange={handleChange} />
                <button type="submit" className="btn btn-dark">View Statistics</button>
            </form>
            {isSubmitted ? <BarGraph country={country} key={country} /> : null}
        </div>
    )
}

export default Form
