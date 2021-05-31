import React from 'react'
import { FormControl } from "react-bootstrap"


function Form() {
    return (
        <div>
            <h1>Real Time Data</h1>
            <form>
                <FormControl type="text" placeholder="Enter a Country" />
                <FormControl type="text" placeholder="Normal text" />

            </form>
        </div>
    )
}

export default Form
