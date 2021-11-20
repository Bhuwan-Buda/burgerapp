import React from 'react'
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Onion', type: 'onion' },
    { label: 'Tomato', type: 'tomato' },
    { label: 'Lettuce', type: 'lettuce' },
    { label: 'Veg Patties', type: 'vegpatties' },
    { label: 'Cheese', type: 'cheese'}
]

const BuildControls = (props) => {
    return(
        <div className="vegBuildControls">
            <p className="vegpriceTag">Current Price: Rs. <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]} />
            ))}
            <button 
                className="OrderButton"
                disabled={!props.purchasable}
                onClick={props.ordered}>ORDER NOW</button>
            
        </div>
    )
}

export default BuildControls;