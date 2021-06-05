import React from 'react'
import { FormControl } from "react-bootstrap"
import BarGraph from './BarGraph'


function Form() {
    return (
        <div>
            <h1>Real Time Data</h1>
            <form>
                <FormControl type="text" placeholder="Enter a Country" />
                <BarGraph />
            </form>
        </div>
    )
}

export default Form
