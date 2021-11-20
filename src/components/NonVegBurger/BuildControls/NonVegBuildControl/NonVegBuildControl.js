import React from 'react'
import './NonVegBuildControl.css'

const nonvegbuildControl = (props) => (
    <div className="NonVegBuildControl">
        <div className="Label">{props.label}</div>
        <button
            className="NonLess" 
            onClick={props.removed}
            disabled={props.disabled}>
                Less</button>
        <button 
            className="NonMore" 
            onClick={props.added}>
                More</button>
    </div>
)

export default nonvegbuildControl;